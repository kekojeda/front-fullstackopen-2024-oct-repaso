const calculateBmi = (altura: number, peso: number): string => {
    const imc = peso / (altura * altura);
  
    if (imc < 16) {
      return "Peso bajo (Delgadez severa)";
    } else if (imc >= 16 && imc < 17) {
      return "Peso bajo (Delgadez moderada)";
    } else if (imc >= 17 && imc < 18.5) {
      return "Peso bajo (Delgadez leve)";
    } else if (imc >= 18.5 && imc < 25) {
      return "Normal";
    } else if (imc >= 25 && imc < 30) {
      return "Peso alto (Sobrepeso)";
    } else if (imc >= 30 && imc < 35) {
      return "Peso alto (Obesidad leve)";
    } else if (imc >= 35 && imc < 40) {
      return "Peso alto (Obesidad media)";
    } else {
      return "Peso alto (Obesidad morbida)";
    }
  };
  
  // Ejemplo de uso
  console.log(calculateBmi(1.8, 72)); // Altura en metros, peso en kg
  