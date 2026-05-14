// Primeiro passo: pegar todos os elementos do HTML que a gente vai precisar manipular
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const imcInput = document.getElementById('imc');
const imcZone = document.getElementById('imcZone');
const btn = document.getElementById('init-btn');
const startSection = document.getElementById('start-section');
const formsBox = document.getElementById('inputs-box');

// Troca de tela rápida: esconde a área do botão inicial e mostra o formulário
function showForms() {
    formsBox.style.display = 'block';
    startSection.style.display = 'none'; 
}

// Filtro de segurança: barra dados absurdos (ex: peso negativo ou vazio) antes de tentar calcular
function isValid(weight, height) {
    if (!weight || !height || weight <= 0 || height <= 0 || weight > 500 || height > 2.5) {
        return false;
    }
    return true;
}

// O coração da aplicação: calcula a parada toda e já joga na tela
function calculateAndDisplayImc() {
    const weightValue = parseFloat(weightInput.value);
    const heightValue = parseFloat(heightInput.value);

    // Se o usuário apagou tudo ou digitou abobrinha, a gente limpa o resultado e para por aqui
    if (!isValid(weightValue, heightValue)) {
        imcInput.value = '';
        imcZone.textContent = ''; 
        return; 
    }

    // Matemática básica do IMC
    const imcResult = weightValue / (heightValue * heightValue);
    
    // Mostra no input travado com só 2 casas depois da vírgula
    imcInput.value = imcResult.toFixed(2);

    // Define o texto e brinca com as cores pra dar um contexto melhor pro usuário (UX)
    if (imcResult < 18.5) {
        imcZone.textContent = 'Abaixo do peso';
        imcZone.style.color = '#eab308'; // Avisa em amarelo
    } else if (imcResult >= 18.5 && imcResult < 24.9) {
        imcZone.textContent = 'Peso normal';
        imcZone.style.color = '#22c55e'; // Verde pra indicar que tá tudo certo
    } else if (imcResult >= 25 && imcResult < 29.9) {
        imcZone.textContent = 'Sobrepeso';
        imcZone.style.color = '#f97316'; // Laranja pra alertar
    } else {
        imcZone.textContent = 'Obesidade';
        imcZone.style.color = '#ef4444'; // Vermelho de perigo
    }
}

// Gatilhos (Event Listeners)
btn.addEventListener('click', showForms);

// Calcula em tempo real enquanto o cara tá digitando. Bem mais dinâmico que esperar clicar num botão!
weightInput.addEventListener('input', calculateAndDisplayImc);
heightInput.addEventListener('input', calculateAndDisplayImc);