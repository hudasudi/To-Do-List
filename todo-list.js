const inputbox = document.getElementById("input-text");
const list = document.getElementById("list-con");

function addTask(){
  if(inputbox.value === ''){
    alert("You need to enter something!");
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    list.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  saveDatas()
}

list.addEventListener("click", function(e){
  if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
    saveDatas()
  }else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    saveDatas()
  }
},false);

function saveDatas(){
  localStorage.setItem("datas",list.innerHTML);
}
function showTask(){
  list.innerHTML = localStorage.getItem("datas");
}
showTask();