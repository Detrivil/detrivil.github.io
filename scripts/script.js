var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/фото.jpg') {
      myImage.setAttribute ('src','images/фото2.jpg');
    } else {
      myImage.setAttribute ('src','images/фото.jpg');
}
}