$(document).ready(function () {
    var api = "https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json";


    $.ajaxSetup({cache: false});
    $("button").on("click", function () {
        $.getJSON(api, function (json) {
            var randomApi = Math.floor(Math.random()*json.length+1);
            $(".get-text").html('"'+ json[randomApi].quoteText +'"');
            $(".author").html(json[randomApi].quoteAuthor);

                })
    });

});









