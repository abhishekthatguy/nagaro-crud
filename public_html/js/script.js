$(document).ready(function(){

  $(".deleteAction").click(function(){
    $("#conatiner4").hide();
  });
    $("#hideNewActionArea").click(function(){

        $("#newActionArea").fadeOut(400);
        $("#showPannel").show();
    });
     $("#showPannel").click(function(){
   
        $("#newActionArea").fadeIn("slow");
         $(this).hide();
    });
$('select[name="selectStatus"]').change(function(){

    if ($(this).val() == "done"){
        $("#confirmOverlay").show();
     }        
});
     $("#confirmButtons").click(function(){
    
        $("#confirmOverlay").hide();
    });
    $('#save').on('click', function(event) {
    event.preventDefault(); 
    var url = $(this).data('target');
    $("#loader").show();
        window.setTimeout(function(){
    
    location.replace(url);
        },2000);
   
});
    $("#item".change(function()){
                      debugger;
                      $("#selectStatus").show();
                      
                      });

});
