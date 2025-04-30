window.onscroll = changeHeaderColor;
Object.addEventListener("scroll", changeHeaderColor);

function changeHeaderColor(){
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        document.getElementById("innerHeader").style.backgroundColor = "rgba(0, 0, 0, 0.27)";
    }else{
        document.getElementById("innerHeader").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
