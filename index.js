// Your code here

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF3713";

dodger.style.bottom = "0px";


document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    else if(e.key =="ArrowRight"){
        moveDodgerRight();
    }
});




function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);

    if (left > 0) {
        dodger.style.left = `${left-1}px`;
    }


}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px","")
    const left = parseInt(leftNumbers,10);

    if (left < 360){
        dodger.style.left = `${left+1}px`
    }

}
