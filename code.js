let arr = [];
let photo_index = 0;
let start_photo = 0;
let end_photo = 0;
let photoChange = () => {document.querySelector("#photo").src= "" + arr[photo_index];
    document.querySelector("#displayed-photo").value = arr[photo_index];};
let errorMessage = () => {document.querySelector("#photo-viewer-system").innerHTML = "Error: you must load data first";}
let run;
const interval = 1000;

function loadPhotos() {
    arr = [];
    let folder = document.querySelector("#folder-text").value;
    let common = document.querySelector("#common-text").value;
    start_photo = Number(document.querySelector("#start-photo").value);
    end_photo = Number(document.querySelector("#end-photo").value);
    if(start_photo > end_photo) {
        document.querySelector("#photo-viewer-system").innerHTML = "Error: Invalid Range";
    } else {
        for(let i = start_photo; i <= end_photo; i++) {
            arr.push(folder + common + i + ".jpg");
        }
    }
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    document.querySelector("#photo-viewer-system").innerHTML = "Photo Viewer System";
    document.querySelector("#photo").src= "" + arr[0];
}

function previousPhoto() {
    if(arr.length == 0) {
        errorMessage();
    } else {
        if(photo_index === 0) {
            photo_index = arr.length - 1;
        } else {
            photo_index -= 1;
        }
        photoChange();
    }
}

function nextPhoto() {
    if(arr.length == 0) {
        errorMessage();
    } else {
        if(photo_index === arr.length - 1) {
            photo_index = 0;
        } else {
            photo_index += 1;
        }
        photoChange();
    }
}

function firstPhoto() {
    if(arr.length == 0) {
        errorMessage();
    } else {
        photo_index = 0;
        photoChange();
    }
}

function lastPhoto() {
    if(arr.length == 0) {
        errorMessage();
    } else {
        photo_index = arr.length - 1;
        photoChange();
    }
}

function slideshow() {
    if(arr.length == 0) {
        errorMessage();
    } else {
        firstPhoto();
        run = setInterval(() => {nextPhoto();}, interval);
    }
}

function randomPic() {
    if(arr.length == 0) {
        errorMessage();
    } else {
        photo_index = Math.floor(Math.random() * arr.length);
        console.log(photo_index);
        photoChange();
    }
}

function randomSlideshow() {
    if(arr.length == 0) {
        errorMessage();
    } else {
        run = setInterval(() => {randomPic();}, interval);
    }
}

function stopSlideshow() {
    clearInterval(run);
}

