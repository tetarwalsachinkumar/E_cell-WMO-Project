
// for notification message
const content=document.querySelectorAll(".keywords a");
const message=document.querySelector(".notifications");
let k=0;
content[1].addEventListener("click",()=>{
    k++;
    if(k%2==1) message.classList.remove("hide");
    if(k%2==0) message.classList.add("hide");
});