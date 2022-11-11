document.getElementById(myButton).onclick = function (){
   
   const visaBtn = document.getElementById(visaBtn);

   const mastercardBtn = document.getElementById(mastercardBtn);
   
   const verveBtn = document.getElementById(verveBtn);
   
   const paypalBtn = document.getElementById(paypalBtn);
   
   if(visaBtn.checked) {console.log(You are paying with a Visa!);    
   } 
   else if(mastercardBtn.checked) {console.log(You are paying with a Mastercard!);
   }
   
   else if(verveBtn.checked) {console.log(You are paying with a Verve!);
   }
   
   else if(paypalBtn.checked) {console.log(You are paying with a Paypal!);   
   }
   else{
       console.log(You must select a payment method!)
   }
}

