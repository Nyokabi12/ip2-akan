<script>
     function showName(){

     var sex = document.querySelector('input[name="gender"]:checked').value;
     var dbirth = document.getElementById("dob").value;

     var birthd = dbirth.split(" ");
     var mms = birthd[0];
     var dds = birthd[1];
     var yys = birthd[2];
     var mm = parseInt(mms);
     var dd = parseInt(dds);

     var yearc = yys.split("");
     var cc = yearc[0].concat(yearc[1]);
     var yy = yearc[2].concat(yearc[3]);
     var cc = parseInt(cc);
     var yy = parseInt(yy);
     fd = Math.round( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

     if(!sex){
       alert('No sex was selected. Try again.');
       return false;
     }
     else if(sex === 'Female' && fd === 0){
       alert("Akosua");
     }
     else if(sex === 'Male' && fd === 0){
         alert("Kwasi");
     }
     else if(sex === 'Female' && fd === 1){
       alert("Adwoa");
     }
     else if(sex === 'Male' && fd === 1){
         alert("Kwadwo");
     }
     else if(sex === 'Female' && fd === 2){
       alert("Abenaa");
     }
     else if(sex === 'Male' && fd === 2){
         alert("Kwabena");
     }
     else if(sex === 'Female' && fd === 3){
       alert("Akua");
     }
     else if(sex === 'Male' && fd === 3){
         alert("Kwaku");
     }
     else if(sex === 'Female' && fd === 4){
       alert("Yaa");
     }
     else if(sex === 'Male' && fd === 4){
         alert("Yaw");
     }
     else if(sex === 'Female' && fd === 5){
       alert("Afua");
     }
     else if(sex === 'Male' && fd === 5){
         alert("Kofi");
     }
     else if(sex === 'Female' && fd === 6){
       alert("Ama");
     }
     else if(sex === 'Male' && fd === 6){
         alert("Kwame");
     }else{
         alert("Try Again");
     }


     }

         </script>
Message Input


Message
