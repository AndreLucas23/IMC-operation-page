window.onload = function () {

    // Criação da função de revelação do formulário e ocultação do botão inicial
    function showForms() {
        document.getElementById('inputs-box').style.display = 'flex';
        btn.style.display = 'none';
    }

    function clearInputs(input) {
        input.value = '';
        document.getElementById('imcZone').textContent = '';        
    }

    // Criando a função de verificação dos valores de peso e altura inseridos
    function checkInputs(weightId, heightId) {
        let weightValue = weightId.value;
        let heightValue = heightId.value;

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

    // Criação da função de cálculo do IMC e atribuição da zona de IMC
    function calculateImc(weightId, heightId) {
        if (firstTime) {
            firstTime = false;
            return [null, ''];
        } else if (checkInputs(weightId, heightId)) {
            let weightValue = weightId.value;
            let heightValue = heightId.value;
        
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

    // Criação da função de exibição dos resultados dos cálculos
    function applyResults() {
        document.getElementById('imcZone').textContent = calculateImc(weightInput, heightInput)[1];
        document.getElementById('imc').value = calculateImc(weightInput, heightInput)[0];
    }

    // Declarações das variáveis
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const btn = document.getElementById('init-btn');
    let firstTime = true;

    // Aplicação da função de limpar o formulário ao clique
    for (let tag of document.getElementsByTagName('input')) {
        tag.addEventListener('click', function () {
            clearInputs(tag);
        })
    }

    // Aplicação das funções de cálculo de resultado e zona de IMC e sua exibição
    weightInput.addEventListener('focusout', function () {
        applyResults();
    })

    heightInput.addEventListener('focusout', function () {
        applyResults();
    })

    // Aplicação da função de exibição dos campos de formulário após o clique no botão
    btn.addEventListener('click', function () {
        showForms();
    })
}
