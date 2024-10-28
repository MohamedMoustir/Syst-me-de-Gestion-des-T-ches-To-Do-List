


const header = document.querySelector("header");

// function Open mun
let navbar = document.getElementById("navbar-hamburger")
console.log(navbar);

function OpenMnue() {
  navbar.classList.toggle("hidden");
}

// function Open cards Add Tasks and add style in header
let crud_modal = document.getElementById("crud-modal") 
function openCardsTasks() {
    crud_modal.classList.toggle("hidden");
    header.classList.toggle('blur-sm');
    
}
// function close cards add tasks and remove style
function closeCardsTasks(){
    crud_modal.classList.toggle("hidden");
    header.classList.toggle('blur-sm');


}


// get data in html
let description = document.getElementById("description");
let Titer = document.getElementById("Titer")
let priorite = document.getElementById("priorite")
let Status = document.getElementById("Status")
let date_limite = document.getElementById("date_limite")
const addTasks =document.getElementById("addTasks")