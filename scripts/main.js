//document.querySelector('html').onclick = function() {
//  alert('Travel the World and Grow!');

//}


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/BeFunky-collage.jpg') {
      myImage.setAttribute ('src','images/BeFunky-collage.jpg');
    } else {
      myImage.setAttribute ('src','images/BeFunky-collage.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



 

 