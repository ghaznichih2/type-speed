const theTime=document.querySelector('.timer');
const testArea=document.querySelector('#textEntered');
const testWrapper = document.querySelector('#wallpaper');
const btnReset = document.querySelector('#reset');

let originText = document.querySelector('#orginalText .t_1 ').innerHTML;
let originText2 = document.querySelector('#orginalText .t_2 ').innerHTML;


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


function change() {
    
    
    document.querySelector('.t_1').classList.toggle('dis-none');
    document.querySelector('.t_2').classList.toggle('dis-block');

    originText = originText2;
    return originText;
    
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
      interval =  setInterval(runTimer,10);
    }
    
}



//button 
const changTaxt= document.querySelector('#chang');



testArea.addEventListener("keypress",start);
testArea.addEventListener("keyup",spellcheck);
btnReset.addEventListener('click',reset);

changTaxt.addEventListener("click",change);



const addUserButton= document.getElementById("add-user-bottem");
    addUserButton.addEventListener('click',()=> {
      document.querySelector('.add-user-modal').classList.add('showe')
      document.querySelector('.modal-back').classList.remove('dis-none')
    })

    document.querySelector('.modal-back').addEventListener('click',(e) =>{
      document.querySelector('.add-user-modal').classList.remove("showe")
      e.target.classList.add('dis-none')
    })