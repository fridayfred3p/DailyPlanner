$(document).ready(function(){
    // group all  our code to run when DOM is ready
        var rowArr = $(".time-block");
        //Display current hour
        var displayHour = moment().format("dddd MMM YYYY hmma");
        $("#currentDay").text(displayHour);
        // console.log(rowArr);
        var currentHour = moment().format('HH');
        //console.log(currentHour);
        rowArr.each(function() {
             //console.log(this.innerText)
             //console.log($(this).data("hour"))
            var thisHour = parseInt($(this).data("hour"));
            
            if (thisHour == currentHour ) {
                $(".time-block").css(".present");
            } else if (thisHour < currentHour) {
                $(".time-block").css(".past");
            } else if (thisHour > currentHour) {
                $(".time-block").css(".future");
            }
            
        });
        //Saving items in the text box
        $("button .fa-save").click(function(event) {
            console.log(event);
            for (var i = 9; i <18; i++) {
                var textInput = $(".text" + i + "Input").val(); 
               // console.log(".text" + i + "Input");
               // console.log(textInput);
               if (textInput.length > 0) {
                   localStorage.setItem(".text" + i + "Input", textInput);
               }          

                //$(".text" + i + "Input").text(textInput);
               // $(".text" + i + "Input").append(textInput);
            };
        });       

        //Displaying items in text box
        for (var i = 9; i <18; i++) {
            var textDisplay = localStorage.getItem(".text" + i + "Input");
            $(".text" + i + "Input").val(textDisplay);
        }
        
        
            
        

});