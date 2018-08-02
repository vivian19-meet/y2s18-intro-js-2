// YOUR TASK: Add more pictures!"
var pictures = ['./imgs/dog.jpg', "./imgs/waves.jpg","./imgs/pencils.jpg","./imgs/boats.jpg"];
var currentIndex = 0;
document.getElementsByTagName("img")[0].addEventListener("click", showNextPicture) 
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again


  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  document.getElementsByTagName("img")[0].src=pictures[currentIndex]


  // YOUR TASK: Finish this function!
}