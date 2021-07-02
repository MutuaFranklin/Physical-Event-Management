$(document).ready(function(){
        $("#enquire-form").submit(function(event){
          var name = $("#enquire-form #name").val();
          var number = $("#enquire-form #number").val();
          var email = $("#enquire-form #email").val();
          var nature = $("#enquire-form #nature").val();
          var message = $("#enquire-form #message").val();
    
      
          if (!$("#enquire-form #name").val()){
          }
          else if (!$("#enquire-form #number").val()){
          }
      
          else if (!$("#enquire-form #email").val()){
          }
    
          else if (!$("#enquire-form #nature").val()){
          }
          else if (!$("#enquire-form #message").val()){
         }
          else{
            alert (name + ", Thank you for reaching PEMS. We will be in touch");
          }
    
          var feedback = prompt("What do you want us to improve on?");
          alert (name + ", Thank your feedback");
         
      
      
          return false;
          
        });
      
      });