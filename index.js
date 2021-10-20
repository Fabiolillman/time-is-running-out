let timerBox=document.querySelector(".hour-timer")
let timerBox2=document.querySelector(".min-timer")
let counterTimer2 = 0
let counterTimer = 9

function increaseAndPrint(){
    if(counterTimer >= 0||counterTimer2 <= 9){
        // console.log(counterTimer)
        timerBox.innerText=counterTimer;
        counterTimer--

        timerBox2.innerText=counterTimer2;
        counterTimer2++
    }else{
        counterTimer = 9
        counterTimer2 = 0
    }
}

setInterval(increaseAndPrint, 1000)
setInterval(increaseAndPrint2, 1000)
