const hexArr = [
  "#FFA500",
  "#FF0000",
  "#32CD32",
  "#0000FF",
  "#00FF00",
  "#7FFF00",
  "#FFFF00",
  "#808080",
  "#6495ED",
  "#000080",
];
const simpleArr = [
  "Orange",
  "Red",
  "LimeGreen",
  "Blue",
  "Green",
  "chartreuse",
  "Yellow",
  "Gray",
  "cornflowerblue",
  "Navy",
];
const color = document.getElementById("color");
const bg_color = document.querySelector("main");
var hexMode = false;
var hexBtn= document.querySelectorAll('ul div li')[1];
var simpleBtn= document.querySelectorAll('uldiv li')[0];
// for (let i = 0; i < 10; i++) {
//   let randomColor = Math.floor(Math.random() * 16777215).toString(16);

//   hexArr.push("#" + randomColor);
// }
function toggle(b){
     hexMode=b;
     
  
    if(!hexMode){
        hexBtn.classList.remove('active');
        simpleBtn.classList.add('active'); 
    }else 
        simpleBtn.classList.remove('active')
        hexBtn.classList.add('active');

}
function onClick() {
  let randomIndex = Math.floor(Math.random() * 10);
  (
    !hexMode
      ? (color.innerHTML = simpleArr[randomIndex])
      : (color.innerHTML = hexArr[randomIndex])
  );
  color.style.color = simpleArr[randomIndex];
  bg_color.style.backgroundColor = simpleArr[randomIndex];
}
