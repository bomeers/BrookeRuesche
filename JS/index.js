window.onload = setBackground();

function setBackground() {
    var images = ['brfitness-1.jpg', 'brfitness-2.jpg', 'brfitness-3.jpg', 'brfitness-4.jpg', 'brfitness-5.jpg'];
    var rand = Math.floor(Math.random() * images.length);
    var background = document.getElementById('home');

    background.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("./Images/background/${images[rand]}")`;
}

function snapTo(hash) {
    location.hash = "#" + hash;
}