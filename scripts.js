const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';

const createRow = () => {
    for (let i = 0; i < 8; i++) {
        const sqr = document.createElement('div');
        sqr.classList.add('square');
        sqr.classList.add('inactive');
        // sqr.style.borderBottom = '0px';
        // if (i !== 0){
        //     sqr.style.borderLeft = '0px';
        // }
        container.appendChild(sqr);
    }
}

const createLastRow = () => {
    for (let i = 0; i < 8; i++) {
        const sqr = document.createElement('div');
        sqr.classList.add('square');
        sqr.classList.add('inactive');
        // if (i !== 0){
        //     sqr.style.borderLeft = '0px';
        // }
        container.appendChild(sqr);
    }
}
let numRows = 1;
for (let i = 0; i < 7; i++) {
    createRow();
    ++numRows;
}
createLastRow();

let sqrWidth = document.querySelector('.square').getBoundingClientRect().width;
let rowWidth = (numRows) * sqrWidth;
container.style.width = rowWidth;
container.style.flexWrap = 'wrap';
console.log(rowWidth);

const resizeRow = () => {
    sqrWidth = document.querySelector('.square').getBoundingClientRect().width;
    rowWidth = (numRows) * sqrWidth;
    container.style.width = rowWidth;
}
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
}));