var renderer,
scene,
camera,
controls,
myCanvas = document.getElementById('myCanvas');

//RENDERER
renderer = new THREE.WebGLRenderer({
canvas: myCanvas, 
antialias: true,
});
renderer.setClearColor(0x08103E);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );   
window.addEventListener('resize', function(){
var width = window.innerWidth;
var height = window.innerHeight;
renderer.setSize(width, height);
camera.aspect = width/ height;
camera.updateProjectMatrix();
camera.update();
});
//CAMERA
camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,5,20);

//SCENE
scene = new THREE.Scene();

//LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 0.7);
light2.position.set( 50, 40, 50 );
scene.add(light2);

var loader = new THREE.GLTFLoader();

loader.load('./Nueva carpeta/Loading_page_eurovisiu/Def2.glb', material);

var mesh;

function material(gltf) {
mesh = gltf.scene;
console.log(gltf);
console.log(mesh.children[0]);
mesh.children[0].material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    specular: 0xffffff,
});
scene.add( mesh );
mesh.position.z = 0;
mesh.position.y = 5;
mesh.position.x = 0;

}
//Controls 
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = Math.PI / 3;
controls.maxPolarAngle = Math.PI / 2;
controls.minAzimuthAngle = Math.PI / 3;
controls.maxAzimuthAngle = Math.PI / 10;
controls.enableZoom= false;
controls.enablePan = false;



render();



function render() {

if(mesh){
   mesh.rotation.y += 0.01; 
}

renderer.render(scene, camera);

requestAnimationFrame(render);
}


var soundOn, soundOff, audio;

soundOn = document.querySelector("#sound-on");
soundOff = document.querySelector("#sound-off");
audio = document.querySelector(".audio");



soundOff.addEventListener("click", (e)=>{
    e.preventDefault();
    soundOff.style.display="none";
    soundOn.style.display="block";
    audio.muted = false;
    audio.play();

});

soundOn.addEventListener("click", (e)=>{
    e.preventDefault();
    soundOff.style.display="block";
    soundOn.style.display="none";
    audio.muted = true;
    audio.pause();


})