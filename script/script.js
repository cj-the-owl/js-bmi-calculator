function calcbmi() {
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)
    let bmi = weight / height**2
    document.getElementById("answer").value = bmi.toFixed(2)

    
}