const MESSAGE_TYPES = Object.freeze(
    {
        ERROR: Symbol('ERROR'),
        INFO: Symbol('INFO'),
        WARNING: Symbol('WARNING')
    }
)


const leftDirection = document.getElementById("left");
const topDirection = document.getElementById("top");
const downDirection = document.getElementById("down");
const rightDirection = document.getElementById("right");

const score1 = document.getElementById("score")
const startGames = document.getElementById("startGames");
let gameOver = document.getElementById("gameOver")

const canvas = document.getElementById("myCanvas");

const circle = canvas.getContext('2d');
const newFigure = canvas.getContext('2d');



let directionX = canvas.width -250; // posicion X
let directionY = canvas.height -250; // Posicion Y

let accelaration = 10;
let directional = '';

let key = false
let numScore = 0

const startScore = () => {
    if(key == true){
        score1.textContent = numScore += 1;
    }
}

const numberRandom = () => {
    return Math.floor(Math.random() * (500 - 0)) + 0;
}

let num1 = numberRandom()
let num2 = numberRandom()
let num3 = numberRandom()
let num4 = numberRandom()
let num5 = numberRandom()
let num6 = numberRandom()
let num7 = numberRandom()
let num8 = numberRandom()
let num9 = numberRandom()
let num10 = numberRandom()
let num11 = numberRandom()
let num12 = numberRandom()
let num13 = numberRandom()
let num14 = numberRandom()
let num15 = numberRandom()
let num16 = numberRandom()

let numY1 = numberRandom()
let numY2 = numberRandom()
let numY3 = numberRandom()
let numY4 = numberRandom()
let numY5 = numberRandom()
let numY6 = numberRandom()
let numY7 = numberRandom()
let numY8 = numberRandom()
let numY9 = numberRandom()
let numY10 = numberRandom()
let numY11 = numberRandom()
let numY12 = numberRandom()
let numY13 = numberRandom()
let numY14 = numberRandom()
let numY15 = numberRandom()
let numY16 = numberRandom()

let timeKey = true
let keyStartGame = false

const myCircle = (keyForStart) => {
    if(keyForStart == true){
        circle.clearRect(0, 0, canvas.width, canvas.height);
    circle.beginPath()
    
    circle.rect(directionX, directionY, 20, 20);
    circle.fillStyle = '#000'
    circle.fill()
    
    circle.closePath()

    if(directional == 'left' && directionX > 0){
        directionX -= accelaration
    }else if(directional == 'right' && directionX < 480){
        directionX += accelaration
    }else if(directional == 'down' && directionY < 480){
        directionY += accelaration
    }else if(directional == 'top' && directionY > 0){
        directionY -= accelaration
    }

    if(directionX <= 0){
        directionX = 250
        directionY = 250
        numScore = 0
        key == false
        keyStartGame = false
        gameOver.textContent = 'Game Over'
    }else if(directionX >= 480){
        directionX = 250
        directionY = 250
        numScore = 0
        key == false
        keyStartGame = false
        gameOver.textContent = 'Game Over'
    }else if(directionY >= 480){
        directionX = 250
        directionY = 250
        numScore = 0
        key == false
        keyStartGame = false
        gameOver.textContent = 'Game Over'
    }else if(directionY <= 0){
        directionX = 250
        directionY = 250
        numScore = 0
        key == false
        keyStartGame = false
        gameOver.textContent = 'Game Over'
    }    

    createFigure(num1, numY1, 20, 20, '#050')
    createFigure(num2, numY2, 20, 20, '#324')
    createFigure(num3, numY3, 20, 20, '#324')
    createFigure(num4, numY4, 20, 20, '#324')
    createFigure(num5, numY5, 20, 20, '#324')
    createFigure(num6, numY6, 20, 20, '#324')
    createFigure(num7, numY7, 20, 20, '#324')
    createFigure(num8, numY8, 20, 20, '#324')
    createFigure(num9, numY9, 20, 20, '#050')
    createFigure(num11, numY10, 20, 20, '#324')
    createFigure(num12, numY12, 20, 20, '#324')
    createFigure(num13, numY13, 20, 20, '#324')
    createFigure(num14, numY14, 20, 20, '#324')
    createFigure(num15, numY15, 20, 20, '#324')
    createFigure(num16, numY16, 20, 20, '#324')
    }

    setTimeout(() => {
        '2'
    },1000)

}

const startGamesForKey = () => {
    if(keyStartGame == true){
        key = true
        myCircle(keyStartGame)
        setInterval(myCircle, 50)
    }
}

startGames.addEventListener('click', () => {
    keyStartGame = true
    gameOver.textContent = ''
    startGamesForKey()
})

setInterval(startScore, 1000)
setInterval(startGamesForKey, 50)

//--------------------------------------------------------------------------------

const createFigure = (dx, dy, width, height, color) => {
    const newFigure = canvas.getContext('2d');
    const directionFigureX = dx
    const directionFigureY = dy

    newFigure.beginPath()
    
    newFigure.rect(directionFigureX, directionFigureY, width, height);
    newFigure.fillStyle = color
    newFigure.fill()
    
    newFigure.closePath()

    const rangeRestX = dx - 20;
    const rangeMoreX = dx + 20;

    const rangeRestY = dy - 20;
    const rangeMoreY = dy + 20;

    if(rangeMoreX >= directionX && rangeRestX <= directionX && rangeMoreY >= directionY && rangeRestY <= directionY){
        directionX = 250
        directionY = 250
        numScore = 0
        key == false
        gameOver.textContent = 'Game Over'
        keyStartGame = false
    }
}


//-------------------------------------------------------------------------------------

leftDirection.addEventListener('click',() => {
    directional = 'left'
})

rightDirection.addEventListener('click',() => {
    directional = 'right'
})

downDirection.addEventListener('click',() => {
    directional = 'down'
})

topDirection.addEventListener('click',() => {
    directional = 'top'
})

//setInterval(myCircle(), 100)

// const animationTestMove2 = () => {
//     circleNew2.clearRect(0, 0, canvas.width, canvas.height);
//     circleNew2.beginPath();

//     circleNew2.rect(x, y, 20, 20) //1
//     circleNew2.fillStyle = '#000'; //2
//     circleNew2.fill() //3

//     circleNew2.closePath()

//     x += dx;
//     y += dy;
// }

// setInterval(animationTestMove2, 100)



// // const canvas = document.getElementById("myCanvas")
// const ctx = canvas.getContext('2d')

// ctx.beginPath() //abriendo

// ctx.fillStyle = "#ffff"; //color

// ctx.rect(100, 5, 100, 30)//variable.rect(cordenadasX, cordenadasY, ancho, alto)
// ctx.fill()

// ctx.closePath() //cerrando

// const circle = canvas.getContext('2d')

// circle.beginPath();
// circle.arc(240, 160, 20, 0, Math.PI * 2, false); // usamos arc para poder realizar un circulo
// circle.fillStyle = "green";
// circle.fill();
// circle.closePath();

// const circle2 = canvas.getContext('2d')

// circle2.beginPath()
// circle2.arc(250, 250, 20, 0, Math.PI * 2, false);
// circle2.strokeStyle = "rgba(0, 0, 255, 0.5)";
// circle2.stroke();

// circle2.closePath()
