const h1 = 'font-weight: bold; font-size: 14.5px; color: #f24b4b;';
const h2 = 'font-weight: bold; font-size: 13px; color: #16a34a;';

//console.log('%c whats new in v2023:', h1);
console.log('%c Additions', h2, '\n • Ability to select specific decorations instead of just random ones\n • Ability to change tree and garland color\n • Small colorful lights with a glowing effect\n • Chartreuse, lime, sparkling, and multicolor ornaments\n • Rainbow and zebra candy canes\n • A new type of flower\n • Different colored stars and bows, along with finials\n • Ability to change background color\n • Click numbers on keyboard to switch between decor\n • Now made with Tailwind');
console.log('%c Improvements', h2, '\n • Updated many existing decor designs\n • Works better on smaller screens\n • Accessibility improvements');

let decor = 'orn';
let bg = 0;
let i = 0;
let j = 0;

let dImg = 'random.png';
let dBtn = 'random';

let resizeConstant = 1.45;
let lgTreeWidth = 600;
let lgTreeHeight = 900;
let smTreeWidth = lgTreeWidth / resizeConstant;
let smTreeHeight = lgTreeHeight / resizeConstant;
let trResizeConstant = (lgTreeWidth / smTreeWidth) * 2;
let dResizeConstant = lgTreeWidth / smTreeWidth;

let canvas = document.getElementById('canvas');
let canvas2 = document.getElementById('canvas2');
let canvas3 = document.getElementById('canvas3');
let canvas4 = document.getElementById('canvas4');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;
canvas4.width = window.innerWidth;
canvas4.height = window.innerHeight;

let ctx = canvas.getContext('2d');
let ctx2 = canvas2.getContext('2d');
let ctx3 = canvas3.getContext('2d');
let ctx4 = canvas4.getContext('2d');

function switchBg() {
    ctx4.clearRect(0, 0, canvas.width, canvas.height);

    if (bg == 0) {
        document.body.classList.remove('bg-white');
        document.body.classList.add('bg-blue-200');
        bg = 1;

    } else if (bg == 1) {
        document.body.classList.remove('bg-blue-200');
        document.body.classList.add('bg-blue-400');
        bg = 2;

    } else if (bg == 2) {
        document.body.classList.remove('bg-blue-400');
        document.body.classList.add('bg-blue-600');
        bg = 3;

    } else if (bg == 3) {
        document.body.classList.remove('bg-blue-600');
        document.body.classList.add('bg-blue-800');
        bg = 4;

        genSnow();

    } else if (bg == 4) {
        document.body.classList.remove('bg-blue-800');
        document.body.classList.add('bg-slate-900');
        bg = 5;

        genSnow();

    } else if (bg == 5) {
        document.body.classList.remove('bg-slate-900');
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

function genSnow() {
    ctx4.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 250; i++) {
        let x = Math.floor(Math.random() * (canvas4.width + 1)) + 0;
        let y = Math.floor(Math.random() * (canvas4.height + 1)) + 0;

        ctx4.beginPath();
        ctx4.fillStyle = 'white';
        ctx4.arc(x, y, 1, 0, 2 * Math.PI);
        ctx4.fill();

        x = Math.floor(Math.random() * (canvas4.width + 1)) + 0;
        y = Math.floor(Math.random() * (canvas4.height + 1)) + 0;

        ctx4.beginPath();
        ctx4.fillStyle = 'yellow';
        ctx4.arc(x, y, 1, 0, 2 * Math.PI);
        ctx4.fill();
    }
}

let buttons = document.querySelectorAll('.decorB');
let decorDivs = document.querySelectorAll('.dDiv');

buttons.forEach((decorB) => {
    decorB.addEventListener('click', () => {
        // remove classes from all buttons
        buttons.forEach((decorB) => {
            decorB.classList.remove('bg-lightGreen/90');
            decorB.classList.remove('md:bg-lightGreen/90');
            decorB.classList.remove('border-slate-400/90');
            decorB.classList.remove('md:border-slate-400/90');
            decorB.classList.add('hover:enabled:bg-red-200/90');
        });

        // add classes to the button that has been clicked
        decorB.classList.add('bg-lightGreen/90');
        decorB.classList.add('border-slate-400/90');
        decorB.classList.remove('hover:enabled:bg-red-200/90');
    });
});

window.onload = function () {
    //ctx3.drawImage(tree, (canvas3.width / 2) - (document.getElementById('tree').width / 2), (canvas3.height / 2) - (document.getElementById('tree').height / 2), lgTreeWidth, lgTreeHeight);
    if (screen.width >= 905 && screen.height >= 850) {
        ctx3.drawImage(tree, (canvas3.width / 2) - (document.getElementById('tree').width / 2)/*  + (document.getElementById('decorSelector').offsetWidth / 2) */, (canvas3.height / 2) - (document.getElementById('tree').height / 2) + document.getElementById('decorDock').offsetHeight, lgTreeWidth, lgTreeHeight);
    } else if (screen.width < 905 || screen.height < 850) {
        ctx3.drawImage(tree, (canvas3.width / 2) - (document.getElementById('tree').width / trResizeConstant), (canvas3.height / 2) - (document.getElementById('tree').height / trResizeConstant) + document.getElementById('decorDock').offsetHeight, smTreeWidth, smTreeHeight);

        document.getElementById('modal').classList.add('block');
        document.getElementById('modal').classList.remove('hidden');
    }

    document.getElementById('decorSelector').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('decorSelector').style.paddingBottom = document.getElementById('decorDock').offsetHeight + 'px';

    document.getElementById('hide').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('hide').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
};

function switchTr() {
    if (i >= treeArray.length) {
        i = 0;
    }

    let tr = treeArray[i];
    let treeId = document.getElementById(tr);

    ctx3.clearRect(0, 0, canvas.width, canvas.height);

    if (screen.width >= 905 && screen.height >= 850) {
        ctx3.drawImage(treeId, (canvas3.width / 2) - (document.getElementById('tree').width / 2)/*  + (document.getElementById('decorSelector').offsetWidth / 2) */, (canvas3.height / 2) - (document.getElementById('tree').height / 2) + document.getElementById('decorDock').offsetHeight, lgTreeWidth, lgTreeHeight);
    } else if (screen.width < 905 || screen.height < 850) {
        ctx3.drawImage(treeId, (canvas3.width / 2) - (document.getElementById('tree').width / trResizeConstant), (canvas3.height / 2) - (document.getElementById('tree').height / trResizeConstant) + document.getElementById('decorDock').offsetHeight, smTreeWidth, smTreeHeight);
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

    if ((screen.width >= 905 && screen.height >= 850) && g !== 'none') {
        ctx2.drawImage(gId, (canvas2.width / 2) - (document.getElementById('tree').width / 2)/*  + (document.getElementById('decorSelector').offsetWidth / 2) */, (canvas2.height / 2) - (document.getElementById('tree').height / 2) + document.getElementById('decorDock').offsetHeight, lgTreeWidth, lgTreeHeight);
    } else if ((screen.width < 905 || screen.height < 850) && g !== 'none') {
        ctx2.drawImage(gId, (canvas2.width / 2) - (document.getElementById('tree').width / trResizeConstant), (canvas2.height / 2) - (document.getElementById('tree').height / trResizeConstant) + document.getElementById('decorDock').offsetHeight, smTreeWidth, smTreeHeight);
    }

    j++;
}

function switchO() {
    decor = 'orn';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('ornDiv').classList.remove('hidden');
    document.getElementById('ornDiv').classList.add('block');

    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-slate-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-slate-400/90');
    dImg = 'random.png';

    document.getElementById('hide').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('hide').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
}

function switchC() {
    decor = 'cane';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('caneDiv').classList.remove('hidden');
    document.getElementById('caneDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-slate-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-slate-400/90');
    dImg = 'random.png';

    document.getElementById('hide').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('hide').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
}

function switchF() {
    decor = 'flower';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('flowerDiv').classList.remove('hidden');
    document.getElementById('flowerDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-slate-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-slate-400/90');
    dImg = 'random.png';

    document.getElementById('hide').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('hide').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
}

function switchL() {
    decor = 'light';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('lightDiv').classList.remove('hidden');
    document.getElementById('lightDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-slate-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-slate-400/90');
    dImg = 'random.png';

    document.getElementById('hide').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('hide').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
}

function switchT() {
    decor = 'top';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('topDiv').classList.remove('hidden');
    document.getElementById('topDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-slate-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-slate-400/90');
    dImg = 'random.png';

    document.getElementById('hide').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('hide').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
}

function switchP() {
    decor = 'pres';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('presDiv').classList.remove('hidden');
    document.getElementById('presDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('secretDiv').classList.remove('block');
    document.getElementById('secretDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-slate-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-slate-400/90');
    dImg = 'random.png';

    document.getElementById('hide').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('hide').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
}

function closeSelector() {
    document.getElementById('decorSelector').classList.remove('block');
    document.getElementById('decorSelector').classList.add('hidden');
}

function toggleB() {
    if (document.getElementById('decorSelector').classList.contains('md:block')) {
        hideB();
    } else {
        showB();
    }
}

function hideB() {
    document.getElementById('decorSelector').classList.remove('md:block');
    document.getElementById('decorSelector').classList.add('hidden');
    document.getElementById('decorDock').classList.remove('block');
    document.getElementById('decorDock').classList.add('hidden');
    document.getElementById('hide').style.top = '0px';
    document.getElementById('hide').style.left = '0px';
    document.getElementById('hideI').classList.remove('fa-angle-left');
    document.getElementById('hideI').classList.add('fa-angle-right');

}

function showB() {
    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('md:block');
    document.getElementById('decorDock').classList.remove('hidden');
    document.getElementById('decorDock').classList.add('block');
    document.getElementById('hide').style.top = document.getElementById('decorDock').offsetHeight + 'px';
    document.getElementById('hide').style.left = document.getElementById('decorSelector').offsetWidth + 'px';
    document.getElementById('hideI').classList.remove('fa-angle-right');
    document.getElementById('hideI').classList.add('fa-angle-left');

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
    'ornament-party.png',
    'ornament-year-current.png',
    'ornament-red-and-gold.png',
    'ornament-red-and-white.png',
    'ornament-gold-and-white.png',
    'ornament-sparkling-red.png',
    'ornament-sparkling-orange.png',
    'ornament-sparkling-gold.png',
    'ornament-sparkling-green.png',
    'ornament-sparkling-blue.png',
    'ornament-sparkling-purple.png',
    'ornament-sparkling-pink.png',
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
    'candy-cane-rainbow-left.png',
    'candy-cane-zebra-right.png',
    'candy-cane-zebra-left.png'
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
    'light-white.png',
    'light-rainbow.png'
];

let presentArray = [ // higher chance to get normal sized present than other ones
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

let secretArray = [
    'ornament-pink-2.png',
    'ornament-uwu.png',
    'ornament-icicle.png',
    'ornament-tree.png',
    'ornament-star.png'
];

function select(selectedD) {
    dImg = selectedD;
    dBtn = dImg.replace('.png', '');
}

let dButtons = document.querySelectorAll('.selectDecor');

dButtons.forEach((selectDecor) => {
    selectDecor.addEventListener('click', () => {

        // removes classes from all dButtons
        dButtons.forEach((selectDecor) => {
            selectDecor.classList.remove('bg-lightGreen/90');
            selectDecor.classList.remove('border-slate-400/90');
            selectDecor.classList.add('hover:enabled:bg-red-200/90');
        });

        // add classes to the button that has been clicked
        selectDecor.classList.add('bg-lightGreen/90');
        selectDecor.classList.add('border-slate-400/90');
        selectDecor.classList.remove('hover:enabled:bg-red-200/90');
    });
});

canvas.addEventListener('click', function (event) {
    let x = event.pageX - canvas.offsetLeft;
    let y = event.pageY - canvas.offsetTop;
    let w;
    let h;

    if (decor == 'orn') {
        w = 60;
        h = 60;
    } else if (decor == 'cane') {
        w = 60;
        h = 60;
    } else if (decor == 'flower') {
        w = 60;
        h = 60;
    } else if (decor == 'light') {
        w = 27;
        h = 30;
    } else if (decor == 'sec') {
        w = 60;
        h = 60;
    }

    if (dImg == 'random.png') {

        /* *** *** *** random selection *** *** *** */

        if (decor == 'top') {
            d = document.getElementById(topperArray[Math.floor(Math.random() * topperArray.length)]);
            dId = d.id;

            if (dId.includes('bow')) {
                if (screen.width >= 905 && screen.height >= 850) {
                    ctx.drawImage(d, x - 40, y - 30, 80, 80);
                } else if (screen.width < 905 || screen.height < 850) {
                    ctx.drawImage(d, x - (40 / dResizeConstant), y - (30 / dResizeConstant), 80 / dResizeConstant, 80 / dResizeConstant);
                }

            } else if (dId.includes('finial')) {
                if (screen.width >= 905 && screen.height >= 850) {
                    ctx.drawImage(d, x - 40, y - 60, 80, 80);
                } else if (screen.width < 905 || screen.height < 850) {
                    ctx.drawImage(d, x - (40 / dResizeConstant), y - (60 / dResizeConstant), 80 / dResizeConstant, 80 / dResizeConstant);
                }

            } else {
                if (screen.width >= 905 && screen.height >= 850) {
                    ctx.drawImage(d, x - 30, y - 30, 60, 60);
                } else if (screen.width < 905 || screen.height < 850) {
                    ctx.drawImage(d, x - (30 / dResizeConstant), y - (30 / dResizeConstant), 60 / dResizeConstant, 60 / dResizeConstant);
                }

            }

        } else {
            if (decor == 'orn') {
                d = document.getElementById(ornamentArray[Math.floor(Math.random() * ornamentArray.length)]);
            } else if (decor == 'cane') {
                d = document.getElementById(candyCaneArray[Math.floor(Math.random() * candyCaneArray.length)]);
            } else if (decor == 'flower') {
                d = document.getElementById(flowerArray[Math.floor(Math.random() * flowerArray.length)]);
            } else if (decor == 'light') {
                d = document.getElementById(lightArray[Math.floor(Math.random() * lightArray.length)]);
            } else if (decor == 'pres') {
                d = document.getElementById(presentArray[Math.floor(Math.random() * presentArray.length)]);
            } else if (decor == 'sec') {
                d = document.getElementById(secretArray[Math.floor(Math.random() * secretArray.length)]);
            }

            if (decor == 'pres') {
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
                ctx.drawImage(d, x - ((w / dResizeConstant) / 2), y - ((h / dResizeConstant) / 2), w / dResizeConstant, h / dResizeConstant);
            }

        }

    } else {

        /* *** *** *** specific selection *** *** *** */

        d = document.getElementById(dImg);
        dId = d.id;

        if (decor == 'top') {
            if (dId.includes('bow')) {
                if (screen.width >= 905 && screen.height >= 850) {
                    ctx.drawImage(d, x - 40, y - 30, 80, 80);
                } else if (screen.width < 905 || screen.height < 850) {
                    ctx.drawImage(d, x - (40 / dResizeConstant), y - (30 / dResizeConstant), 80 / dResizeConstant, 80 / dResizeConstant);
                }

            } else if (dId.includes('finial')) {
                if (screen.width >= 905 && screen.height >= 850) {
                    ctx.drawImage(d, x - 40, y - 60, 80, 80);
                } else if (screen.width < 905 || screen.height < 850) {
                    ctx.drawImage(d, x - (40 / dResizeConstant), y - (60 / dResizeConstant), 80 / dResizeConstant, 80 / dResizeConstant);
                }

            } else {
                if (screen.width >= 905 && screen.height >= 850) {
                    ctx.drawImage(d, x - 30, y - 30, 60, 60);
                } else if (screen.width < 905 || screen.height < 850) {
                    ctx.drawImage(d, x - (30 / dResizeConstant), y - (30 / dResizeConstant), 60 / dResizeConstant, 60 / dResizeConstant);
                }

            }

        } else {

            if (decor == 'pres') {
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
                ctx.drawImage(d, x - ((w / dResizeConstant) / 2), y - ((h / dResizeConstant) / 2), w / dResizeConstant, h / dResizeConstant);
            }
        }
    }

}, false);

document.body.onkeyup = function (event) {
    showB();

    if (event.keyCode == 49) {
        document.getElementById('switchO').click();
    } else if (event.keyCode == 50) {
        document.getElementById('switchC').click();
    } else if (event.keyCode == 51) {
        document.getElementById('switchF').click();
    } else if (event.keyCode == 52) {
        document.getElementById('switchL').click();
    } else if (event.keyCode == 53) {
        document.getElementById('switchP').click();
    } else if (event.keyCode == 54) {
        document.getElementById('switchT').click();
    } else if (event.keyCode == 55) {
        document.getElementById('switchTr').click();
    } else if (event.keyCode == 56) {
        document.getElementById('switchG').click();
    } else if (event.keyCode == 57) {
        document.getElementById('switchBg').click();
    }
};

var allowedKeys = {
    67: 'c',
    69: 'e',
    82: 'r',
    83: 's',
    84: 't',
};

var code = ['s', 'e', 'c', 'r', 'e', 't'];
var codeP = 0; // position

document.addEventListener('keydown', function (e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = code[codeP];

    if (key == requiredKey) {
        codeP++;
        if (codeP == code.length) {
            openSecret();
            codeP = 0;
        }
    }
});

function openSecret() {
    decor = 'sec';

    document.getElementById('decorSelector').classList.remove('hidden');
    document.getElementById('decorSelector').classList.add('block');
    document.getElementById('secretDiv').classList.remove('hidden');
    document.getElementById('secretDiv').classList.add('block');

    document.getElementById('ornDiv').classList.remove('block');
    document.getElementById('ornDiv').classList.add('hidden');
    document.getElementById('caneDiv').classList.remove('block');
    document.getElementById('caneDiv').classList.add('hidden');
    document.getElementById('flowerDiv').classList.remove('block');
    document.getElementById('flowerDiv').classList.add('hidden');
    document.getElementById('lightDiv').classList.remove('block');
    document.getElementById('lightDiv').classList.add('hidden');
    document.getElementById('topDiv').classList.remove('block');
    document.getElementById('topDiv').classList.add('hidden');
    document.getElementById('presDiv').classList.remove('block');
    document.getElementById('presDiv').classList.add('hidden');

    let dButtons = document.querySelectorAll('.selectDecor');

    dButtons.forEach((selectDecor) => {
        selectDecor.classList.remove('bg-lightGreen/90');
        selectDecor.classList.remove('border-slate-400/90');
    });

    document.getElementById('random').classList.add('bg-lightGreen/90');
    document.getElementById('random').classList.add('border-slate-400/90');
    dImg = 'random.png';
}

download_img = function (el) { // i have no idea how this works
    let image = canvas.toDataURL('image/png');
    el.href = image;
};