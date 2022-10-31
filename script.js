const h1 = 'font-weight: bold; font-size: 14.5px; color: #f24b4b;';
const h2 = 'font-weight: bold; font-size: 13px; color: #16a34a;';

console.log('%c whats new in v1.2:', h1);
console.log('%c Additions', h2, '\n • Ability to change tree and garland color\n • Small colorful lights with a glowing effect\n • Chartreuse and sparkling ornaments\n • Rainbow candy canes\n • A new type of flower\n • Different colored stars and bows, along with finials\n • Ability to change background color\n • Click numbers on keyboard to switch between decor\n • Now made with Tailwind');
console.log('%c Improvements', h2, '\n • Updated many existing decor designs\n • Works better on smaller screens');

let decor = 'orn';
let bg = 0;
let i = 0;
let j = 0;

let lgTreeWidth = 600;
let lgTreeHeight = 900;
let smTreeWidth = lgTreeWidth / 1.45;
let smTreeHeight = lgTreeHeight / 1.45;
let resizeConstant = (lgTreeWidth / smTreeWidth) * 2;
let decorResizeConstant = lgTreeWidth / smTreeWidth;

let canvas = document.getElementById('canvas');
let canvas2 = document.getElementById('canvas2');
let canvas3 = document.getElementById('canvas3');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;

let ctx = canvas.getContext('2d');
let ctx2 = canvas2.getContext('2d');
let ctx3 = canvas3.getContext('2d');

function setBg() {
    if (bg == 0) {
        document.body.classList.remove('bg-white');
        document.body.classList.add('bg-slate-300');
        bg = 1;
    } else if (bg == 1) {
        document.body.classList.remove('bg-slate-300');
        document.body.classList.add('bg-slate-500');
        bg = 2;
    } else if (bg == 2) {
        document.body.classList.remove('bg-slate-500');
        document.body.classList.add('bg-rose-300');
        bg = 3;
    } else if (bg == 3) {
        document.body.classList.remove('bg-rose-300');
        document.body.classList.add('bg-rose-500');
        bg = 4;
    } else if (bg == 4) {
        document.body.classList.remove('bg-rose-500');
        document.body.classList.add('bg-orange-300');
        bg = 5;
    } else if (bg == 5) {
        document.body.classList.remove('bg-orange-300');
        document.body.classList.add('bg-orange-500');
        bg = 6;
    } else if (bg == 6) {
        document.body.classList.remove('bg-orange-500');
        document.body.classList.add('bg-yellow-300');
        bg = 7;
    } else if (bg == 7) {
        document.body.classList.remove('bg-yellow-300');
        document.body.classList.add('bg-yellow-500');
        bg = 8;
    } else if (bg == 8) {
        document.body.classList.remove('bg-yellow-500');
        document.body.classList.add('bg-green-300');
        bg = 9;
    } else if (bg == 9) {
        document.body.classList.remove('bg-green-300');
        document.body.classList.add('bg-green-500');
        bg = 10;
    } else if (bg == 10) {
        document.body.classList.remove('bg-green-500');
        document.body.classList.add('bg-sky-300');
        bg = 11;
    } else if (bg == 11) {
        document.body.classList.remove('bg-sky-300');
        document.body.classList.add('bg-sky-500');
        bg = 12;
    } else if (bg == 12) {
        document.body.classList.remove('bg-sky-500');
        document.body.classList.add('bg-indigo-300');
        bg = 13;
    } else if (bg == 13) {
        document.body.classList.remove('bg-indigo-300');
        document.body.classList.add('bg-indigo-500');
        bg = 14;
    } else if (bg == 14) {
        document.body.classList.remove('bg-indigo-500');
        document.body.classList.add('bg-white');
        bg = 0;
    }
}

window.onclick = function (event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal').classList.remove('block');
}

/* function genSnow() {
    ctx4.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 1000; i++) {
        let x = Math.floor(Math.random() * (canvas4.width + 1)) + 0;
        let y = Math.floor(Math.random() * (canvas4.height + 1)) + 0;

        ctx4.beginPath();
        ctx4.fillStyle = 'white';
        ctx4.arc(x, y, 1, 0, 2 * Math.PI);
        ctx4.fill();
    }
} */

let buttons = document.querySelectorAll('.decorB');

buttons.forEach((decorB) => {
    decorB.addEventListener('click', () => {
        // removes bg-lightGreen class from all buttons
        buttons.forEach((decorB) => {
            decorB.classList.remove('bg-lightGreen');
        });

        // add bg-lightGreen class to the button that has been clicked
        decorB.classList.add('bg-lightGreen');
    });
});

window.onload = function () {
    //ctx3.drawImage(tree, (canvas3.width / 2) - (document.getElementById('tree').width / 2), (canvas3.height / 2) - (document.getElementById('tree').height / 2), lgTreeWidth, lgTreeHeight);

    if (screen.width >= 905 && screen.height >= 850) {
        ctx3.drawImage(tree, (canvas3.width / 2) - (document.getElementById('tree').width / 2), (canvas3.height / 2) - (document.getElementById('tree').height / 2), lgTreeWidth, lgTreeHeight);
    } else if (screen.width < 905 || screen.height < 850) {
        ctx3.drawImage(tree, (canvas3.width / 2) - (document.getElementById('tree').width / resizeConstant), (canvas3.height / 2) - (document.getElementById('tree').height / resizeConstant), smTreeWidth, smTreeHeight);

        document.getElementById('modal').classList.add('block');
        document.getElementById('modal').classList.remove('hidden');
    }
};

function switchTr() {
    if (i >= treeArray.length) {
        i = 0;
    }

    let tr = treeArray[i];
    let treeId = document.getElementById(tr);

    ctx3.clearRect(0, 0, canvas.width, canvas.height);

    if (screen.width >= 905 && screen.height >= 850) {
        ctx3.drawImage(treeId, (canvas3.width / 2) - (document.getElementById('tree').width / 2), (canvas3.height / 2) - (document.getElementById('tree').height / 2), lgTreeWidth, lgTreeHeight);
    } else if (screen.width < 905 || screen.height < 850) {
        ctx3.drawImage(treeId, (canvas3.width / 2) - (document.getElementById('tree').width / resizeConstant), (canvas3.height / 2) - (document.getElementById('tree').height / resizeConstant), smTreeWidth, smTreeHeight);
    }

    i++;
}


function switchG() {
    if (j >= garlandArray.length) {
        j = 0;
    }

    let g = garlandArray[j];
    let gId = document.getElementById(g);

    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    if (screen.width >= 905 && screen.height >= 850 && g !== 'none') {
        ctx2.drawImage(gId, (canvas2.width / 2) - (document.getElementById('tree').width / 2), (canvas2.height / 2) - (document.getElementById('tree').height / 2), lgTreeWidth, lgTreeHeight);
    } else if (screen.width < 905 || screen.height < 850 && g !== 'none') {
        ctx2.drawImage(gId, (canvas2.width / 2) - (document.getElementById('tree').width / resizeConstant), (canvas2.height / 2) - (document.getElementById('tree').height / resizeConstant), smTreeWidth, smTreeHeight);
    }

    j++;
}

function switchO() {
    decor = 'orn';
}

function switchC() {
    decor = 'cane';
}

function switchF() {
    decor = 'flower';
}

function switchL() {
    decor = 'light';
}

function switchT() {
    decor = 'top';
}

function switchP() {
    decor = 'pres';
}

let treeArray = [
    'tree-white.png',
    'tree-red.png',
    'tree-yellow.png',
    'tree-blue.png',
    'tree-pink.png',
    'tree'
];

let garlandArray = [
    'garland-green.png',
    'garland-green-and-white.png',
    'garland-white.png',
    'garland-red.png',
    'garland-red-and-green.png',
    'garland-red-and-white.png',
    'garland-yellow.png',
    'garland-yellow-and-white.png',
    'garland-blue.png',
    'garland-blue-and-white.png',
    'garland-pink.png',
    'garland-pink-and-white.png',
    'none'
];

let ornamentArray = [
    'ornament-red.png',
    'ornament-orange.png',
    'ornament-yellow.png',
    'ornament-chartreuse.png',
    'ornament-green.png',
    'ornament-lime.png',
    'ornament-cyan.png',
    'ornament-blue.png',
    'ornament-purple.png',
    'ornament-pink.png',
    'ornament-white.png',
    'ornament-brown.png',
    'ornament-silver.png',
    'ornament-year-current.png',
    'ornament-party.png',
    'ornament-sparkling-red.png',
    'ornament-sparkling-gold.png',
    'ornament-sparkling-blue.png',
    'ornament-sparkling-white.png'
];

let candyCaneArray = [
    'candy-cane-red-right.png',
    'candy-cane-red-left.png',
    'candy-cane-green-right.png',
    'candy-cane-green-left.png',
    'candy-cane-red-green-right.png',
    'candy-cane-red-green-left.png',
    'candy-cane-pink-right.png',
    'candy-cane-pink-left.png',
    'candy-cane-yellow-right.png',
    'candy-cane-yellow-left.png',
    'candy-cane-pink-yellow-right.png',
    'candy-cane-pink-yellow-left.png',
    'candy-cane-rainbow-right.png',
    'candy-cane-rainbow-left.png'
];

let flowerArray = [
    'poinsettia-red.png',
    'poinsettia-orange.png',
    'poinsettia-yellow.png',
    'poinsettia-cyan.png',
    'poinsettia-blue.png',
    'poinsettia-purple.png',
    'poinsettia-pink.png',
    'poinsettia-white.png',
    'hibiscus-red.png',
    'hibiscus-orange.png',
    'hibiscus-yellow.png',
    'hibiscus-cyan.png',
    'hibiscus-blue.png',
    'hibiscus-purple.png',
    'hibiscus-pink.png',
    'hibiscus-white.png'
];

let lightArray = [
    'light-red.png',
    'light-orange.png',
    'light-yellow.png',
    'light-green.png',
    'light-cyan.png',
    'light-blue.png',
    'light-purple.png',
    'light-pink.png',
    'light-white.png'
];

let topperArray = [
    'star-gold-1.png',
    'star-gold-2.png',
    'star-gold-3.png',
    'star-gold-4.png',
    'star-red-1.png',
    'star-red-2.png',
    'star-red-3.png',
    'star-red-4.png',
    'star-white-1.png',
    'star-white-2.png',
    'star-white-3.png',
    'star-white-4.png',
    'bow-red.png',
    'bow-gold.png',
    'bow-white.png',
    'finial-white.png',
    'finial-gold.png',
    'finial-red.png'
];

let presentArray = [ // higher chanceee to get normal sized preseent than other ones
    'present-red.png',
    'present-red.png',
    'present-red-long.png',
    'present-red-tall.png',
    'present-yellow.png',
    'present-yellow.png',
    'present-yellow-long.png',
    'present-yellow-tall.png',
    'present-green.png',
    'present-green.png',
    'present-green-long.png',
    'present-green-tall.png',
    'present-blue.png',
    'present-blue.png',
    'present-blue-long.png',
    'present-blue-tall.png',
    'present-dark-blue.png',
    'present-dark-blue.png',
    'present-dark-blue-long.png',
    'present-dark-blue-tall.png',
    'present-purple.png',
    'present-purple.png',
    'present-purple-long.png',
    'present-purple-tall.png'
];

canvas.addEventListener('click', function (event) {
    let x = event.pageX - canvas.offsetLeft;
    let y = event.pageY - canvas.offsetTop - document.getElementById('decorDock').offsetHeight;

    let d;
    let w;
    let h;

    if (decor == 'top') {
        let t = topperArray[Math.floor(Math.random() * topperArray.length)];
        const topper = document.getElementById(t);

        if (t.includes('bow')) {
            ctx.drawImage(topper, x - 40, y - 30, 80, 80);
        } else if (t.includes('finial')) {
            ctx.drawImage(topper, x - 40, y - 60, 80, 80);
        } else {
            ctx.drawImage(topper, x - 30, y - 30, 60, 60);
        }

    } else {

        if (decor == 'orn') {
            d = document.getElementById(ornamentArray[Math.floor(Math.random() * ornamentArray.length)]);
            w = 60;
            h = 60;

        } else if (decor == 'cane') {
            d = document.getElementById(candyCaneArray[Math.floor(Math.random() * candyCaneArray.length)]);
            w = 60;
            h = 60;

        } else if (decor == 'flower') {
            d = document.getElementById(flowerArray[Math.floor(Math.random() * flowerArray.length)]);
            w = 60;
            h = 60;

        } else if (decor == 'light') {
            d = document.getElementById(lightArray[Math.floor(Math.random() * lightArray.length)]);
            w = 27;
            h = 30;

        } else if (decor == 'pres') {
            d = document.getElementById(presentArray[Math.floor(Math.random() * presentArray.length)]);
            dId = d.id;

            if (dId.includes('long')) {
                w = 96;
                h = 68;
            } else if (dId.includes('tall')) {
                w = 52;
                h = 96;
            } else {
                w = 80;
                h = 80;
            }
        }

        if (screen.width >= 905 && screen.height >= 850) {
            ctx.drawImage(d, x - (w / 2), y - (h / 2), w, h);
        } else if (screen.width < 905 || screen.height < 850) {
            ctx.drawImage(d, x - ((w / decorResizeConstant) / 2), y - ((h / decorResizeConstant) / 2), w / decorResizeConstant, h / decorResizeConstant);
        }

    }

}, false);

document.body.onkeyup = function (event) {
    if (event.keyCode == 49) {
        document.getElementById('switchO').click();
    } else if (event.keyCode == 50) {
        document.getElementById('switchC').click();
    } else if (event.keyCode == 51) {
        document.getElementById('switchF').click();
    } else if (event.keyCode == 52) {
        document.getElementById('switchL').click();
    } else if (event.keyCode == 53) {
        document.getElementById('switchT').click();
    } else if (event.keyCode == 54) {
        document.getElementById('switchP').click();
    } else if (event.keyCode == 55) {
        document.getElementById('switchTr').click();
    } else if (event.keyCode == 56) {
        document.getElementById('switchG').click();
    } else if (event.keyCode == 57) {
        document.getElementById('switchBg').click();
    }
};

download_img = function (el) { // i have no idea how this works
    let image = canvas.toDataURL('image/png');
    el.href = image;
};