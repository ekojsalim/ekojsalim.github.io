// Three JS

window.addEventListener('load', init, false);

function init() {
    createWorld();
    createPrimitive();
    //---
    animation();
    animateCSS("#container", "fadeIn")
}

var Theme = { _darkred: 0x000000 }

//-------------------------------------------------------------------

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.remove('hidden')
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function isMobile() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        return true;
    }
    return false;
}

//--------------------------------------------------------------------

var scene, camera, renderer, container;
var start = Date.now();
var _width, _height;

const canvasEl = document.querySelector("canvas");
const canvas = ('OffscreenCanvas' in window) ? canvasEl.transferControlToOffscreen() : canvasEl;

function createWorld() {
    _width = window.innerWidth * (isMobile() ? 1 : 0.6);
    _height = window.innerHeight;
    canvas.style = { width: _width, height: _height }
        //---
    scene = new THREE.Scene();
    //scene.fog = new THREE.Fog(Theme._darkred, 8, 20);
    scene.background = new THREE.Color(Theme._darkred);
    //---
    camera = new THREE.PerspectiveCamera(55, _width / _height, 1, 1000);
    camera.position.z = 12;
    //---
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, canvas: canvas });
    renderer.setSize(_width, _height);
    //---
    container = document.getElementById("container");
    // container.appendChild(renderer.domElement);
    //---
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    _width = window.innerWidth * (isMobile() ? 1 : 0.6);
    _height = window.innerHeight;
    renderer.setSize(_width, _height);
    camera.aspect = _width / _height;
    camera.updateProjectionMatrix();
    console.log('- resize -');
}

//--------------------------------------------------------------------

var mat;
var primitiveElement = function() {
    this.mesh = new THREE.Object3D();
    mat = new THREE.ShaderMaterial({
        wireframe: false,
        //fog: true,
        uniforms: {
            time: {
                type: "f",
                value: 0.0
            },
            pointscale: {
                type: "f",
                value: 0.0
            },
            decay: {
                type: "f",
                value: 0.0
            },
            complex: {
                type: "f",
                value: 0.0
            },
            waves: {
                type: "f",
                value: 0.0
            },
            eqcolor: {
                type: "f",
                value: 0.0
            },
            fragment: {
                type: "i",
                value: true
            },
            redhell: {
                type: "i",
                value: true
            }
        },
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });
    var geo = new THREE.IcosahedronBufferGeometry(3, 7);
    var mesh = new THREE.Points(geo, mat);

    //---
    this.mesh.add(mesh);
}

var _primitive;

function createPrimitive() {
    _primitive = new primitiveElement();
    scene.add(_primitive.mesh);
}

//--------------------------------------------------------------------

var options = {
    perlin: {
        vel: 0.002,
        speed: 0.00050,
        perlins: 1.0,
        decay: 0.10,
        complex: 0.30,
        waves: 20.0,
        eqcolor: 11.0,
        fragment: true,
        redhell: true
    },
    spin: {
        sinVel: 0.0,
        ampVel: 80.0,
    }
}

//--------------------------------------------------------------------

function animation() {
    requestAnimationFrame(animation);
    // var performance = Date.now() * 0.003;

    _primitive.mesh.rotation.y += options.perlin.vel;
    _primitive.mesh.rotation.x = 0;
    //---
    mat.uniforms['time'].value = options.perlin.speed * (Date.now() - start);
    mat.uniforms['pointscale'].value = options.perlin.perlins;
    mat.uniforms['decay'].value = options.perlin.decay;
    mat.uniforms['complex'].value = options.perlin.complex;
    mat.uniforms['waves'].value = options.perlin.waves;
    mat.uniforms['eqcolor'].value = options.perlin.eqcolor;
    mat.uniforms['fragment'].value = options.perlin.fragment;
    mat.uniforms['redhell'].value = options.perlin.redhell;
    //---
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

//---------------------------------

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}