// cria referência ao form e aos elementos h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const respMedicamento = document.querySelector("#outMedicamento");
const respPromocao = document.querySelector("#outPromocao");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value; // obtém o nome do medicamento
    const preco = Number(frm.inPreco.value); // obtém o preço do medicamento
    
    // calcula o valor da promoção (remove os centavos do valor total)
    const total = Math.floor(preco * 2);
    
    // exibe as respostas
    respMedicamento.innerText = `Promoção de ${medicamento}`;
    respPromocao.innerText = `Leve 2 por apenas R$: ${total.toFixed(2)}`;
    
    e.preventDefault(); // evita envio do form
});