const theTime=document.querySelector('.timer');
const testArea=document.querySelector('#textEntered');
const originText = document.querySelector('#orginalText p ').innerHTML;
const testWrapper = document.querySelector('#wallpaper');
const btnReset = document.querySelector('#reset');

var timer = [0,0,0,0];
var timerRunnig = false;
var interval;


function addZero(time){
    if (time<=9){
        time ="0"+time;
        
    }
    return time ;
}
function runTimer(){

    let currentTime = addZero( timer[0])+ ":"+
        addZero( timer[1])+":"+addZero( timer[2]);

    theTime.innerHTML=currentTime;

    timer[3] ++;

    timer[0] =Math.floor ((timer[3]/100)/60);
    timer[1]= Math.floor((timer[3]/100)-(timer[0]*60));
    timer[2]= Math.floor(timer[3] - (timer[1]*100)-(timer[0]*6000));
}

function spellcheck(){

    let textEntered = testArea.value;

    let originTextmach = originText.substring(0, textEntered.length);

    if(textEntered == originText){

        testWrapper.style.borderColor="green";
        clearInterval(interval);

    }else{

        if ( textEntered == originTextmach){
            testWrapper.style.borderColor="yellow";
        }else{
            testWrapper.style.borderColor="red";
        }

    }


}


function reset(){
    clearInterval(interval);
    interval=null;
    timer=[0,0,0,0];
    timerRunnig=false;


    testArea.value="";
    theTime.innerHTML="00:00:00";
    testWrapper.style.borderColor="grey";

}

function start(){
    let textLength = testArea.value.length;
    if(textLength == 0 && !timerRunnig){
        timerRunnig = true;
        setInterval(runTimer,10);
    }
    
}

testArea.addEventListener("keypress",start);
testArea.addEventListener("keyup",spellcheck);
btnReset.addEventListener('click',reset);