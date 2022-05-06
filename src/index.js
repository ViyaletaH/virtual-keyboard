const inp = document.createElement('textarea');
document.body.append(inp);
inp.classList.add('inp');
const cont = document.createElement('div');
document.body.append(cont);
cont.classList.add('contain');

const firstRow = document.createElement('div');
firstRow.classList.add('firstRow');
cont.appendChild(firstRow);
const secRow = document.createElement('div');
secRow.classList.add('secRow');
cont.appendChild(secRow);
const thiRow = document.createElement('div');
thiRow.classList.add('thiRow');
cont.appendChild(thiRow);
const fourRow = document.createElement('div');
fourRow.classList.add('fourRow');
cont.appendChild(fourRow);
const fifRow = document.createElement('div');
fifRow.classList.add('fifRow');
cont.appendChild(fifRow);

const firstRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const secRus = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'];
const thiRus = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const fourRus = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Top', 'Shift'];
const fifRus = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'left', 'bottom', 'right', 'Ctrl'];

function create(arr, row) {
  let regButt;
  for (let i = 0; i < arr.length; i++) {
    regButt = document.createElement('div');
    regButt.classList.add('regButt');
    regButt.setAttribute('id', `${arr[i] + [i]}`);
    row.appendChild(regButt);
    regButt.innerText = arr[i];
  }
  row.appendChild(regButt);
}

create(firstRus, firstRow);

create(secRus, secRow);

create(thiRus, thiRow);

create(fourRus, fourRow);

create(fifRus, fifRow);

const shift = document.getElementById('Shift_2');
const shiftText = shift.innerText;
shiftText = 'Shift';
shiftText.style.color = 'black';