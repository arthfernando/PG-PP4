document.addEventListener("click", () => {
    boxmaterial.wireframe = !boxmaterial.wireframe;
    spherematerial.wireframe = !spherematerial.wireframe;
    torusmaterial.wireframe = !torusmaterial.wireframe;
    d20material.wireframe = !d20material.wireframe;
});

var d20pulse = 1;

function animate() {

    requestAnimationFrame( animate );

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    sphere.rotation.x += 0.02;

    torusKnot.rotation.y += 0.02;
    torusKnot.rotation.z += 0.02;

    d20.rotation.y += 0.02;
    d20.scale.set(d20pulse%3, d20pulse%3, d20pulse%3);
    d20pulse++;

    renderer.render( scene, camera );
}


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Arthur
const boxgeometry = new THREE.BoxGeometry();
const boxmaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
boxmaterial.wireframe = true;
const cube = new THREE.Mesh( boxgeometry, boxmaterial );
cube.scale.set(0.4,0.9,0.9);
cube.position.set(-2,-2,0);

// Guilherme Gonçalves
const spheregeometry = new THREE.SphereGeometry( 1, 16, 16 );
const spherematerial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
spherematerial.wireframe = true;
const sphere = new THREE.Mesh( spheregeometry, spherematerial );
sphere.scale.set(0.9,0.9,0.9);
sphere.position.set(2,2,0);

// Gabriela
const torusgeometry = new THREE.TorusKnotGeometry( 1, 0.4, 64, 8 );
const torusmaterial = new THREE.MeshBasicMaterial( { color: 0xD6D7FF } );
torusmaterial.wireframe = true;
const torusKnot = new THREE.Mesh( torusgeometry, torusmaterial );
torusKnot.scale.set(0.9,0.9,0.9);
torusKnot.position.set(-2,2,0);

//Guilherme Cosimato
const d20geometry = new THREE.IcosahedronGeometry(1,0);
const d20material = new THREE.MeshBasicMaterial( { color: 0xf20303 } );
d20material.wireframe = true;
const d20 = new THREE.Mesh( d20geometry, d20material );
d20.scale.set(0.9,0.9,0.9);
d20.position.set(2,-2,0);

camera.position.z = 5;

scene.add( cube, sphere, torusKnot, d20 );

animate();
