const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const weightVal = document.querySelector("#weight-val");
const heightVal = document.querySelector("#height-val");

const categoryElem = document.querySelector("#category");
const result = document.querySelector("#result");

// functions
const bmiCalc = function () {
  console.log("bmi");

  let weightInputValue = weightInput.value;
  let heightInputValue = heightInput.value;
  // show amount of thumb value  
  weightVal.innerHTML = `کیلوگرم ${weightInputValue}`;
  heightVal.innerHTML = `سانتی متر ${heightInputValue}`;
 // calc bmi value
  let bmiValue = (weightInputValue / Math.pow(heightInputValue / 100, 2)).toFixed(1);

  if (bmiValue < 18.5) {
    categoryElem.innerHTML = "کم وزنی 😬😬";
    result.style.color = "#ffc44d";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) { 
    categoryElem.innerHTML = "نرمالی 😍🤩";
    result.style.color = "#0be881";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    categoryElem.innerHTML = "اضافه وزن داری 😥😥";
    result.style.color = "#ff884d";
  } else { 
    categoryElem.innerHTML = "چاقی 😭😭";
    result.style.color = "#ff5e4d";
  }
    // show bmi value
    result.innerHTML = ` << ${bmiValue} >>`;

};

// Events
weightInput.addEventListener("input", bmiCalc);
heightInput.addEventListener("input", bmiCalc);
