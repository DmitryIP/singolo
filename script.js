//-header--switch-menu--
document.querySelector('.nav-list').addEventListener('click', menuSwitch, false);

function menuSwitch(event) {
    if (event.target.tagName === 'A') {
        document.querySelectorAll('.list-item').forEach(element => {
            element.className = 'list-item';
        });
        event.target.closest('li').classList.add('list-item_active');

    }

};

//--slider
let leftArrow = document.querySelector('.arrow_left');
let rightArrow = document.querySelector('.arrow_right');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider__img');
let sliderLength = slides.length;
leftArrow.addEventListener('click', slideLeft, false);
rightArrow.addEventListener('click', slideRight, false);
let current = 0;
let transitAnimation = `transform 0.5s linear`;

function slideLeft() {
    if (current < sliderLength - 1) {
        current++;
        goLeft();
    } else {
        current = 0;
        jumpRight();
        setTimeout(slideLeft, 10);

    }

};

function slideRight() {
    if (current >= sliderLength - 1) {
        current = 0;
        goRight();
    } else {
        current++;
        jumpLeft();
        setTimeout(slideRight, 10);

    }
};

function goLeft() {
    console.log(`translateX(-${current*100}%)`);
    slides.forEach(slide => {
        slide.style.transition = transitAnimation;
        slide.style.transform = `translateX(-${current*100}%)`;
    })
}

function goRight() {
    console.log(`translateX(*${current*100}%)`);
    slides.forEach(slide => {
        slide.style.transition = transitAnimation;
        slide.style.transform = `translateX(${current*100}%)`;
    })
}

function jumpLeft() {
    slider.prepend(document.querySelectorAll('.slider__img')[current]);
    slides.forEach(slide => {
        slide.style.transition = ``;
        slide.style.transform = `translateX(-${current*100}%)`;
    })

}

function jumpRight() {
    slider.append(document.querySelectorAll('.slider__img')[current]);
    slides.forEach(slide => {
        slide.style.transition = ``;
        slide.style.transform = ``;
    })

}

//--slider--screen switch
verticalPhoneBtn.addEventListener('click', screenSwith, false);
horizontalPhoneBtn.addEventListener('click', screenSwith, false);

function screenSwith(event) {
    let screen = event.target.nextElementSibling;
    if (!screen.style.display) {
        screen.style.display = 'none';
    } else {
        screen.style.display = '';
    }
}

//-portfolio--buttons--
document.querySelector('.filter').addEventListener('click', filterSwitch, false);

function filterSwitch(event) {
    if (event.target.tagName === 'BUTTON') {

        Array.from(this.children).forEach(element => {
            element.className = 'filter__button';
        });
        event.target.classList.add('filter__button_active');
        //---change img after click
        changeImg();
    }
};

//--portfolio---change pictures
function changeImg() {
    let firstImg = document.querySelectorAll('.portfolio__image')[0];
    document.querySelector('.layout-4-columns').append(firstImg);
};
document.querySelector('.layout-4-columns').addEventListener('click', lightImg, false)

//--portfolio---highlit picture
function lightImg(event) {
    document.querySelectorAll('.portfolio__image').forEach(img => {
        img.style.boxShadow = 'none';
    });
    let target = event.target.closest('.portfolio__image');
    if (!target) return;
    target.style.boxShadow = '0 0 0 5px #f06c64';
};

//--get a quot

let form = document.querySelector('.form');
form.addEventListener('submit', message, false);



function message(event) {
    event.preventDefault();
    let subjectText = (subject.value) ? `Subject: ${subject.value}` : 'Without subject';
    let descriptionText = (description.value) ? `Description: ${description.value}` : 'Without description';
    let message = `<div class="popup"><p>The Letter Was Sent</p><p class="description__text">${subjectText}</p><p class="description__text">${descriptionText}</p><button onclick="removePopup()">OK</button></div>`;
    if (document.querySelector('.popup') === null) {
        document.querySelector('.popup-wrapper').insertAdjacentHTML("afterbegin", message);
    } else {
        return

    }
}

function removePopup() {
    document.querySelector('.popup').remove();
}