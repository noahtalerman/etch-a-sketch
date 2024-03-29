const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.display = 'flex';
gridContainer.style.justifyContent = 'center';

const createRow = () => {
    for (let i = 0; i < 4; i++) {
        const sqr = document.createElement('div');
        sqr.classList.add('square');
        sqr.classList.add('inactive');
        // sqr.style.borderBottom = '0px';
        // if (i !== 0){
        //     sqr.style.borderLeft = '0px';
        // }
        gridContainer.appendChild(sqr);
    }
}

const createLastRow = () => {
    for (let i = 0; i < 4; i++) {
        const sqr = document.createElement('div');
        sqr.classList.add('square');
        sqr.classList.add('inactive');
        // if (i !== 0){
        //     sqr.style.borderLeft = '0px';
        // }
        gridContainer.appendChild(sqr);
    }
}
let numRows = 1;
for (let i = 0; i < 3; i++) {
    createRow();
    ++numRows;
}
createLastRow();

let sqrWidth = document.querySelector('.square').getBoundingClientRect().width;
let rowWidth = (numRows) * sqrWidth;
gridContainer.style.width = rowWidth;
gridContainer.style.flexWrap = 'wrap';
console.log(rowWidth);

const resizeRow = () => {
    sqrWidth = document.querySelector('.square').getBoundingClientRect().width;
    rowWidth = (numRows) * sqrWidth;
    gridContainer.style.width = rowWidth;
}
const body = document.querySelector('body');
body.onresize = resizeRow;

sqrs = document.querySelectorAll('.square');

sqrs.forEach(sqr => sqr.addEventListener('mouseenter', function(){
    let colors = ['#0000d6', '#1c00db', '#3d00e0', '#5300e8', '#6002ee',
                    '#7e3ff2', '#9965f4', '#b794f6', '#d4bff9', '#efe5fd']
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    this.style.setProperty('--element-background', random_color);
    this.style.setProperty('--element-border', random_color);
    this.classList.toggle('inactive');
    this.classList.toggle('active');
    resizeRow();
}));

const clearBoard = () => {
    sqrs.forEach(sqr => sqr.classList.remove('active'));
    sqrs.forEach(sqr => sqr.classList.add('inactive'));
}

refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', function() {
    clearBoard();
});

const inputLabel = document.querySelector('.input__label-content');
const inputBox = document.querySelector('.input');

document.addEventListener('click', function(e) {
    let isClickInside = inputBox.contains(e.target);
    inputLabel.textContent = 'Enter an integer between 2 & 16';
    if (!isClickInside) {
        inputLabel.textContent = 'Height x Width'
    }
});

