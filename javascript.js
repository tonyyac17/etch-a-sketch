const container = document.querySelector('#container');

let squares = 16**2

function createGrid(){
    for(let i = 0; i < squares; i++){
        let div = document.createElement('div');
        div.classList.add('cell');
        container.appendChild(div)
    }
}