/*global $*/
 $(document).ready(function() {
  console.log("ready");
    $("#getQuote").on('click',function() {
    
    $.ajaxSetup ({cache:false});
    
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {
  //$(".message").append(data[0].content + "<p>— " + data[0].title + "</p>")

        $(".message").html(data[0].content + " - " + data[0].title);
        
        $('#twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + data[0].content + ' — ' + data[0].title);
// }, 'jsonp');
        
    });
    });
});