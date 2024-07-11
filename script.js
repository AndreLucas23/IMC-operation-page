window.onload = function (weightId, heightId) {
    // Criando a função de verificação dos valores de peso e altura inseridos
    function checkInputs(weightId, heightId) {
        weightValue = weightId.value;
        heightValue = heightId.value;

        if (
            // Valores nulos ou negativos
            ((weightValue <= 0) || (heightValue <= 0)) ||
            // Valores irrealmente grandes
            ((weightValue > 500) || (heightValue > 2.5))
        ) {
            canCalculate = false;
        }
    }

    // Criação da função de cálculo e exibição do resultado e atribuição da zona de IMC
    function calculateImc(weightId, heightId) {
        if ((canCalculate === true) || (firstTime === true)) {
            firstTime = false
            weightValue = weightId.value;
            heightValue = heightId.value;
        
            imcResult = parseFloat(weightValue) / (parseFloat(heightValue) * parseFloat(heightValue));
            document.getElementById('imc').value = imcResult.toFixed(2);
        
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

    // Declarações das variáveis
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const btn = document.getElementById('init-btn');
    let imcResult;
    let zoneText;
    let weightValue;
    let heightValue;
    let canCalculate = true;
    let firstTime = true;

    // Aplicação da função de limpar o formulário ao clique
    for (let tag of document.getElementsByTagName('input')) {
        tag.addEventListener('click', function () {
            tag.value = '';
            document.getElementById('imcZone').textContent = '';
        })
    }

    // Aplicação das funções de cálculo de resultado e zona de IMC e sua exibição
    weightInput.addEventListener('focusout', function () {
        checkInputs(weightInput, heightInput);
        calculateImc(weightInput, heightInput);
        document.getElementById('imcZone').textContent = zoneText;
        canCalculate = true
    })

    heightInput.addEventListener('focusout', function () {
        checkInputs(weightInput, heightInput);
        calculateImc(weightInput, heightInput);
        document.getElementById('imcZone').textContent = zoneText;
        canCalculate = true
    })

    // Aplicação da função de exibição dos campos de formulário após o clique no botão
    btn.addEventListener('click', function () {
        document.getElementById('inputs-box').style.display = 'flex';
        btn.style.display = 'none';
    })
}
