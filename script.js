var task= JSON.parse(localStorage.getItem("tasks"))

if(task==null || task==undefined || task==[]){var Task=[];var id=0;
localStorage.setItem("tasks", JSON.stringify(Task));
task= JSON.parse(localStorage.getItem("tasks"))}

else{ Task= JSON.parse(localStorage.getItem("tasks"));
var a=Task.length-1;
id= Task[a].id+1
  }


add=()=>{
  var t= document.querySelector("input").value;
  if(t==null || t== undefined || t=='' ){

    alert("Enter text")
  }
  else{
  console.log(typeof(t) );
  Task.push({msg:t, id:id});
  localStorage.setItem("tasks", JSON.stringify(Task));
  id++;
  diplay();
  
  }

document.querySelector("input").value="";
}
load=()=>{
   
    diplay();
}

 diplay=()=>{
  Task= JSON.parse(localStorage.getItem("tasks"))
    document.getElementById("lc").innerHTML=null

 Task.map((e)=>{  document.getElementById("lc").innerHTML+=` <div class="list flex">   <div class="msg"> ${e.msg} ${e.id} </div>
    <div class="btns flex">
    <div class="btn flex" id="btn1"onclick="remove(${e.id})" >REMOVE</div>
    <div class="btn flex" id="btn2"onclick="edit(${e.id})" >EDIT</div> </div>
    </div>`})
  
}


remove=(i)=>{
console.log(i)
Task=Task.filter(function( obj ) {
  return obj.id !== i;
});
localStorage.setItem("tasks", JSON.stringify(Task));
diplay();

}
 document.onkeyup = (e) => {
   if (e.key == "Enter" || e.key=="NumEnter"){
     add();
   }
  }
  
  edit=(id)=>
  {
    localStorage.setItem("edit",id)
 location.href="edit.html"

  }

l1=()=>{
  id=localStorage.getItem("edit")
  editTask=JSON.parse(localStorage.getItem("tasks"))
  v=editTask.filter(function( obj ) {
    return obj.id == id;
  });
document.getElementById("e1").value=v[0].msg

} 

clearAll=()=>{
  
  document.getElementById("e1").value="";
}
done=()=>{
  id=parseInt( localStorage.getItem("edit"));
  var temp=JSON.parse(localStorage.getItem("tasks"));
    var m=document.getElementById("e1").value;
    var temp2 =temp.filter(function( obj ) {
      return obj.id !== id;
    });
    temp1=[{id:id,msg:m}];
    
    var temp3 =temp1.concat(temp2);
localStorage.setItem("tasks",JSON.stringify(temp3));
location.href="/toDo/";

}