
function verificarFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoDiv.textContent = "Por favor, insira um número válido.";
        return;
    }

    let fibSeq = [0, 1];
    let nextValue = 0;

    while (nextValue <= numero) {
        nextValue = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(nextValue);
    }

    if (fibSeq.includes(numero)) {
        resultadoDiv.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        resultadoDiv.textContent = `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}
