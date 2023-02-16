const playstation = document.getElementById('playstation');
const xbox = document.getElementById('xbox');
const container = document.getElementsByClassName("container");

function resetHeight(){
  // reset the body height to that of the inner browser
  document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();



xbox.addEventListener('mouseenter', (e) => {
    xbox.style.flexGrow = '3';
  });
  
  xbox.addEventListener('mouseleave', (e) => {
    xbox.style.flexGrow = '1';
  });

  playstation.addEventListener('mouseenter', (e) => {
    playstation.style.flexGrow = '3';
  });
  
  playstation.addEventListener('mouseleave', (e) => {
    playstation.style.flexGrow = '1';
  });


  xbox.addEventListener('touchstart', (event) => {
    xbox.style.flexGrow = '3';
    console.log("hey");
  });


  playstation.addEventListener('touchstart', (e) => {
    playstation.style.flexGrow = '3';
    console.log("hey2");
  });
  



