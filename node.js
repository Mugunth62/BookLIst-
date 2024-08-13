var q=document.querySelector(".addpopup")
var w=document.querySelector(".contain")
var s=document.getElementById("addbut")
var g=document.getElementById("cancel")

s.addEventListener("click",function ch(){
    q.style.display="block";
    w.style.display="block";
})

g.addEventListener("click",function ok(){
    w.style.display="none";
    q.style.display="none";
})

var container=document.querySelector(".container");
var addbook=document.getElementById("add");
var booktitle=document.getElementById("addbooktitle");
var bookauthor=document.getElementById("addbookauthor");
var addshort=document.getElementById("addshort");

addbook.addEventListener("click",function(){
    var div=document.createElement("div");
    div.setAttribute("class","box")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h3>${bookauthor.value}</h3>
    <p>${addshort.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    w.style.display="none";
    q.style.display="none";
})

function del(event){
    event.target.parentElement.remove();
}
