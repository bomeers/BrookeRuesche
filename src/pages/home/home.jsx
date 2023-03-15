import { useState } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger'
import logo from '/images/logos/logo-white.svg'
import bumpMap from '../../../blender/weight-plate-texture.png'

function Home() {
    const [count, setCount] = useState(0)

    // how to build cannon js with custom model https://www.youtube.com/watch?v=P9n6Jaww3Ow

    // scene setup
    // ====================
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera setup
    // ====================
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 20, -30);
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.update();

    // lights setup
    // ====================
    const light1 = new THREE.DirectionalLight(0xffffff, 0.5);
    light1.position.set(100, 120, 100);
    scene.add(light1)

    // cannon world setup
    // ====================
    const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.81, 0) });
    // debug (wireframe)
    const cannonDebugger = new CannonDebugger(scene, world, {})

    // add ground
    const groundGeo = new THREE.PlaneGeometry(30, 30);
    const groundMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        wireframe: true
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    scene.add(groundMesh);

    const groundPhysMat = new CANNON.Material({ color: 0xffff00 });
    const groundBody = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(15, 15, 0.1)),
        type: CANNON.Body.STATIC,
        material: groundPhysMat
    });
    world.addBody(groundBody);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

    // add weight plate
    let weightPlate;
    const weightPlatePhysMat = new CANNON.Material({ color: 0xffff00 });
    const weightPlateBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Cylinder(1.65, 1.65, 0.5, 20),
        position: new CANNON.Vec3(0, 20, 0),
        material: weightPlatePhysMat
    });
    world.addBody(weightPlateBody);

    // weightPlateBody.angularVelocity.set(0, 10, 0);
    // weightPlateBody.angularDamping = 0.5;

    const fbxLoader = new FBXLoader()
    fbxLoader.load('blender/weight-plate.fbx', (object) => {
        weightPlate = object
        weightPlate.scale.set(2, 2, 2)
        weightPlate.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.bumpMap = new THREE.TextureLoader().load(bumpMap);
                child.material.bumpScale = 0.01;
            }
        });
        weightPlate.position.copy(weightPlateBody.position);
        weightPlate.quaternion.copy(weightPlateBody.quaternion);

        scene.add(weightPlate)
    },
        (xhr) => { console.log((xhr.loaded / xhr.total) * 100 + '% loaded') },
        (error) => { console.log(error) }
    )

    const groundBoxContactMat = new CANNON.ContactMaterial(
        groundPhysMat,
        weightPlatePhysMat,
        { friction: 0.04 }
    );
    world.addContactMaterial(groundBoxContactMat);


    // renderer setup
    function animate() {
        world.step(1 / 60);

        groundMesh.position.copy(groundBody.position);
        groundMesh.quaternion.copy(groundBody.quaternion);

        if (weightPlate) {
            weightPlate.position.copy(weightPlateBody.position);
            weightPlate.quaternion.copy(weightPlateBody.quaternion);
        }

        // cannonDebugger.update()
        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

export default Home
