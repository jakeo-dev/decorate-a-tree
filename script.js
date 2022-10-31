console.log("v1.1.2");

var decor = "orn";
var buttons = document.querySelectorAll(".decorB");

var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

buttons.forEach((decorB) => {
    decorB.addEventListener("click", () => {

        buttons.forEach((decorB) => {
            decorB.classList.remove("toggled");
        })

        decorB.classList.add("toggled");

    })
})

function switchO() {
    decor = "orn";
}

function switchC() {
    decor = "cane";
}

function switchF() {
    decor = "flower";
}

function switchT() {
    decor = "top";
}

function switchP() {
    decor = "pres";
}

var ornamentArray = [
    "red-ornament.png",
    "orange-ornament.png",
    "yellow-ornament.png",
    "green-ornament.png",
    "cyan-ornament.png",
    "old-blue-ornament-3.png",
    "purple-ornament.png",
    "pink-ornament.png",
    "white-ornament.png",
    "brown-ornament.png",
    "year-current-ornament.png",
    "party-ornament.png"
];

var candyCaneArray = [
    "red-candy-cane-right.png",
    "red-candy-cane-left.png",
    "green-candy-cane-right.png",
    "green-candy-cane-left.png",
    "red-green-candy-cane-right.png",
    "red-green-candy-cane-left.png",
    "pink-candy-cane-right.png",
    "pink-candy-cane-left.png",
    "yellow-candy-cane-right.png",
    "yellow-candy-cane-left.png",
    "pink-yellow-candy-cane-right.png",
    "pink-yellow-candy-cane-left.png"
];

var flowerArray = [
    "red-poinsettia.png",
    "yellow-poinsettia.png",
    "cyan-poinsettia.png",
    "blue-poinsettia.png",
    "purple-poinsettia.png",
    "pink-poinsettia.png",
    "white-poinsettia.png"
];

var topperArray = [
    "gold-star1.png",
    "gold-star2.png",
    "gold-star3.png",
    "gold-star4.png",
    "red-bow.png"
];

var presentArray = [
    "red-present.png",
    "red-present.png",
    "red-present-long.png",
    "red-present-tall.png",
    "yellow-present.png",
    "yellow-present.png",
    "yellow-present-long.png",
    "yellow-present-tall.png",
    "green-present.png",
    "green-present.png",
    "green-present-long.png",
    "green-present-tall.png",
    "blue-present.png",
    "blue-present.png",
    "blue-present-long.png",
    "blue-present-tall.png",
    "dark-blue-present.png",
    "dark-blue-present.png",
    "dark-blue-present-long.png",
    "dark-blue-present-tall.png",
    "purple-present.png",
    "purple-present.png",
    "purple-present-long.png",
    "purple-present-tall.png"
];

window.onload = function () {
    ctx.drawImage(tree, (canvas.width / 2) - (document.getElementById("tree").width / 2), (canvas.height / 2) - (document.getElementById("tree").height / 2), 600, 900);
}

canvas.addEventListener('click', function (event) {
    let x = event.pageX - canvas.offsetLeft;
    let y = event.pageY - canvas.offsetTop;

    if (decor == "orn") {
        var o = ornamentArray[Math.floor(Math.random() * ornamentArray.length)];
        const ornament = document.getElementById(o);

        ctx.drawImage(ornament, x - 30, y - 30, 60, 60);

    } else if (decor == "cane") {
        var c = candyCaneArray[Math.floor(Math.random() * candyCaneArray.length)];
        const candyCane = document.getElementById(c);

        ctx.drawImage(candyCane, x - 30, y - 30, 60, 60);

    } else if (decor == "flower") {
        var f = flowerArray[Math.floor(Math.random() * flowerArray.length)];
        const flower = document.getElementById(f);

        ctx.drawImage(flower, x - 30, y - 30, 60, 60);

    } else if (decor == "top") {
        var t = topperArray[Math.floor(Math.random() * topperArray.length)];
        const topper = document.getElementById(t);

        if (t.includes("bow")) {
            ctx.drawImage(topper, x - 40, y - 30, 80, 80);
        } else {
            ctx.drawImage(topper, x - 30, y - 30, 60, 60);
        }

    } else if (decor == "pres") {
        var p = presentArray[Math.floor(Math.random() * presentArray.length)];
        const present = document.getElementById(p);

        if (p.includes("long")) {
            ctx.drawImage(present, x - 50, y - 42, 96, 68);

        } else if (p.includes("tall")) {
            ctx.drawImage(present, x - 26, y - 60, 52, 96);

        } else {
            ctx.drawImage(present, x - 40, y - 50, 80, 80);
        }
    }

}, false);

function openMain() {
    window.open("https://jorch.xyz", "_blank");
}

function openSupp() {
    window.open("https://discord.gg/7y4dpMy", "_blank");
}