var elForm = document.querySelector("#form");
var elList = document.querySelector("#list");
var elAdd = document.querySelector("#addBtn")
var elInput=document.querySelector("#input");
var elItem = document.querySelector(".item");
var eltext = document.querySelector(".item__text");

// elAdd.addEventListener("click", function(){
//     var li=document.createElement("li");
//     li.classList.add("item");
//     var newChek= document.createElement("input");
//     newChek.classList.add("chek");
//     li.appendChild(newChek);
//     var newText = document.createElement("p");
//     newText.classList.add("item__text");
//     newText.textContent=elInput.value;
//     elInput.value='';
//     li.appendChild(newText);
//     var btn=document.createElement("button");
//     btn.classList.add("item__btn");
//     btn.textContent="X";
//     li.appendChild(btn);
//     elList.appendChild(li);
// })




var malumot = ["Olma", "Anor", "Uzum", "Banan", "Olcha", "Uyga boraylik"]
 elAdd.addEventListener("click", function(){
    var sss = elInput.value;
    elInput.value='';
    malumot.push(sss);
    console.log(malumot);
    elList.innerHTML='';

    render(malumot, elList, elItem);
})

function render(array, placeOfRendering, placeOfbtn) {
    for (var i=0; i< malumot.length; i++) {
        var newLi = document.createElement("li");
        newLi.classList.add("item");
        placeOfRendering.appendChild(newLi);
      
          var newBtn= document.createElement("button");
          newBtn.classList.add("item__btn");
          newBtn.textContent="X";
          
          
          var newText = document.createElement("p")
          newText.classList.add("item__text");
          newLi.appendChild(newText);
          newLi.textContent = array[i];
          newLi.appendChild(newBtn);
        
    }
   
    
}


