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
