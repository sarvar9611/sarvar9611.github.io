let trailersBox = document.querySelector('.trailers-box'),
    carousel = document.querySelector('.carousel');

function createTrailers(item, index) {
    let trailerBox =  document.createElement('div'),
    link = document.createElement('a'),
    linkImg = document.createElement('img'),
    titleBox =  document.createElement('div'),
    titleEng = document.createElement('p'),
    titleRu = document.createElement('a'),
    genre = document.createElement('p'),
    time = document.createElement('p');

    trailerBox.setAttribute("class", "trailer");
    link.setAttribute("href", `${item.youtube}`);
    link.setAttribute("class", "teaser__link");
    link.innerHTML = `<img src="img/play-ico.png" alt="playIcon" class="teaser__link--playicon">`;
    linkImg.setAttribute("class", "teaser__img");
    linkImg.setAttribute("src", `${item.img}`);
    titleBox.setAttribute("class", "trailer__title-box");
    titleEng.setAttribute("class", "trailer__title--eng");
    titleEng.textContent = `${item.name1}`;
    titleRu.setAttribute("class", "trailer__title--ru");
    titleRu.textContent = `${item.name}`;
    titleRu.setAttribute("href", `${item.youtube}`);
    genre.setAttribute("class", "genre");
    genre.textContent = `${item.janr}`;
    time.setAttribute("class", "trailer__time");
    time.innerHTML = `<i class="fa-regular fa-circle-play"></i> ${item.time}`;
    link.append(linkImg);
    trailerBox.append(link);
    titleBox.append(titleEng);
    titleBox.append(titleRu);
    titleBox.append(genre);
    titleBox.append(time);
    trailerBox.append(titleBox);
    trailersBox.append(trailerBox);
}

function createCarousel(item, index) {
    
}

function classActive(num) {
    document.querySelector('#chapter1').classList.remove('active');
    document.querySelector('#chapter2').classList.remove('active');
    document.querySelector('#chapter3').classList.remove('active');
    document.querySelector('#chapter4').classList.remove('active');

        switch (num) {
        case 1:
            document.querySelector('#chapter1').classList.add('active');
            break;
        case 2:
            document.querySelector('#chapter2').classList.add('active');
            break;
        case 3:
            document.querySelector('#chapter3').classList.add('active');
            break;
        case 4:
            document.querySelector('#chapter4').classList.add('active');
            break;
        default:
            break;
    }
}

trailers.forEach(createTrailers);
trailers.forEach(createCarousel);

function newTab(num) {
    classActive(num);
    document.querySelector('.trailers-box').classList.add('d-hide');
    document.querySelector('.carousel-box').classList.add('d-hide');
    switch (num) {
        case 1:
            document.querySelector('.trailers-box').classList.remove('d-hide');
            break;
        case 2:
            updateCarousel();
            document.querySelector('.carousel-box').classList.remove('d-hide');
            break;
        case 3:
            break;
        case 4:
            break;
    
        default:
            break;
    }
}



// Carousel block start

let elem1 = 0,
    elem2 = 1,
    elem3 = 2,
    elem4 = 4,
    index = 0,
    arrLength = trailers.length;

const carouselItem = document.querySelectorAll('.carousel__item__link');

function counterFunc() {
    elem1 = (index < arrLength) ? index: 0;
    elem2 = (elem1 < arrLength - 1) ? elem1 + 1: 0;
    elem3 = (elem2 < arrLength - 1) ? elem2 + 1: 0;
    elem4 = (elem3 < arrLength -1) ? elem3 + 1: 0;
}

function updateCarousel(num = 0) {
    // index = index + num;
    if (num > 0 && index < arrLength) {
        index = index + 1;
    } else if (index == arrLength) {
        index = 0;
    } else if (num < 0 && index >= 1) {
        index = index - 1;
    } else {
        index = arrLength - 1;
    }
    // alert(index);
    counterFunc();
    carouselItem[0].innerHTML = `<img src="js/img/${elem1 + 1}.jpg" alt="">`;
    carouselItem[1].innerHTML = `<img src="js/img/${elem2 + 1}.jpg" alt="">`;
    carouselItem[2].innerHTML = `<img src="js/img/${elem3 + 1}.jpg" alt="">`;
    carouselItem[3].innerHTML = `<img src="js/img/${elem4 + 1}.jpg" alt="">`;
}
