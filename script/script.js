function calcBmi() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi = (weight / height**2) * 10000;

    document.getElementById('answer').value = bmi.toFixed(2)

    if (bmi <=18.4) {
        document.getElementById('answer').value = bmi.toFixed(2) + ' Underweight';
    }else if (bmi <=24.9 && bmi >=18.5 ) {
        document.getElementById('answer').value = bmi.toFixed(2) +' Healthy';
    }else if(bmi <=39.9 && bmi >=25.0) {
        document.getElementById('answer').value = bmi.toFixed(2) +' Overweight'
    }else if (bmi >=40.0) {
        document.getElementById('answer').value = bmi.toFixed(2) +' Obese'
    }    
        
    }
    
   



