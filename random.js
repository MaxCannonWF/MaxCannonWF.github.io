var changed = false;
var first = true;

window.onload = function(){
    var changeHTML = document.getElementById("changeHTML");
    var changeCSS = document.getElementById("changeCSS");
    var submitText = document.getElementById("submitText");

    changeHTML.onclick = changeElement;
    changeCSS.onclick = changeStyle;
    submitText.onclick = textKeeper;
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