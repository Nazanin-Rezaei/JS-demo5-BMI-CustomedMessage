/* Creat a BMI calculator using javaScripts function.The Body Mass Index (BMI) is a way of estimating the amount of body fat.
the formula is BMI=weight(kg)/ Height^2 (m^2)
write a function that give a customized message as an output according to the BMI value.*/




/* solution */

function bmiCalculator(weight, height){
    var bmi=(weight/(height*height));

   if (bmi<18.5 ){
   return "Your BMI is "+bmi+ ", so you are underweight.";
} else if ( bmi>=18.5 && bmi<24.9 ){
    return "Your BMI is "+bmi+ ", so you have a normal weight.";
}else if ( bmi>=24.9 ){
    return "Your BMI is "+bmi+ ", so you are overweight.";
}
}
