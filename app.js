
var i=0;
document.querySelector("button").addEventListener("click",
function(){
    i=Math.floor((Math.random()*10)+1);
    let newbox=`box${i}`;
    let newcolor=`${i}${i}${i}`;
    console.log(newcolor);
    let colorcode=Number(newcolor);
    console.log(newbox);
    console.log(colorcode)

    symbols = "0123456789ABCDEF";

    color ="#";

    for(var j=0;j<6;j++){

    color = color + symbols[Math.floor(Math.random() * 16)];

    }


   document.getElementById(`box${i}`).style.backgroundColor=color;
   
})