
document.getElementById("gross-annual").addEventListener("input", function(){
    validateInputGross() 
})
document.getElementById("extra-income").addEventListener("input", function(){
    validateInputExtra()
})
document.getElementById("deductions").addEventListener("input", function(){
    validateInputDeductions()
})
document.getElementById("age").addEventListener("input", function(){
    toggledisplay()
})
var err = false;

function validateInputGross(){
    var userInput = document.getElementById("gross-annual").value;
    var grossInfo = document.getElementById("gross-info-annual")
    if (isNaN(userInput)) {
        
        grossInfo.style.display = "flex"
        err = true;

    }

    else{

        grossInfo.style.display = "none"
        err = false;
    }
    annualLimitError()
    
}

function validateInputExtra(){
    var userInput = document.getElementById("extra-income").value;
    var grossInfoExtra = document.getElementById("gross-info-extra")
    if (isNaN(userInput)) {
        
        grossInfoExtra.style.display = "flex"
        err = true;
    }
    else{

        grossInfoExtra.style.display = "none"
        err = false;
    }
    
}

function validateInputDeductions(){
    var userInput = document.getElementById("deductions").value;
    var grossInfoExtra = document.getElementById("gross-info-deductions")
    if (isNaN(userInput) ) {
        
        grossInfoExtra.style.display = "flex"
        err = true;
    }
    else{

        grossInfoExtra.style.display = "none"
        err = false;
    }
    
}

function toggledisplay(){
    if(document.getElementById("age").value!= "Select An Option"){
        document.getElementById("age-info").style.display="none"
        err = false;
    }
}



document.getElementById('myForm').addEventListener('submit', function(event) {
    
    var tax=0;
    event.preventDefault(); 
    var gross = parseFloat(document.getElementById("gross-annual").value)
    var extra = parseFloat(document.getElementById("extra-income").value)
    var age = document.getElementById("age").value
    var deductions = parseFloat(document.getElementById("deductions").value)
    var ageInfo = document.getElementById("age-info")
    
    
    var calculatedTax = document.getElementById("calculated-tax")


    var overall = gross+extra-deductions;
    
    var tax=0;
    var income = 0;
   
    // if(gross<0 || extra<0 || deductions<0 || )
    if(age=="Select An Option"){
            ageInfo.style.display="flex"
            err = true;
            return 0
    }

    if(overall<=800000){
         tax=0;
         calculatedTax.innerHTML= 0;

    }
    else if(overall>800000){
        if(age=="low"){
            tax = 0.3*(overall-800000)
            console.log(tax)
            income = overall-tax;
            calculatedTax.innerHTML= income;
            
        }
        else if(age=="mid"){
            tax = 0.4*(overall-800000)
            console.log(tax)
            income = overall-tax;
            calculatedTax.innerHTML= income;
          
        }
        else{
            tax = 0.1*(overall-800000)
            console.log(tax)
            income = overall-tax;
            calculatedTax.innerHTML= income;
           
        }
    }

    
    var preview = document.getElementById("preview")
    if(err){
        preview.style.display = "none";
    }
    else{

    
    preview.style.display = "flex";
    document.getElementById('myForm').style.display="none"
    document.getElementById("close-btn").addEventListener("click",()=>{
        window.location.reload();
    })
}
   
  });
