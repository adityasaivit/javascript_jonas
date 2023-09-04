'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='🎉correct Quess!'
// console.log(document.querySelector('.message').textContent)


// document.querySelector('.number').textContent=13
// document.querySelector('.score').textContent=10

// document.querySelector('.guess').value=23
// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value=23

//we use .value for the changing of the input value of elements

let number=Math.trunc(Math.random()*20)+1//gives randomnumber between 0and 1
// number=number*20//convert number between 0 and 20
// document.querySelector('.number').textContent=number


let score=20
let highscore=0

document.querySelector('.check').addEventListener('click',function() {
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess,typeof(guess))
    
    if(!guess)//if guess=0 !guess will become 1 and if statement will be passed
    {
        document.querySelector('.message').textContent='😢 No Number'
        score=score-1;
        document.querySelector('.score').textContent=score
        
    }else if(guess==number)
    {
        document.querySelector('.message').textContent='🥳found the number'
        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').style.width='30rem'
        document.querySelector('.number').textContent=number
        if(score>highscore)
        {
            highscore=score
            document.querySelector('.highscore').textContent=highscore
        }
    }
    else if(guess>number)
    {
        document.querySelector('.message').textContent='Too Big'
        score=score-1

        document.querySelector('.score').textContent=score
        if(score==0)
        {
            document.querySelector('.message').textContent='you lost!'
        }
    }
    else if(guess<number)
    {
        document.querySelector('.message').textContent='Too Small'
        score=score-1
        document.querySelector('.score').textContent=score
        if(score==0)
        {
            document.querySelector('.message').textContent='you lost'
        }
    }
    
})

document.querySelector('.score').textContent=score
console.log(document.querySelector('.score').textContent)

//when player wins background to green and number box black back and white color

//functionality of again button


document.querySelector('.again').addEventListener('click',function (){
    
    score=20
    number=Math.trunc(Math.random()*20) + 1
    document.querySelector('.message').textContent='start gussing...'
    document.querySelector('.score').textContent=score
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').textContent=''
    document.querySelector('body').style.backgroundColor='#111'
    document.querySelector('.number').style.width='15rem'

})



