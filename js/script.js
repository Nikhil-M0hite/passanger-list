let count =0;
let countEl =document.getElementById("count-el");
let saveMessage = document.getElementById("save-message");


function increment(){
   count+=1;
   countEl.textContent =count;
}
function save(){
    saveMessage.textContent +=count + " -";
    countEl.textContent=0;
    count=0;
}