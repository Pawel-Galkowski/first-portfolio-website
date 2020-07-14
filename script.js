$(document).ready(function() {
  $("html").on("submit","#contact_form",function(e){
    e.preventDefault();
    $("#send_form_status").html('').hide();
    var data=$("#contact_form").serialize();
    $.post("/send_form.php",data,function(res){
      $("#send_form_status").html(res.msg).show();
      if(res.status==1){ 
        $("#contact_form")[0].reset();
      } 
    });
  });
});


function myMap() {
  var myCenter = new google.maps.LatLng(51.1078852, 17.03853760000004);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
      center: myCenter,
      zoom: 8
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
      position: myCenter
  });
  marker.setMap(map);
}