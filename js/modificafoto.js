/*var plato = document.getElementById("imagen");
plato.style.width="1000px";*/

window.onload=function()
{
   
   var plato = document.getElementById("imagen");
    
        plato.onclick = function()
        {
           
            plato.style.width="600px";
            plato.style.height="500px";
        }
    
    
       plato.ondblclick = function()
        {
           
            plato.style.width="300px";
            plato.style.height="200px";
        }

}