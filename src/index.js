const inp = document.createElement("textarea");
document.body.append(inp);
inp.classList.add("inp");
const cont = document.createElement("div");
document.body.append(cont);
cont.classList.add("contain");

const firstRow = document.createElement("div");
firstRow.classList.add("firstRow");
cont.appendChild(firstRow);
const secRow = document.createElement("div");
secRow.classList.add("secRow");
cont.appendChild(secRow);
const thiRow = document.createElement("div");
thiRow.classList.add("thiRow");
cont.appendChild(thiRow);
const fourRow = document.createElement("div");
fourRow.classList.add("fourRow");
cont.appendChild(fourRow);
const fifRow = document.createElement("div");
fifRow.classList.add("fifRow");
cont.appendChild(fifRow);

const firstRus = [
  { key: "ё", keyCode: 192, code: "Backquote", enKey: "`" },
  { key: "1", keyCode: 49, code: "Digit1", enKey: "`" },
  { key: "2", keyCode: 50, code: "Digit2", enKey: "`" },
  { key: "3", keyCode: 51, code: "Digit3", enKey: "`" },
  { key: "4", keyCode: 52, code: "Digit4", enKey: "`" },
  { key: "5", keyCode: 53, code: "Digit5", enKey: "`" },
  { key: "6", keyCode: 54, code: "Digit6", enKey: "`" },
  { key: "7", keyCode: 55, code: "Digit7", enKey: "`" },
  { key: "8", keyCode: 56, code: "Digit8", enKey: "`" },
  { key: "9", keyCode: 57, code: "Digit9", enKey: "`" },
  { key: "0", keyCode: 48, code: "Digit0", enKey: "`" },
  { key: "-", keyCode: 189, code: "Minus", enKey: "`" },
  { key: "=", keyCode: 187, code: "Equal", enKey: "`" },
  { key: "Backspace", keyCode: 8, code: "Backspace", enKey: "`" },
];

const firstEn = [
  { key: "`", keyCode: 192, code: "Backquote2" },
  { key: "1", keyCode: 49, code: "Digit1" },
  { key: "2", keyCode: 50, code: "Digit2" },
  { key: "3", keyCode: 51, code: "Digit3" },
  { key: "4", keyCode: 52, code: "Digit4" },
  { key: "5", keyCode: 53, code: "Digit5" },
  { key: "6", keyCode: 54, code: "Digit6" },
  { key: "7", keyCode: 55, code: "Digit7" },
  { key: "8", keyCode: 56, code: "Digit8" },
  { key: "9", keyCode: 57, code: "Digit9" },
  { key: "0", keyCode: 48, code: "Digit0" },
  { key: "-", keyCode: 189, code: "Minus" },
  { key: "=", keyCode: 187, code: "Equal" },
  { key: "Backspace", keyCode: 8, code: "Backspace" },
];

const secRus = [
  { key: "Tab", keyCode: 9, code: "Tab" },
  { key: "й", keyCode: 81, code: "KeyQ" },
  { key: "ц", keyCode: 87, code: "KeyW" },
  { key: "у", keyCode: 69, code: "KeyE" },
  { key: "к", keyCode: 82, code: "KeyR" },
  { key: "е", keyCode: 84, code: "KeyT" },
  { key: "н", keyCode: 89, code: "KeyY" },
  { key: "г", keyCode: 85, code: "KeyU" },
  { key: "ш", keyCode: 73, code: "KeyI" },
  { key: "щ", keyCode: 79, code: "KeyO" },
  { key: "з", keyCode: 80, code: "KeyP" },
  { key: "х", keyCode: 219, code: "BracketLeft" },
  { key: "ъ", keyCode: 221, code: "BracketRight" },
  { key: "\\", keyCode: 220, code: "Backslash" },
  { key: "Delete", keyCode: 46, code: "Delete" },
];

const secEn = [
  { key: "Tab", keyCode: 9, code: "Tab" },
  { key: "q", keyCode: 81, code: "KeyQ" },
  { key: "w", keyCode: 87, code: "KeyW" },
  { key: "e", keyCode: 69, code: "KeyE" },
  { key: "r", keyCode: 82, code: "KeyR" },
  { key: "t", keyCode: 84, code: "KeyT" },
  { key: "y", keyCode: 89, code: "KeyY" },
  { key: "u", keyCode: 85, code: "KeyU" },
  { key: "i", keyCode: 73, code: "KeyI" },
  { key: "o", keyCode: 79, code: "KeyO" },
  { key: "p", keyCode: 80, code: "KeyP" },
  { key: "[", keyCode: 219, code: "BracketLeft" },
  { key: "]", keyCode: 221, code: "BracketRight" },
  { key: "\\", keyCode: 220, code: "Backslash" },
  { key: "Delete", keyCode: 46, code: "Delete" },
];

const thiRus = [
  { key: "CapsLock", keyCode: 20, code: "CapsLock" },
  { key: "ф", keyCode: 65, code: "KeyA" },
  { key: "ы", keyCode: 83, code: "KeyS" },
  { key: "в", keyCode: 68, code: "KeyD" },
  { key: "а", keyCode: 70, code: "KeyF" },
  { key: "п", keyCode: 71, code: "KeyG" },
  { key: "р", keyCode: 72, code: "KeyH" },
  { key: "о", keyCode: 74, code: "KeyJ" },
  { key: "л", keyCode: 75, code: "KeyK" },
  { key: "д", keyCode: 76, code: "KeyL" },
  { key: "ж", keyCode: 186, code: "Semicolon" },
  { key: "э", keyCode: 222, code: "Quote" },
  { key: "Enter", keyCode: 13, code: "Enter" },
];

const thiEn = [
  { key: "CapsLock", keyCode: 20, code: "CapsLock" },
  { key: "a", keyCode: 65, code: "KeyA" },
  { key: "s", keyCode: 83, code: "KeyS" },
  { key: "d", keyCode: 68, code: "KeyD" },
  { key: "f", keyCode: 70, code: "KeyF" },
  { key: "g", keyCode: 71, code: "KeyG" },
  { key: "h", keyCode: 72, code: "KeyH" },
  { key: "j", keyCode: 74, code: "KeyJ" },
  { key: "k", keyCode: 75, code: "KeyK" },
  { key: "l", keyCode: 76, code: "KeyL" },
  { key: ";", keyCode: 186, code: "Semicolon" },
  { key: "'", keyCode: 222, code: "Quote" },
  { key: "Enter", keyCode: 13, code: "Enter" },
];
const fourRus = [
  { key: "Shift", enKey: "Shift", keyCode: 16, code: "ShiftLeft" },
  { key: "я", enKey: "Shift", keyCode: 90, code: "KeyZ" },
  { key: "ч", enKey: "Shift", keyCode: 88, code: "KeyX" },
  { key: "с", enKey: "Shift", keyCode: 67, code: "KeyC" },
  { key: "м",  enKey: "Shift", keyCode: 86, code: "KeyV" },
  { key: "и", enKey: "Shift", keyCode: 66, code: "KeyB" },
  { key: "т", enKey: "Shift", keyCode: 78, code: "KeyN" },
  { key: "ь", enKey: "Shift", keyCode: 77, code: "KeyM" },
  { key: "б", enKey: "Shift", keyCode: 188, code: "Comma" },
  { key: "ю", enKey: "Shift", keyCode: 190, code: "Period" },
  { key: ".", enKey: "Shift", keyCode: 191, code: "Slash" },
  { key: "ArrowUp", enKey: "Shift", keyCode: 38, code: "ArrowUp" },
  { key: "Shift", enKey: "Shift", keyCode: 16, code: "ShifRight" },
];

const fourEn = [
  { key: "Shift", keyCode: 16, code: "ShiftLeft" },
  { key: "z", keyCode: 90, code: "KeyZ" },
  { key: "x", keyCode: 88, code: "KeyX" },
  { key: "c", keyCode: 67, code: "KeyC" },
  { key: "v", keyCode: 86, code: "KeyV" },
  { key: "b", keyCode: 66, code: "KeyB" },
  { key: "n", keyCode: 78, code: "KeyN" },
  { key: "m", keyCode: 77, code: "KeyM" },
  { key: ",", keyCode: 188, code: "Comma" },
  { key: ".", keyCode: 190, code: "Period" },
  { key: "/", keyCode: 191, code: "Slash" },
  { key: "ArrowUp", keyCode: 38, code: "ArrowUp" },
  { key: "Shift", keyCode: 16, code: "ShifRight" },
];
const fif = [
  { key: "Control", keyCode: 17, code: "ControlLeft" },
  { key: "Meta", keyCode: 91, code: "MetaLeft" },
  { key: "Alt", keyCode: 18, code: "AltLeft" },
  { key: "Space", keyCode: 32, code: "Space" },
  { key: "Alt", keyCode: 18, code: "AltRight" },
  { key: "ArrowLeft", keyCode: 37, code: "ArrowLeft" },
  { key: "ArrowDown", keyCode: 40, code: "ArrowDown" },
  { key: "ArrowRight", keyCode: 39, code: "ArrowRight" },
  { key: "Control", keyCode: 17, code: "ControlRight" },
];

function create(arr, row) {
  let regButt;
  for (let i = 0; i < arr.length; i++) {
    regButt = document.createElement("div");
    regButt.classList.add("regButt");
    regButt.setAttribute("id", `${arr[i].code}`);
    regButt.setAttribute("data", `${arr[i].keyCode}`);
    row.appendChild(regButt);
    regButt.innerText = arr[i].key;
  }
  row.appendChild(regButt);
}

create(firstRus, firstRow);

create(secRus, secRow);

create(thiRus, thiRow);

create(fourRus, fourRow);

create(fif, fifRow);

const arrowLeft = document.getElementById('ArrowLeft');
const arrowDown= document.getElementById('ArrowDown');
const arrowRight = document.getElementById('ArrowRight');
const arrowUp = document.getElementById('ArrowUp');
const altLeft = document.getElementById('AltLeft');
const altRight = document.getElementById('AltRight');
const space = document.getElementById('Space');
const win = document.getElementById('MetaLeft');
const cntrlLeft = document.getElementById('ControlLeft');
const cntrlRight = document.getElementById('ControlRight');
const shiftLeft = document.getElementById('ShiftLeft');
const shiftRight = document.getElementById('ShifRight');
const enter = document.getElementById('Enter');
const caps = document.getElementById('CapsLock');
const del = document.getElementById('Delete');
const tab = document.getElementById('Tab');
const backsp = document.getElementById('Backspace');
const btns = document.querySelectorAll('.regButt');

btns.forEach(elem => elem.style.fontFamily = 'Arial, Helvetica, sans-serif');
btns.forEach(elem => elem.style.fontSize = '14px');
btns.forEach(elem => elem.style.color = 'violet');

backsp.style.backgroundColor ='#f5f5dc';
backsp.style.width ='70px';

tab.style.backgroundColor ='#f5f5dc';
tab.style.width ='70px'

del.style.backgroundColor ='#f5f5dc';
del.style.width ='70px';

cntrlLeft.style.backgroundColor ='#f5f5dc';

caps.style.backgroundColor ='#f5f5dc';
caps.style.width ='100px';

enter.style.backgroundColor ='#f5f5dc';
enter.style.width ='100px';

shiftLeft.style.backgroundColor ='#f5f5dc';
shiftLeft.style.width ='100px';

shiftRight.style.backgroundColor ='#f5f5dc';
shiftRight.style.width ='115px';

cntrlRight.style.backgroundColor ='#f5f5dc';

space.style.backgroundColor = 'pink';
space.style.width = '420px';

arrowLeft.style.backgroundColor ='#f5f5dc';
arrowLeft.style.color ='transparent';

arrowRight.style.backgroundColor ='#f5f5dc';
arrowRight.style.color ='transparent';

arrowUp.style.backgroundColor ='#f5f5dc';
arrowUp.style.color ='transparent';

arrowDown.style.backgroundColor ='#f5f5dc';
arrowDown.style.color ='transparent';

altLeft.style.backgroundColor ='#f5f5dc';
altRight.style.backgroundColor ='#f5f5dc';

win.style.backgroundColor ='#f5f5dc';

let checker = false;

document.onkeydown = function keySearch(event) {
  let key = document.getElementById(`${event.code}`);
  key.classList.add("active");
  if (event.code == "ShiftLeft") {
    checker = true;
  }
  if (event.code == "AltLeft" && checker) {
    checker = false;
    let elem1 = document.querySelector(".firstRow");
    let elem2 = document.querySelector(".secRow");
    let elem3 = document.querySelector(".thiRow");
    let elem4 = document.querySelector(".fourRow");
    elem1.innerHTML = "";
    elem2.innerHTML = "";
    elem3.innerHTML = "";
    elem4.innerHTML = "";
    create(firstEn, firstRow);
    create(secEn, secRow);
    create(thiEn, thiRow);
    create(fourEn, fourRow);

  
  }

  if (event.code == "ContolLeft") {
    checker = true;
  }
  if (event.code == "AltLeft" && checker) {
    checker = false;
    let elem1 = document.querySelector(".firstRow");
    let elem2 = document.querySelector(".secRow");
    let elem3 = document.querySelector(".thiRow");
    let elem4 = document.querySelector(".fourRow");
    elem1.innerHTML = "";
    elem2.innerHTML = "";
    elem3.innerHTML = "";
    elem4.innerHTML = "";
    create(firstRus, firstRow);
    create(secRus, secRow);
    create(thiRus, thiRow);
    create(fourRus, fourRow);

  }

};

let result = '';
document.oninput = function keyType(event) {
  result += event.key;
  inp.innerText = result;
}


// cont.onkeydown = function en(event) {

// };
