function js_style() {
    const text = document.getElementById('text');
    text.style.fontSize = "14pt";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "green";
}

function getFormvalue() {
    const names = [];
    document.querySelectorAll('#form1>input').forEach(item => {
        if (item.value !== 'Submit') {
            names.push(item.value);
        }
    });
    const p = document.createElement('p');
    p.innerText = names.join(' ');
    document.getElementById('form1').append(p);
    return false;
}

function getAttributes() {
    const attributes = [];
    const attributesP = document.getElementById('w3r');
    attributes.push(attributesP.type);
    attributes.push(attributesP.hreflang);
    attributes.push(attributesP.rel);
    attributes.push(attributesP.target);
    attributes.push(attributesP.href);
    const p = document.createElement('p');
    p.innerText = attributes.join(' ');
    attributesP.after(p);
}

let rowCounter = 3;

function insert_Row() {
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerText = `Row${rowCounter} cell1`;
    td2.innerText = `Row${rowCounter} cell2`;
    rowCounter++;
    row.append(td1);
    row.append(td2);
    document.getElementById('sampleTable').append(row);
}

function changeContent() {
    let row = Number(window.prompt("Input the Row number(0,1,2)", "0")) + 1;
    if (row < 1 || row > 3) {
        window.alert("Error: number not valid!")
        return;
    }
    let column = Number(window.prompt("Input the Column number(0,1)", "0")) + 1;
    if (column < 1 || column > 2) {
        window.alert("Error: number not valid!")
        return;
    }
    let content = window.prompt("Input the Cell content");
    document.querySelector(`#myTable tr:nth-child(${row}) td:nth-child(${column})`).innerText = content;
}

function createTable() {
    let row = Number(window.prompt("Input the number of rows"));
    if (row <= 0) {
        window.alert("Error: number not valid!")
        return;
    }
    let column = Number(window.prompt("Input the number of columns"));
    if (column <= 0) {
        window.alert("Error: number not valid!")
        return;
    }
    for (let i = 0; i < row; i++) {
        const tr = document.createElement('tr');
        for (let k = 0; k < column; k++) {
            const td = document.createElement('td');
            td.innerText = `Row${i + 1} cell${k + 1}`;
            tr.append(td);
        }
        document.getElementById('myTable2').append(tr);
    }
}

function removecolor() {
    const select = document.getElementById('colorSelect');
    select.options[select.selectedIndex].remove();
}

function getOptions() {
    const array = [];
    let counter = 0;
    const select = document.getElementById('mySelect');
    for (let i = 0; i < select.options.length; i++) {
        array.push(select.options[i].innerText);
        counter++;
    }
    window.alert(`Total of options: ${counter}\n Options:\n ${array.join('\n')}`);
}
const h1Window = document.createElement('h1');
document.querySelector('body').append(h1Window);

function getSize() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    h1Window.innerText = `width: ${width}, height: ${height}`;
}
const h2Time = document.createElement('h2');
document.querySelector('body').append(h2Time);

function clock() {
    const today = new Date();

    function addZero(number) {
        if (number < 10) {
            number = "0" + number;
        }
        return number;
    }
    h2Time.innerText = `${addZero(today.getHours())}:${addZero(today.getMinutes())}:${addZero(today.getSeconds())}`;
}
document.getElementById('background').style.backgroundColor = 'red';
clock();
setInterval(clock, 1000);