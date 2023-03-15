import { useState } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as CANNON from 'cannon-es';
import logo from '/images/logos/logo-white.svg'

function Home() {
    const [count, setCount] = useState(0)

    // how to build cannon js with custom model https://www.youtube.com/watch?v=P9n6Jaww3Ow

    // scene setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera setup
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 20, -30);
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.update();

    /// models
    // weight plate custom model
    let weightPlate;
    const fbxLoader = new FBXLoader()
    fbxLoader.load('blender/weight-plate.fbx', (object) => {
        object.scale.set(1, 1, 1)
        weightPlate = object
        scene.add(weightPlate)
    },
        (xhr) => { console.log((xhr.loaded / xhr.total) * 100 + '% loaded') },
        (error) => { console.log(error) }
    )

    const groundGeo = new THREE.PlaneGeometry(30, 30);
    const groundMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        wireframe: true
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    scene.add(groundMesh);


    // cannon world setup
    const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.81, 0) });

    const groundPhysMat = new CANNON.Material();

    const groundBody = new CANNON.Body({
        //shape: new CANNON.Plane(),
        //mass: 10
        shape: new CANNON.Box(new CANNON.Vec3(15, 15, 0.1)),
        type: CANNON.Body.STATIC,
        material: groundPhysMat
    });
    world.addBody(groundBody);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

    const boxPhysMat = new CANNON.Material();

    const boxBody = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
        position: new CANNON.Vec3(1, 20, 0),
        material: boxPhysMat
    });
    world.addBody(boxBody);

    boxBody.angularVelocity.set(0, 10, 0);
    boxBody.angularDamping = 0.5;

    const groundBoxContactMat = new CANNON.ContactMaterial(
        groundPhysMat,
        boxPhysMat,
        { friction: 0.04 }
    );

    world.addContactMaterial(groundBoxContactMat);


    // renderer setup
    function animate() {
        world.step(1 / 60);

        groundMesh.position.copy(groundBody.position);
        groundMesh.quaternion.copy(groundBody.quaternion);

        weightPlate.position.copy(boxBody.position);
        weightPlate.quaternion.copy(boxBody.quaternion);

        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });


    // ================================

    // // scene setup
    // const scene = new THREE.Scene();
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    // // camera setup
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = 5;
    // const controls = new OrbitControls(camera, renderer.domElement)

    // // create lights
    // const light = new THREE.PointLight()
    // light.position.set(2, 2, 2)
    // scene.add(light)

    // const ambientLight = new THREE.AmbientLight()
    // scene.add(ambientLight)

    // // weight plate custom model
    // const fbxLoader = new FBXLoader()
    // fbxLoader.load('blender/weight-plate.fbx', (object) => {
    //     scene.add(object)
    // },
    //     (xhr) => {
    //         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )

    // function animate() {
    //     requestAnimationFrame(animate);

    //     renderer.render(scene, camera);
    // }

    // animate();
}

export default Home
