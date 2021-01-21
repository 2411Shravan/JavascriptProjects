



function calculateBmi(){
   const weight = document.bmiForm.weight.value
   const height = document.bmiForm.height.value
    if(weight > 0 && height >0){
        var bodymassindex = weight/(height/100*height/100);
        document.bmiForm.bmi.value = bodymassindex;
    }

    if(bodymassindex < 18.5){
        document.bmiForm.course.value = "Underweight";
    }
    else if(bodymassindex > 18.5 && bodymassindex < 25){
        document.bmiForm.course.value = "Healthy";
    }
    else if(bodymassindex > 25 && bodymassindex < 30){
        document.bmiForm.course.value = "Overweight";
    }
    else if(bodymassindex > 30 && bodymassindex < 50){
        document.bmiForm.course.value = "Obese Level 1";
    }
    else if(bodymassindex > 50){
        document.bmiForm.course.value = "Obese Level 1";
    }

    else{
        alert("Please fill the area with the correct requisites.")
    }


    
}



