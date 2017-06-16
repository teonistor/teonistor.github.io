/*!
 * Thanks to matteobrusa@github for some code snippets here
 */
 function loadPage(pwd) {

     var hash = pwd;
     hash = Sha1.hash(pwd);
     var url = hash + ".html";

     $.ajax({
         url: url,
         dataType: "html",
         success: function (data) {
             window.location = url;
         },
         error: function (xhr, ajaxOptions, thrownError) {
             $("#password").attr("placeholder", "Nope!");
             $("#password").val("");
             setTimeout(function () {
                 $("#password").attr("placeholder", "Code");
             }, 1500);
         }
     });
 }


 $("#loginbutton").on("click", function () {
     $("#password").focus();
     loadPage($("#password").val());
 });
 $("#password").keypress(function (e) {
     if (e.which == 13) {
         loadPage($("#password").val());
     }
 });

 $("#uselessbutton").on("click", function () {
     alert("Ouch!");
 });

 $("#password").focus();
