//
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
//Checks the time shown in the minute and second variables (m / s) and places a "0" at the start if the number shown is lower than 10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//Creates a function that searches the document for an element with the ID of 'txt'
//then targets the style and font size and increase to 50px
function increaseFont() {
    document.getElementById('txt').style.fontSize = '150px';
}
//Creates a function that searches the document for an element with the ID of 'txt'
//then targets the style and font size and decreases to it's original size of 16px
function decreaseFont() {
    document.getElementById('txt').style.fontSize = '10px'
}

//Event listeners
document.getElementById('txt').addEventListener('mouseover', increaseFont);
document.getElementById('txt').addEventListener('mouseout', decreaseFont);

//Run required functions
startTime();
