$(document).ready(function()
{

  var link_rel="";
  var link_rel2="";
  var link_rel3="";
  var clc1=0;
  var clc2=0;
  var clc3=0;

  $(document).on("click",".mdl-checkbox__ripple-container.mdl-js-ripple-effect.mdl-ripple--center", function()
  {
      foo = $(this).parents().eq(2).children().text();


      if(foo==="Animation CSS3.5.2" && clc1===0)
       {
         clc1=1;

         link_rel="\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\">";

       }
       else {
         link_rel="";
         clc1=0;
       }

      if(foo==="Materialize CSS0.97.8" && clc2===0)
       {

      clc2=1;

         link_rel2="\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css\">"+
"\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js\"></script>";

       }
       else {
         link_rel2="";
         clc2=0;
       }


               if(foo==="Material Design Lite1.3.0" && clc3===0)
                 {

                  clc3=1;

                     link_rel3="\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">" +
                     "\n<link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.deep_purple-indigo.min.css\" />" +
                     "\n<script defer src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script> " +
                     "\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js\"></script>";

           }
           else {
             link_rel3="";
             clc3=0;
           }



  });



  $("#preview").click( function(){
    var pro_name=$('#name').val();
    var author=$('#author').val();
    var descrip=$('#descprt').val();
    var cdn=$('#custcdn').val();

    var exp_data="<xmp><html>" +
    "\n<head>" +
    "\n<title>"+pro_name+"</title>" +
    "\n<meta charset=\"UTF-8\">" +
    "\n<meta name=\"description\" content=\"" +descrip+   "\">" +
    "\n<meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\">"+
    "\n<meta name=\"author\" content=\""+author+"\">" +link_rel+ link_rel2 +  link_rel3+ "\n" +cdn+
    "\n<body>" +
    "\n</body>" +
    "\n</html></xmp>";

    $('.export_code').html(exp_data);


  });

$("#export").click( function()
      {
        var pro_name=$('#name').val();
        var author=$('#author').val();
        var descrip=$('#descprt').val();
        var cdn=$('#custcdn').val();
        var exp_data="<html>" +
        "\n<head>" +
        "\n<title>"+pro_name+"</title>" +
        "\n<meta charset=\"UTF-8\">" +
        "\n<meta name=\"description\" content=\"" +descrip+   "\">" +
        "\n<meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\">"+
        "\n<meta name=\"author\" content=\""+author+"\">" +link_rel+ link_rel2 +  link_rel3+ "\n" +cdn+
        "\n<body>" +
        "<p>Marh H has deployed an HTML. Add your body here</p>" +
        "\n</body>" +
        "\n</html>";
      var text = $("#custcdn").val();
      var filename = $("#name").val();
      var blob = new Blob([exp_data]);
      saveAs(blob, filename+".html");
      });





});
