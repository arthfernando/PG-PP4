const boxBtn = document.getElementById("btnBox").addEventListener("click", (e) => {
    e.preventDefault();
    boxmaterial.wireframe = !boxmaterial.wireframe;
});

const sphereBtn = document.getElementById("btnSphere").addEventListener("click", (e) => {
    e.preventDefault();
    spherematerial.wireframe = !spherematerial.wireframe;
});

const torusBtn = document.getElementById("btnTorus").addEventListener("click", (e) => {
    e.preventDefault();
    torusmaterial.wireframe = !torusmaterial.wireframe;
});

const d20Btn = document.getElementById("btnD20").addEventListener("click", (e) => {
    e.preventDefault();
    d20material.wireframe = !d20material.wireframe;
});

const switchCam = document.getElementById("btnSwitchCam").addEventListener("click", (e) => {
    e.preventDefault();
    if(isCamera1) {
        renderCamera = camera2;
    } else {
        renderCamera = camera;
    }
    isCamera1 = !isCamera1;
});



const cameraBtn = document.getElementById("btnCamera").addEventListener("click", (e) => {
    e.preventDefault();
    if(!isCamera1) {
        return;
    }
    if(isPerspective) {
        camera = new THREE.OrthographicCamera( window.innerWidth/-50 , window.innerWidth/50, window.innerHeight/50, window.innerHeight/-50, 0.1, 1000 );
        camera.position.z = 5;
        camera.zoom = 2;
        camera.updateProjectionMatrix();
    } else {
        camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.z = 5;
    }

    isPerspective = !isPerspective;
    renderCamera = camera;
});



function animate(now) {
    now *= 0.001;
    const delta = now - then;
    then = now;
    // requestAnimationFrame( animate );

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    sphere.rotation.x += 0.02;

    torusKnot.rotation.y += 0.02;
    torusKnot.rotation.z += 0.02;

    // delta retirado de: https://stackoverflow.com/questions/45343673/three-js-animate-in-real-time
    d20.rotation.y += 0.02;
    d20.scale.x += Math.sin(d20pulse)*delta*5;
    d20.scale.y += Math.sin(d20pulse)*delta*5;
    d20.scale.z += Math.sin(d20pulse)*delta*5;
    d20pulse++;

    date = Date.now() * 0.002;
    

    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        var code = e.which || e.keyCode;
        if (code == '39') {
            sphere.position.set(
                Math.cos(date) * orbitRadius,
                0,
                Math.sin(date) * orbitRadius
            );
        }

        if (code == '37') {
            cube.position.set(
                Math.sin(date) * orbitRadius,
                0,
                Math.cos(date) * orbitRadius
            );
        }

        if (code == '40') {
            d20.position.set(
                0,
                Math.sin(date) * orbitRadius,
                Math.cos(date) * orbitRadius
            );
        }

        if (code == '38') {
            torusKnot.position.set(
                0,
                Math.cos(date) * orbitRadius,
                Math.sin(date) * orbitRadius
            );
        }
    })

    // cube.position.set(
    //     Math.sin(date) * orbitRadius,
    //     0,
    //     Math.cos(date) * orbitRadius
    // );

    // d20.position.set(
    //     Math.sin(date) * orbitRadius,
    //     0,
    //     Math.cos(date) * orbitRadius
    // );

    renderer.render( scene, renderCamera );
    requestAnimationFrame( animate );

}

let isPerspective;
let isCamera1;
let renderCamera;
let d20pulse = 1;
let then = 0;
let speed = 0;

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
isCamera1 = true;
renderCamera = camera;
let camera2 = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
isPerspective = true;
// const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Arthur
const boxgeometry = new THREE.BoxGeometry();
const boxmaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
boxmaterial.wireframe = true;
const cube = new THREE.Mesh( boxgeometry, boxmaterial );
cube.scale.set(0.4,0.9,0.9);
cube.position.set(-3,0,0);

// Guilherme Gonçalves
const spheregeometry = new THREE.SphereGeometry( 1, 16, 16 );
const spherematerial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
spherematerial.wireframe = true;
const sphere = new THREE.Mesh( spheregeometry, spherematerial );
sphere.scale.set(0.9,0.9,0.9);
sphere.position.set(3,0,0);

// Gabriela
const torusgeometry = new THREE.TorusKnotGeometry( 1, 0.4, 64, 8 );
const torusmaterial = new THREE.MeshBasicMaterial( { color: 0xD6D7FF } );
torusmaterial.wireframe = true;
const torusKnot = new THREE.Mesh( torusgeometry, torusmaterial );
torusKnot.scale.set(0.9,0.9,0.9);
torusKnot.position.set(0,3,0);

//Guilherme Cosimato
const d20geometry = new THREE.IcosahedronGeometry(1,0);
const d20material = new THREE.MeshBasicMaterial( { color: 0xf20303 } );
d20material.wireframe = true;
const d20 = new THREE.Mesh( d20geometry, d20material );
d20.scale.set(0.9,0.9,0.9);
d20.position.set(0,-3,0);

camera.position.z = 5;

camera2.position.z = 5;
camera2.position.x = 2;
camera2.rotation.y = Math.PI/4;

var orbitRadius = 10; // for example
var date;



scene.add( cube, sphere, torusKnot, d20 );

// animate();
requestAnimationFrame( animate );

