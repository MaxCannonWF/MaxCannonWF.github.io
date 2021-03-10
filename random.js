var changed = false;
var first = true;
//var randomNumber;

window.onload = function(){
    var changeHTML = document.getElementById("changeHTML");
    var changeCSS = document.getElementById("changeCSS");
    var submitText = document.getElementById("submitText");
    var lowSlider = document.getElementById("rangemaker-low");
    var highSlider = document.getElementById("rangemaker-high");
    var lowSliderText = document.getElementById("low-number");
    var highSliderText = document.getElementById("high-number");
    var rangeSubmitter = document.getElementById("submitRange");

    changeHTML.onclick = changeElement;
    changeCSS.onclick = changeStyle;
    submitText.onclick = textKeeper;
   

    lowSliderText.innerHTML = lowSlider.value;
    highSliderText.innerHTML = highSlider.value;
    
    lowSlider.oninput = function(){
        lowSliderText.innerHTML = this.value;  
        lowSlider = this.value;     
    }
    highSlider.oninput = function(){
        highSliderText.innerHTML = this.value;
        highSlider = this.value;
    }
    rangeSubmitter.onclick = function() {
        randomNumber = Math.floor(Math.random() * (highSlider-lowSlider) + lowSlider) ;       
        document.getElementById("there").innerHTML = randomNumber + " (" + lowSlider + ") (" + highSlider + ")<br>";
        makeCircles(randomNumber);
    }
    
    lowSlider = lowSlider.value;
    highSlider = highSlider.value;
}



function changeElement(){
    var textChange = document.getElementById("changeMe");
    
    if(!changed){
        textChange.innerHTML = "Oh boy, not that one, oh shoot... oh darn heck. Oh ... no I'm fine.";
        changed = true;
    } else{
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

    for(var i = 0; i <= num ; i++){
        document.getElementById("there").append(div.cloneNode(true));
    }
}
