let marks=0;
function submit(){
    if(document.getElementById("op14").checked)marks=marks+1;
    if(document.getElementById("op22").checked)marks=marks+1;
    if(document.getElementById("op33").checked)marks=marks+1;
    const ma= document.getElementById("ans-marks").innerHTML="Score: "+marks;
  

    const main = document.getElementById("main")
    main.remove();
}
