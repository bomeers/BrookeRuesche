import { useState } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import logo from '/images/logos/logo-white.svg'

// 
function Home() {
    const [count, setCount] = useState(0)

    // scene setup
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const controls = new OrbitControls(camera, renderer.domElement)

    // create lights
    const light = new THREE.PointLight()
    light.position.set(2, 2, 2)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight()
    scene.add(ambientLight)

    // weight plate custom model
    const fbxLoader = new FBXLoader()
    fbxLoader.load('blender/weight-plate.fbx', (object) => {
        scene.add(object)
    },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    }

    animate();
}

export default Home
