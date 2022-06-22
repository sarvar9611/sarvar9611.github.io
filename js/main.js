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
trailers.forEach(createTrailers);
function newTab(num) {
    switch (num) {
        case 1:
            trailers.forEach(createTrailers);
            break;
        case 2:
            trailers.forEach(createCarousel);
            break;
        case 3:
            break;
        case 4:
            break;
    
        default:
            break;
    }
}