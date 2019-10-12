'use strict'


function onChangeImg(el) {
    var elId = +el.parentNode.dataset.id;
    var imgSrc = prompt("Enter image url!")
    // console.log(elId);
    if (imgSrc !== null && imgSrc !== '') {
        ChangeImg(imgSrc, elId);
        renderImg(el.parentNode, imgSrc)
    }

}

function renderImg(el, imgSrc) {
    var className = el.classList[1];


    // console.log(className);
    var el = document.querySelector("." + className + "");
    // el.style.backgroundImage.src = imgSrc;
    el.setAttribute("style", "background-image:url(" + imgSrc + ") ");

    console.log(el);

}

function renderImgs() {

    var strHtml = '';
    var btnHtml = '<button class="change-btn" onclick="onChangeImg(this)">Change me!</button>';
    gImg.forEach(function (img, i) {
        strHtml += `<div data-id="${img.id}" class="image image-item${i + 1}" style="background-image:url(${img.src})">${btnHtml}</div>`;
        // strHtml += `<div class="image image-item${i + 1}" src="${img.src}"></div>`;

    });


    var elGrid = document.querySelector('.grid');
    elGrid.innerHTML += strHtml;


}

function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    console.log(mainMenu);
    mainMenu.classList.toggle('open');
}