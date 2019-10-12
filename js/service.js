'use strict'

var gImg;
var nextId = 0;
const IMG_KEY = 'imgs';


function ChangeImg(src, id) {

    var index = gImg.findIndex(function (img) {
        return img.id === id;

    });

    gImg[index].src = src;
    saveImgsToStorage();


}



createImgs();

function createImgs() {
    var imgs = loadImgsFromStorage();
    if (!imgs || imgs.length === 0) {
        imgs = [createImg("images/image-006.jpg", 'txt img'), createImg("images/image-002.jpg", 'txt img'), createImg("images/image-005.jpg", 'txt img')]
    }
    gImg = imgs;
    saveImgsToStorage();
}

function createImg(src, txt) {
    return {
        src: src,
        txt: txt,
        id: ++nextId
    }
}


function saveImgsToStorage() {
    saveToStorage(IMG_KEY, gImg)
}

function loadImgsFromStorage() {
    return loadFromStorage(IMG_KEY);
}