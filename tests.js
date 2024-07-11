// Criando as mesma função usada das aplicações e aplicando variações para os testes
function checkInputs(weightId, heightId) {
    if (
        // Valores nulos ou negativos
        ((weightId <= 0) || (heightId <= 0)) ||
        // Valores irrealmente grandes
        ((weightId > 500) || (heightId > 2.5))
    ) {
        canCalculate = false;
    }
}

function calculateImc(weightId, heightId) {
    if (canCalculate === true) {
        imcResult = (parseFloat(weightId) / (parseFloat(heightId) * parseFloat(heightId))).toFixed(2);
        // document.getElementById('imc').value = imcResult.toFixed(2);
    
        if (imcResult < 18.5 && imcResult !== 0) {
            zoneText = 'Faixa de IMC: Abaixo do peso';
        } else if (imcResult >= 18.5 && imcResult < 24.9) {
            zoneText = 'Faixa de IMC: Peso normal';
        } else if (imcResult >= 25 && imcResult < 29.9) {
            zoneText = 'Faixa de IMC: Sobrepeso';
        } else if (imcResult >= 30) {
            zoneText = 'Faixa de IMC: Obesidade';
        }
    } else {
        zoneText = 'Por favor, digite valores válidos'
    }
}

// Testes:

// Válidos:

// Peso = 50kg, altura = 1,70m (Abaixo do peso)
canCalculate = true
checkInputs(50, 1.7)
calculateImc(50, 1.7)
console.log('Teste 1: ' + imcResult)
console.log(zoneText)
console.log()

// Peso = 60kg, altura = 1,60m (Peso normal)
checkInputs(60, 1.6)
calculateImc(60, 1.6)
console.log('Teste 2: ' + imcResult)
console.log(zoneText)
console.log()

// Peso = 100kg, altura = 1,90m - (Sobrepeso)
checkInputs(100, 1.9)
calculateImc(100, 1.9)
console.log('Teste 3: ' + imcResult)
console.log(zoneText)
console.log()

// Peso = 110kg, altura = 1,80m (Obesidade)

checkInputs(110, 1.8)
calculateImc(110, 1.8)
console.log('Teste 4: ' + imcResult)
console.log(zoneText)
console.log()

// Inválidos:

// Peso = 0kg, altura = 0m (Valores nulos)
checkInputs(0, 0)
calculateImc(0, 0)
console.log('Teste 5:')
console.log(zoneText)
console.log()

// Peso = -10kg, altura = -1m (Valores negativos)
checkInputs(-10, -1)
calculateImc(-10, -1)
console.log('Teste 6:')
console.log(zoneText)
console.log()

// Peso = 1000kg, altura = 3m (Valores irrealmente grandes)
checkInputs(1000, 3)
calculateImc(1000, 3)
console.log('Teste 7:')
console.log(zoneText)
