var option1 = document.getElementById('elementId')
var option2= document.getElementById('elementId2')



/// Set the option value clicked in INNER HTML
var optionChosen= document.getElementById('value_chosen')
function SetInnerHTML(option){
  optionChosen.innerHTML = option + " was chosen"
}




/// Option 1
option1.onclick = function(){
 
   option2.removeAttribute("disabled");
  
  option1.setAttribute("disabled", false);
  
  SetInnerHTML("Option 1")
}



/// Option 2
option2.onclick = function(){
     
  
option2.setAttribute("disabled", false);
  
  option1.removeAttribute("disabled");
  
  SetInnerHTML("Option 2")
}
