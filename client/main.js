const title = document.createElement('div');
title.innerHTML = 'Light Switch';
title.id = "title"
document.body.appendChild(title);

const button = document.createElement('button')
button.textContent = " On/Off ";
button.id = "switch"
document.body.appendChild(button);

const counter = document.createElement('div');
counter.innerHTML = 'You clicked the switch <button id ="timesClicked"> 0 </button> times';
document.body.appendChild(counter);


let count = 0;

const counterbutton = document.getElementById("timesClicked")



console.log( "Iamdocumentbodycoloroutside" + document.body.style.backgroundColor)
console.log("Iamwindowcomputedcoloroutside " + window.getComputedStyle(document.body).backgroundColor)

button.addEventListener("click", function(){
    const  bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
    count ++;
    console.log(count);
    counterbutton.textContent = count;
    if(bodyBackgroundColor=== 'rgba(0, 0, 0, 0)' || bodyBackgroundColor === 'rgb(240, 240, 240)' ){
        document.body.style.backgroundColor = 'black'
        title.style.color = 'white'
        counter.style.color ='white'     
    }else{
        document.body.style.backgroundColor = 'white';
        title.style.color ="black"
        counter.style.color ='black'
    }
    console.log( "Iamdocumentbodycolor" + document.body.style.backgroundColor)
    console.log("Iamwindowcomputedcolor " + window.getComputedStyle(document.body).backgroundColor)
    
})



