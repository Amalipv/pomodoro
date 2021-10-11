const app = () => {
  const startButton = document.querySelector(".start");
const outline = document.querySelector(".moving-outline circle");
let timeDisplay = document.querySelector(".time-display");

  let fakeDuration = 1200;
  const outlineLength = outline.getTotalLength();
  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;
 let currentTime;
  startButton.addEventListener('click', () => {
    if(startButton.getAttribute("data-toggle")=="play"){
      startButton.src="./images/pause.png";
      startButton.setAttribute("data-toggle","pause");
      updatetimer();
    }else{
      startButton.src = "./images/play-button.png";
       startButton.setAttribute("data-toggle","play");
      updatetimer();
    }
  });



  /*Updates the timer display and the actual time */
  let  updatetimer = () => {
   
    if(startButton.getAttribute("data-toggle")=="pause"){
      currentTime = 1;
    }
    var timerInterval = setInterval(()=>{
      if(startButton.getAttribute("data-toggle")=="play"){
        clearInterval(timerInterval);
        return;
      }
      let elapsed = fakeDuration - currentTime ;
      let minutes = Math.floor(elapsed/60);
      let seconds = Math.floor(elapsed%60);
      outline.style.strokeDashoffset= outlineLength - (currentTime / fakeDuration) * outlineLength;
      timeDisplay.textContent = `${minutes}:${seconds}`;
      currentTime++;
      if(currentTime > fakeDuration){
        currentTime=0;
        startButton.src = "./images/play-button.png";
        outline.style.strokeDashoffset = outlineLength;
        clearInterval(timerInterval);
      }
    },1000);
    
  }
}

app();