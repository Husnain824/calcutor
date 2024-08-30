var input = $("input");
var buttons = $("button");

var string = "";


    buttons.click(function(){
        var buttonText = $(this).text();
        if(buttonText == "="){
            string = eval(input.val());
        } else if(buttonText == "AC") {
            string = "";
        } else if(buttonText == "DEL") {
            string = string.substring(0, string.length-1);
        } else{
            string += $(this).text();
        }
        input.val(string);
    })