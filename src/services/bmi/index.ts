interface BMIResult {
  bmi: number;
  category: string;
}

function calculateBMI(
  gender: string,
  weight: number,
  age: number,
  height: number
): BMIResult {
  // Convert height from centimeters to meters

  // Calculate BMI
  const bmi: number = (weight / height / height) * 10000;

  const roundedBMI: number = Number(bmi.toFixed(2));

  // Determine the BMI category based on gender and age
  let category: string;
  if (gender.toLowerCase() === "male") {
    if (age < 18) {
      category =
        "BMI interpretation is not available for males under 18 years old.";
    } else {
      if (roundedBMI < 18.5) {
        category = "Underweight";
      } else if (roundedBMI >= 18.5 && bmi < 25) {
        category = "Normal";
      } else if (roundedBMI >= 25 && bmi < 30) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
    }
  } else if (gender.toLowerCase() === "female") {
    if (age < 18) {
      category =
        "BMI interpretation is not available for females under 18 years old.";
    } else {
      if (roundedBMI < 18.5) {
        category = "Underweight";
      } else if (roundedBMI >= 18.5 && bmi < 24) {
        category = "Normal weight";
      } else if (roundedBMI >= 24 && bmi < 30) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
    }
  } else {
    return {
      bmi: -1,
      category: "Invalid gender. Please provide 'male' or 'female'.",
    };
  }

  return { bmi: roundedBMI, category };
}

export default calculateBMI;
