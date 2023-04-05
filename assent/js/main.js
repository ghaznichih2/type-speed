



const theTimer = document.querySelector('.timer');
const userType = document.querySelector('#textEntered');
const orginalText = document.querySelector('#orginalText p').innerHTML;
const wallper = document.querySelector('#wallpaper');

var timer = [0,0,0,0];

var ruuningtimer = false;

var interval;

function addZero(time) {
    if (time <= 9){
        time = "0"+ time;

    }
    return time
}


function runTime() {
    let strodTime = addZero(timer[0]) + ":" +addZero(timer[1]) + ":" + addZero(timer[2]) ;
    theTimer.innerHTML= strodTime;
    timer[3]++;

    timer[0]= Math.floor((timer[3] / 100  ) / 60  );
    timer[1]= Math.floor((timer[3] / 100  ) -(timer[0] * 60 )  );
    timer[2]= Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000) );

}



function spellCheck(){
    let textEntered=userType.value;
    let originTextMatch=orginalText.substring(0,textEntered.length);
    
    
    if(textEntered==orginalText)
    {
    
    wallper.style.borderColor="green";
    clearInterval(interval);
    
    }else{
        if(textEntered==originTextMatch){
    
        wallper.style.borderColor="yellow";
      
        }
        else
        {
            
            wallper.style.borderColor="red";
        }
    }
    }

function start() {
    let textLength = userType.value.length;

    if (textLength == 0 && !ruuningtimer) {
        ruuningtimer = true;
      interval=  setInterval(runTime,10);
    }
}

userType.addEventListener("keypress",start);
userType.addEventListener("keyup",spellCheck);