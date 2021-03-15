let changed = false;
let first = true;
let changeHTML = document.getElementById("changeHTML");
let changeCSS = document.getElementById("changeCSS");
let submitText = document.getElementById("submitText");
let lowSlider = document.getElementById("rangemaker-low");
let highSlider = document.getElementById("rangemaker-high");
let lowSliderText = document.getElementById("low-number");
let highSliderText = document.getElementById("high-number");
let rangeSubmitter = document.getElementById("submitRange");
let high = Number(highSlider.value);
let low = Number(lowSlider.value);

changeHTML.onclick = changeElement;
changeCSS.onclick = changeStyle;
submitText.onclick = textKeeper;

lowSliderText.innerHTML = lowSlider.value;
highSliderText.innerHTML = highSlider.value;

lowSlider.oninput = function(){
    lowSliderText.innerHTML = this.value;  
    low = Number(this.value);   
}
highSlider.oninput = function(){
    highSliderText.innerHTML = this.value;
    high = Number(this.value);
}
rangeSubmitter.onclick = function() {
    let range = high-low;
    let randomNumber = Math.floor(Math.random() * range); 
    let finalNumber = randomNumber+low;     
    document.getElementById("there").innerHTML = finalNumber + "<br>";
    makeCircles(finalNumber);
}



function changeElement(){
    var textChange = document.getElementById("changeMe");
    
    if(!changed){
        textChange.innerHTML = "Oh boy, not that one, oh shoot... oh darn heck. Oh ... no I'm fine.";
        changed = true;
    }else{
        textChange.innerHTML = "Maybe you should touch them.";
        changed = false;
    }

}

function changeStyle(){
    var randomColor =  Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function textKeeper(){

    var text = document.getElementById("randomText").value;
    var message = document.getElementById("here");
    
    try
    {
        if(text == "") throw "Please Enter Something"; 
        if (first == true)   {
            message.innerHTML = `<strong>You have entered permanent text on the page. I hope you are happy.</strong><br>`;
            first = false;
            message.innerHTML += text + "<br>";
        } else {
            message.innerHTML += text + "<br>";
        }      
    }
    catch(err){
        message.innerHTML = err;
    } 
    
}

function makeCircles(num){
    var div = document.createElement("div");
    
    div.style.backgroundColor = "red";
    div.style.width = "15px";
    div.style.height = "15px";
    div.style.margin = "2px";
    div.style.float = "left";
    div.style.borderRadius ="50%";

    for(var i = 0; i < num ; i++){
        document.getElementById("there").append(div.cloneNode(true));
    }
}
