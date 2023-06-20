// DOM :~ Document Object Modle

// It is a programming interface for HTML and XML documents, representing the structure of a web page as a tree-like model. The DOM allows JavaScript to access, modify, and manipulate the elements and content of a web page dynamically.

// Accessing DOM elements.

const greet = document.getElementById("welcome");
const mybtn = document.getElementById("mybtn");

// modifind Dom elements.
greet.style.color = "red";

// Adding event listener to DOM element

mybtn.addEventListener("click",function(){
    alert("button clickd");
})

// create a Element

 const heading = document.createElement('h1');
 heading.textContent = "Hello this is heading";
 heading.style.color = "yellow";
 heading.className = "heading";
 heading.style.fontSize = "35px";
 document.body.appendChild(heading);
 