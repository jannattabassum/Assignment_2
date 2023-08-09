function openLandscape(imageSrc) {
    var landscape = document.getElementById('landscape');
    var landscapeImg = document.getElementById('landscape-img');

    landscapeImg.src = imageSrc;
    landscape.style.display = 'flex';
}

function closeLandscape() {
    var landscape = document.getElementById('landscape');
    landscape.style.display = 'none';
}

function openFood(imageSrc) {
    var food = document.getElementById('food');
    var foodImg = document.getElementById('food-img');

    foodImg.src = imageSrc;
    food.style.display = 'flex';
}

function closeFood() {
    var food = document.getElementById('food');
    food.style.display = 'none';
}
