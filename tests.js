// Criando as mesma função usada das aplicações e aplicando variações para os testes
function checkInputs(weightValue, heightValue) {
    if (
        // Valores nulos ou negativos
        ((weightValue <= 0) || (heightValue <= 0)) ||
        // Valores irrealmente grandes
        ((weightValue > 500) || (heightValue > 2.5))
    ) {
        return false;
    }
return true;
}

function calculateImc(weightValue, heightValue) {
    // if (firstTime) {
    //     firstTime = false
    //     return [null, '']
    if (checkInputs(weightValue, heightValue)) {
        let imcResult = parseFloat(weightValue) / (parseFloat(heightValue) * parseFloat(heightValue));

        if (imcResult < 18.5 && imcResult !== 0) {
            return [imcResult.toFixed(2), 'Faixa de IMC: Abaixo do peso'];
        } else if (imcResult >= 18.5 && imcResult < 24.9) {
            return [imcResult.toFixed(2), 'Faixa de IMC: Peso normal'];
        } else if (imcResult >= 25 && imcResult < 29.9) {
            return [imcResult.toFixed(2), 'Faixa de IMC: Sobrepeso'];
        } else if (imcResult >= 30) {
            return [imcResult.toFixed(2), 'Faixa de IMC: Obesidade'];
        }
    }
    return [null, 'Por favor, digite valores válidos'];
}

// Testes:

// Válidos:

// Peso = 50kg, altura = 1,70m (Abaixo do peso)
console.log('Teste 1: ' + calculateImc(50, 1.7)[0]);
console.log(calculateImc(50, 1.7)[1]);
console.log();

// Peso = 60kg, altura = 1,60m (Peso normal)
console.log('Teste 2: ' + calculateImc(60, 1.6)[0]);
console.log(calculateImc(60, 1.6)[1]);
console.log();

// Peso = 100kg, altura = 1,90m - (Sobrepeso)
console.log('Teste 3: ' + calculateImc(100, 1.9)[0]);
console.log(calculateImc(100, 1.9)[1]);
console.log();

// Peso = 110kg, altura = 1,80m (Obesidade)
console.log('Teste 4: ' + calculateImc(110, 1.8)[0]);
console.log(calculateImc(110, 1.8)[1]);
console.log();

// Inválidos:

// Peso = 0kg, altura = 0m (Valores nulos)
console.log('Teste 5:');
console.log(calculateImc(0, 0)[1]);
console.log();

// Peso = -10kg, altura = -1m (Valores negativos)
console.log('Teste 6:');
console.log(calculateImc(-10, -1)[1]);
console.log();

// Peso = 1000kg, altura = 3m (Valores irrealmente grandes)
console.log('Teste 7:');
console.log(calculateImc(1000, 3)[1]);
