// Selecting the popupoverlay, popupbox, and add button
var popupoverlay = document.querySelector(".popupoverlay"); // Corrected class name
var popupbox = document.querySelector(".popupbox");
var addpop = document.querySelector(".add-button")

addpop.addEventListener("click",function(){
    popupoverlay.style.display = "block"; // Shows the overlay
    popupbox.style.display = "block";     // Shows the popup box
});
var cancelbook=document.getElementById("cancel-book")
cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

// function addpop(){
//     popupoverlay.style.display = "block"// Shows the overlay
//     popupbox.style.display = "block"
// }

// function cancel(){
//     popupoverlay.style.display = "none"// Shows the overlay
//     popupbox.style.display = "none"
// }

//next selecting the add book button and book-title , auther name , description

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var addbooktitle=document.getElementById("book-title-input")
var addbookauther=document.getElementById("book-auther-input")
var bookdescription=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book_container")
    div.innerHTML=`<h2>${addbooktitle.value}</h2>
        <h5>${addbookauther.value}</h5>
        <p>${bookdescription.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

function deletebook(event){
    event.target.parentElement.remove()

}