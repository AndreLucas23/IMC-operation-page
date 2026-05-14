// As funções puras ficam separadas pra não misturar com os logs da tela
function isValid(weight, height) {
    // Segura os bugs: não deixa passar nada vazio, zerado ou fora da realidade
    if (!weight || !height || weight <= 0 || height <= 0 || weight > 500 || height > 2.5) {
        return false;
    }
    return true;
}

function calculateImc(weight, height) {
    // Se a validação barrar, já joga a mensagem de erro e aborta a missão
    if (!isValid(weight, height)) {
        return [null, 'Por favor, digite valores válidos'];
    }

    const imcResult = weight / (height * height);
    const imcFormatted = imcResult.toFixed(2);

    // Retorna as faixas direto pra evitar um milhão de "else if"
    if (imcResult < 18.5) return [imcFormatted, 'Faixa de IMC: Abaixo do peso'];
    if (imcResult >= 18.5 && imcResult < 24.9) return [imcFormatted, 'Faixa de IMC: Peso normal'];
    if (imcResult >= 25 && imcResult < 29.9) return [imcFormatted, 'Faixa de IMC: Sobrepeso'];
    
    return [imcFormatted, 'Faixa de IMC: Obesidade'];
}

// --- BATERIA DE TESTES AUTOMATIZADOS ---

// Nossa listinha de testes. Se um dia precisarmos testar um caso novo, é só espetar um objeto a mais aqui.
const testCases = [
    { id: 1, weight: 50, height: 1.70, type: "Abaixo do peso" },
    { id: 2, weight: 60, height: 1.60, type: "Peso normal" },
    { id: 3, weight: 100, height: 1.90, type: "Sobrepeso" },
    { id: 4, weight: 110, height: 1.80, type: "Obesidade" },
    { id: 5, weight: 0, height: 0, type: "Valores nulos (Deve barrar)" },
    { id: 6, weight: -10, height: -1, type: "Valores negativos (Deve barrar)" },
    { id: 7, weight: 1000, height: 3, type: "Valores irreais (Deve barrar)" }
];

console.log("=== INICIANDO BATERIA DE TESTES ===\n");

// Passa o trator em cima do array testando um por um automaticamente
testCases.forEach(test => {
    // Extrai o cálculo numa paulada só e guarda em variáveis separadas
    const [imc, message] = calculateImc(test.weight, test.height);
    
    // Imprime tudo bonitinho usando template literals pra facilitar a leitura no console
    console.log(`Teste ${test.id} - Cenário: ${test.type}`);
    console.log(`Dados Inseridos: Peso = ${test.weight}kg | Altura = ${test.height}m`);
    
    if (imc !== null) {
        console.log(`Resultado OK: IMC cravou em ${imc} -> ${message}`);
    } else {
        console.log(`Bloqueado pelo sistema: ${message}`);
    }
    console.log("---------------------------------------");
});
