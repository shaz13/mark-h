$(document).ready(function()
{
  var count=0;
  var rel_sheet;
  var scripts;
  var exp_data=
  "<html>" +
  "<head>" +

  "</head>" +
  "</html>";

  $(document).on("click",".mdl-checkbox__ripple-container.mdl-js-ripple-effect.mdl-ripple--center", function()
  {
      foo = $(this).parents().eq(2).children().text();
      alert(foo);


        if(foo==="Animation CSS1098 KB" && count===0)
          {
              var style="https://fonts.googleapis.com/icon?family=Material+Icons";
              alert(style);count++;
              alert(count);
alert(exp_data);

          }
       else alert('Code well');



  });

$("#export").click( function()
      {
      alert('Exporting');
      var text = $("#descprt").val();
      var filename = $("#name").val();
      var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, filename+".txt");
      });





});
