'use strict'
 
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
   document.body.classList.toggle('light-theme')

var className = document.body.className;
if(className == "light-theme")  { 
    this.textContent = "Dark";  
} 

else {
    this.textContent = "light";
 }

 
console.log('current class name' + className)

});


