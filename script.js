const playstation = document.getElementById('playstation');
const xbox = document.getElementById('xbox');


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


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
  



