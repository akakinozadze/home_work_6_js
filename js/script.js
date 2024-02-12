
const Nav = document.getElementById("Nav1");
const Burger = document.getElementById("BurgerBar");
const Header1 = document.getElementById("Header");
Burger.addEventListener("click",function(){
    Burger.classList.toggle("NewBurger");
    Nav.classList.toggle("NewNav");
    Header1.classList.toggle("NewHeader");
})













"user strict"
const inputElement = document.getElementById("input1");
const addbatton = document.querySelector(".btn");
const ulItem = document.querySelector(".ul-list");
const buttonDelete = document.getElementById("button-delete");
const Form = document.getElementById("forM");

Form.addEventListener("submit",function(e){
    e.preventDefault();
    const valueInpuT = inputElement.value;
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete this item";
    deleteBtn.addEventListener("click",function(){
        li.remove();
    })
    li.textContent = valueInpuT ;
    li.appendChild(deleteBtn);
   
    ulItem.appendChild(li);
    inputElement.value = " ";
})
buttonDelete.addEventListener("click",function(){
    ulItem.innerHTML = " ";
})
//! წაშლილ li  ებზე როგორ ვიმოქმედო css  დან ?