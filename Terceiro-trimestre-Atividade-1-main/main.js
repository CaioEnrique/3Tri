document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    const nome = document.getElementById('inNome').value;
    document.querySelector('h3').textContent = `Olá, ${nome}!`;
});
