$(document).ready(function() {
    $.ajaxSetup({ cache: false });
    $("button").on("click", function(){
        $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
         $("#get-text").html(JSON.stringify(json.quote
         ));
            $("#author").html(JSON.stringify(json.author
            ));

            })


        });

});



