let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');

// for array 
Array.from(buttons);

// for storing result value 
let result = "";

// evaluating  value 
buttons.forEach((button) =>{
    // event for all buttons 
    button.addEventListener('click' , (e)=>{
        // for equal =
     if(e.target.innerHTML == "="){
result = eval(result);
input.value = result;
     }
    //  for del button 
     else if(e.target.innerHTML == "DEL"){
     result = result.substring(0 , result.length-1);
      input.value = result;
     }
    //  for All clear button 
     else if(e.target.innerHTML == "AC"){
result = "";
 input.value = result;
     }
    //  for all buttons remaining 
     else{
        result+=e.target.innerHTML;
        input.value = result;
     }
    })
})