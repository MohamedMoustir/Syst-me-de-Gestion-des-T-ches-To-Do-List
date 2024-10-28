





// function Open mun
let navbar = document.getElementById("navbar-hamburger")
console.log(navbar);

function OpenMnue() {
  navbar.classList.toggle("hidden");
}

// function Open cards Add Tasks
let crud_modal = document.getElementById("crud-modal") 
function openCardsTasks() {
    crud_modal.classList.toggle("hidden");
document.getElementsByTagName("nav").classList=("blur-sm");
    
}
function closeCardsTasks(){
    crud_modal.classList.toggle("hidden");

}