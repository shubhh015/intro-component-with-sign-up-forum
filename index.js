function validate() {
    
     var first = $("#first-name").val();
     var last = $("#last-name").val();
     var email = $("#email").val();
     var pass= $("#pass").val().length;
     var pattern1 = /^[a-zA-Z]*$/;
     var pattern2= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if( first === ""){
        $("#error1").css('display', 'block');
        $("#first-name").css('border','2px solid hsl(0, 100%, 74%)');
          return false;
    }
    else if(!pattern1.test(first)){
            $("#al1").css('display', 'block');
            $("#error1").css('display', 'block');
            $("#first-name").css('border','2px solid hsl(0, 100%, 74%)');
            return false;
    }

    if( last === ""){
        $("#error2").css('display', 'block');
        $("#last-name").css('border','2px solid hsl(0, 100%, 74%)');
        return false;
    }
    else if(!pattern1.test(last)){
          $("#al2").css('display', 'block');
          $("#error2").css('display', 'block');
          $("#last-name").css('border','2px solid hsl(0, 100%, 74%)');
          return false;
    }

   if( email === ""){
    $("#error3").css('display', 'block');
    $("#email").css('border','2px solid hsl(0, 100%, 74%)');
        return false;
    }
    else if(!pattern2.test(email)){
          $("#al3").css('display', 'block');
          $("#error3").css('display', 'block');
          $("#email").css('border','2px solid hsl(0, 100%, 74%)');
          return false;
    }
    
   if(pass === 0){
        $("#al4").css('display', 'block');
        $("#error4").css('display', 'block');
        $("#pass").css('border','2px solid hsl(0, 100%, 74%)');
        return false;
   }

}