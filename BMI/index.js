var weight, height, measure, bmi, data;

function calculate() {
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;

  heigth = 0.01 * height;
  bmi = (weight / (heigth * heigth)).toFixed(1);
  if (bmi <= 18.5) {
    data = `Your BMI is ${bmi} and You are UnderWeight`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    data = `Your BMI is ${bmi} and You are Healthy`;
  } else if ((bmi) => 25 && bmi <= 29.9) {
    data = `Your BMI is ${bmi} and You are Overweight`;
  } else if (bmi > 30) {
    data = `Your BMI is ${bmi} and You are Obese`;
  }

  if (weight < 1 || height < 1) {
    document.getElementById("results").innerHTML = "Please enter valid Data";
  } else {
    document.getElementById("results").innerHTML = data;
  }
}
