import * as THREE from '/node_modules/three/';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';

var mixer, mixer2, mixer3, mixer4, mixer5, delta;
const degree = (360/(document.documentElement.scrollHeight-document.documentElement.clientHeight));
var clock = new THREE.Clock();

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  precision: 'mediump',
});

const loader = new GLTFLoader();
loader.load( 'crtmonitor.glb', function ( gltf ) {
  gltf.scene.rotation.set(0.5,-1.15,0.15);
  gltf.scene.scale.set(3,3,5);

  gltf.scene.position.set(17,80*Math.sin(-100*degree*Math.PI/180),80*Math.cos(-100*degree*Math.PI/180));

  const animations = gltf.animations;
  mixer = new THREE.AnimationMixer(gltf.scene);
  mixer.clipAction(animations[0]).play();

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

});

loader.load( 'grad.glb', function ( gltf ){
  gltf.scene.rotation.set(0.75,1,0);
  gltf.scene.position.set(-14,80*Math.sin(-210*degree*Math.PI/180),80*Math.cos(-210*degree*Math.PI/180));
  gltf.scene.scale.set(5,5,5);

  const animations2 = gltf.animations;
  mixer2 = new THREE.AnimationMixer(gltf.scene);
  mixer2.clipAction(animations2[3]).play();
  
  scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

});

loader.load( 'snake.glb', function ( gltf ){
  gltf.scene.rotation.set(0,0,1);
  gltf.scene.position.set(25,80*Math.sin(-350*degree*Math.PI/180),80*Math.cos(-350*degree*Math.PI/180));
  gltf.scene.scale.set(1.5,1.5,1.5);

  const animations3 = gltf.animations;
  mixer3 = new THREE.AnimationMixer(gltf.scene);
  for(let i = 0; i < animations3.length; i++)
    mixer3.clipAction(animations3[i]).play();
  
  scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

});

loader.load( 'address.glb', function ( gltf ){
  gltf.scene.rotation.set(0.85,0.25,0.15);
  gltf.scene.position.set(-11,80*Math.sin(-560*degree*Math.PI/180),80*Math.cos(-560*degree*Math.PI/180));
  gltf.scene.scale.set(2,2,2);

  const animations4 = gltf.animations;
  mixer4 = new THREE.AnimationMixer(gltf.scene);
  mixer4.clipAction(animations4[0]).play();
  scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

});

loader.load( 'gitcoin.glb', function ( gltf ){
  gltf.scene.rotation.set(1,0.5,0.35);
  gltf.scene.position.set(-14,80*Math.sin(-458*degree*Math.PI/180),80*Math.cos(-458*degree*Math.PI/180));
  gltf.scene.scale.set(2,2,2);

  const animations5 = gltf.animations;
  mixer5 = new THREE.AnimationMixer(gltf.scene);
  mixer5.clipAction(animations5[0]).play();
  scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0,0,0);

renderer.render(scene, camera);

const pointCRT = new THREE.PointLight(0xdd00dd);
pointCRT.position.set(12,80*Math.sin(-75*degree*Math.PI/180)-2,80*Math.cos(-75*degree*Math.PI/180)+3);

const pointCap = new THREE.PointLight(0xffffff);
pointCap.position.set(-9,80*Math.sin(-205*degree*Math.PI/180)+2,80*Math.cos(-205*degree*Math.PI/180)+3);

const pointCoin = new THREE.PointLight(0x222266);
pointCoin.position.set(-9,80*Math.sin(-458*degree*Math.PI/180)+2,80*Math.cos(-458*degree*Math.PI/180)+3);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointCRT, pointCap, pointCoin, ambientLight);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

function getScrollPercent() {
  var h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function moveCamera() {
  const t = -getScrollPercent();
  
  camera.position.y = 100*Math.sin(t*Math.PI/180);
  camera.rotation.x = -t*Math.PI/180;
  camera.position.z = 100*Math.cos(t*Math.PI/180);
}

document.body.onscroll = moveCamera;
moveCamera();

const animate = function() {
  requestAnimationFrame(animate);
  delta = clock.getDelta();
  if(mixer) mixer.update(delta);
  if(mixer2) mixer2.update(delta);
  if(mixer3) mixer3.update(delta);
  if(mixer4) mixer4.update(delta);
  if(mixer5) mixer5.update(delta);

  renderer.render(scene, camera);
}

window.addEventListener('resize', function(event) {
  this.location.reload();
}, true);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

animate();
