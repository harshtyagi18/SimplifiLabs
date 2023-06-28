function convertTemp(temp, fromUnit, toUnit) {
    let convertedtemp = 0;
    switch (fromUnit) {
      case "C":
        if (toUnit === "F") {
          convertedtemp = temp * 9 / 5 + 32;
        } else if (toUnit === "K") {
          convertedtemp = temp + 273.15;
        }
        break;
      case "F":
        if (toUnit === "C") {
          convertedtemp = (temp - 32) * 5 / 9;
        } else if (toUnit === "K") {
          convertedtemp = (temp - 32) * 5 / 9 + 273.15;
        }
        break;
      case "K":
        if (toUnit === "C") {
          convertedtemp = temp - 273.15;
        } else if (toUnit === "F") {
          convertedtemp = (temp - 273.15) * 9 / 5 + 32;
        }
        break;
    }
  
    return convertedtemp;
  }
  
  let temp = 20;
  let fromUnit = "C";
  let toUnit = "F";
  let convertedtemp = convertTemp(temp, fromUnit, toUnit);
  console.log(convertedtemp);
  
