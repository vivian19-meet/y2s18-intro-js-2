// Put all your JavaScript in this file!

function getColor() {
    alert("give me a color");
    var c =prompt("choose a bg color")
    var x =document.getElementsByTagName("body")
    x[0].style.backgroundColor=c
}
