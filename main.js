var atualNumber = '';
var armazenadoNumber = ''; 
var operacaoAtual = ''; 

function addNumber(number) {
    atualNumber += number;
    updateDisplay();
}

function operate(operation) {
    if (atualNumber !== '') {
        operacaoAtual = operation;
        armazenadoNumber = atualNumber;
        atualNumber = '';
        updateDisplay();
    }
}

function clearInput() {
    atualNumber = '';
    armazenadoNumber = '';
    operacaoAtual = '';
    updateDisplay();
}

function calculate() {
    if (atualNumber !== '' && armazenadoNumber !== '') {
        var result;
        switch (operacaoAtual) {
            case '+':
                result = parseFloat(armazenadoNumber) + parseFloat(atualNumber);
                break;
            case '-':
                result = parseFloat(armazenadoNumber) - parseFloat(atualNumber);
                break;
            case '*':
                result = parseFloat(armazenadoNumber) * parseFloat(atualNumber);
                break;
            case '/':
                result = parseFloat(armazenadoNumber) / parseFloat(atualNumber);
                break;
            default:
                return;
        }
        atualNumber = result.toString();
        armazenadoNumber = '';
        operacaoAtual = '';
        updateDisplay();
    }
}
 
function updateDisplay() {
    var display = document.getElementById('caixa');
    display.value = atualNumber;
}
