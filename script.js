$(document).ready(function()
{
  var count=0;
  var link_rel="";

  $(document).on("click",".mdl-checkbox__ripple-container.mdl-js-ripple-effect.mdl-ripple--center", function()
  {
      foo = $(this).parents().eq(2).children().text();
      alert(foo);



      if(foo==="Animation CSS3.5.2")
       {
         count++;
         alert(count);
         link_rel="\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\">";
         alert(link_rel);
       }
      if(foo==="Materialize CSS0.97.8")
       {
         count++;
         alert(count);
         link_rel="\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css\">"+
"\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js\"></script>";
         alert(link_rel);
       }

               if(foo==="Material Design Lite1.3.0" )
                 {

                     count++;
                     alert(count);
                     link_rel="\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">" +
                     "\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.deep_purple-indigo.min.css\" />" +
                     "\n<script defer src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script> " +
                     "\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js\"></script>";
                     alert(link_rel);
           }


  });



  $("#preview").click( function(){
    var pro_name=$('#name').val();
    var author=$('#author').val();
    var descrip=$('#descprt').val();
    var exp_data="<xmp><html>" +
    "\n<head>" +
    "\n<title>"+pro_name+"</title>" +
    "\n<meta charset=\"UTF-8\">" +
    "\n<meta name=\"description\" content=\"" +descrip+   "\">" +
    "\n<meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\">"+
    "\n<meta name=\"author\" content=\""+author+"\">" +link_rel+
    "\n</html></xmp>";

    $('.export_code').html(exp_data);


  });

$("#export").click( function()
      {
        var pro_name=$('#name').val();
        var author=$('#author').val();
        var descrip=$('#descprt').val();
        var exp_data="<xmp><html>" +
        "\n<head>" +
        "\n<title>"+pro_name+"</title>" +
        "\n<meta charset=\"UTF-8\">" +
        "\n<meta name=\"description\" content=\"" +descrip+   "\">" +
        "\n<meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\">"+
        "\n<meta name=\"author\" content=\""+author+"\">" +link_rel+
        "\n</html></xmp>";
      var text = $("#custcdn").val();
      var filename = $("#name").val();
      var blob = new Blob([exp_data]);
      saveAs(blob, filename+".html");
      });





});
