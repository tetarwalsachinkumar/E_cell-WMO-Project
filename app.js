
// for notification message
const content=document.querySelectorAll(".keywords a");
const message=document.querySelector(".notifications");
let k=0;
content[1].addEventListener("click",()=>{
    k++;
    if(k%2==1) message.classList.remove("hide");
    if(k%2==0) message.classList.add("hide");
});


// adding date divs
const dates=document.querySelector(".dates");
for(let i=1;i<=35;i++){
    let datebox=document.createElement("div");
    datebox.className="date";
    if(i<=3) {datebox.innerText=""; datebox.style.backgroundColor="#ffcdb2";}
    else if (i>3 && i<=34) datebox.innerText=i-3;
    else{ datebox.innerText=""; datebox.style.backgroundColor="#ffcdb2";}
    dates.appendChild(datebox);
}


// giving functionality to (work)status button
const workstatus=document.querySelectorAll(".status");
workstatus.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.innerText==="Done"){ btn.innerText="Pending"; btn.style.backgroundColor="red";}
    else { btn.innerText="Done";btn.style.backgroundColor="green";}
    })
    if(btn.innerText==="Done") btn.style.backgroundColor="green";
    else btn.style.backgroundColor="red";
});

// giving fuctonality to add task button
const addtaskbtn=document.querySelector(".addtask");
const newtaskdiv=document.querySelector(".newwork");
addtaskbtn.addEventListener("click",()=>{
    newtaskdiv.classList.remove("unseen");
});