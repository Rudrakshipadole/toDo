add=()=>{
   

    diplay();
}
diplay=()=>{
    var m=document.querySelector("input").value;
    document.getElementById("lc").innerHTML+=` <div class="list flex">   <div class="msg"> ${m} </div>
    <div class="btns flex">
    <div class="btn flex" id="remove"onclick="remove()" >REMOVE</div>
    <div class="btn flex" id="done"onclick="done()" >DONE</div> </div>
    </div>`
}





