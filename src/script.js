import * as THREE from 'https://unpkg.com/three@0.120.1/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.120.1/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new GLTFLoader();

loader.load( 'test.glb', function ( gltf ) {

  scene.add( gltf.scene );

}, undefined, function ( error ) {

  console.error( error );

} );




// const geometry = new THREE.BoxGeometry(10, 10, 10);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
//
// camera.position.z = 25;
//
// var spotLight = new THREE.SpotLight(0xeeeece);
// spotLight.position.set(1000, 1000, 1000);
// scene.add(spotLight);
// var spotLight2 = new THREE.SpotLight(0xffffff);
// spotLight2.position.set( -200, -200, -200);
// scene.add(spotLight2);
//
// cube.rotation.x = 45;
// cube.rotation.y = 45;
renderer.render( scene, camera );
