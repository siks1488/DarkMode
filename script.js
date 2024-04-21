const buttonD = document.querySelector('.darkes');
const buttonW = document.querySelector('.white');

const dark = function(){
    document.body.style.backgroundColor = 'black';
    document.querySelector(`.Hello`).style.color = `white`;
}
const white = function(){
    document.body.style.backgroundColor = 'white'
    document.querySelector(`.Hello`).style.color = `black`;
}
buttonD.addEventListener(`click`,function(){
    buttonD.classList.add(`hidden`);
    buttonW.classList.remove(`hidden`);
    dark();
})
buttonW.addEventListener(`click`,function(){
    buttonW.classList.add(`hidden`);
    buttonD.classList.remove(`hidden`);
    white();
})

buttonD.addEventListener(`click`,dark);
buttonW.addEventListener(`click`,white);