//Create matrix
const createMatrix = (m, n, defaultValue = 0) => {
    let arr = [];
    for(let i = 0; i < m; i++) {
        arr.push([]);
        for(let j = 0; j < n; j++) {
            arr[i].push(defaultValue);
        }
    }
    return arr;
}

//Change direction
const changeDirection = (vector) => {
    const cosx = 0;
    const sinex = 1;

    const {
        x,
        y
    } = vector;
    vector.x = x * cosx - y * sinex;
    vector.y = x * sinex + y * cosx;
}

//Check collision
const checkIfCollision = (current, matrix, m, n, defaultValue = 0) => {
    if(current.y == m || current.x == n) {
        return false;
    } else {
        if (matrix[current.y][current.x] === defaultValue) {
            return true;
        }
        return false;
    }
}

const forward = (current, vector) => {
    current.x += vector.x;
    current.y += vector.y;
}

const backward = (current, vector) => {
    current.x -= vector.x;
    current.y -= vector.y;
}

//Draw matrix
const fillMatrix = (m, n) => {
    let matrix = createMatrix(m, n);
    let vector = {
        x: 1,
        y: 0
    };
    let value = 1;
    let current = {
        x: 0,
        y: 0
    };

    while(value <= m * n) {
        if(checkIfCollision(current, matrix, m, n)) {
            matrix[current.y][current.x] = value;
            value++;
        } else {
            backward(current, vector);
            changeDirection(vector);
        }
        forward(current, vector);
    }

    return matrix;
}

const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const outputMatrix = document.getElementById('output-matrix');

let firstValue;
let secoundValue;

secondInput.oninput = function () {
    firstValue = firstInput.value;
    secondValue = secondInput.value;
    let matrix = fillMatrix(firstValue, secondValue);
    if(outputMatrix.innerHTML !== '') {
        outputMatrix.innerHTML = '';
    }
    matrix.forEach(matrix => {
        outputMatrix.innerHTML += `<h1>${matrix}</h1>`;
    });

    firstInput.value = '';
    secondInput.value = '';
}