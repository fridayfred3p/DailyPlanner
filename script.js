$(document).ready(function(){
    // group all  our code to run when DOM is ready
        var rowArr = $(".time-block");
        // console.log(rowArr);
        var currentHour = 10; // moment().format('HH');
        rowArr.each(function() {
            // console.log(this.innerText)
            // console.log($(this).data("hour"))
            var thisHour = parseInt($(this).data("hour"));
            if (thisHour == currentHour ) {
                console.log("this row is present " + $(this).data("hour"))
            } else if (thisHour < currentHour) {
                console.log("this row is past " + $(this).data("hour"))
            } else if (thisHour > currentHour) {
                console.log("this row is future " + $(this).data("hour"))
            }
        })
});