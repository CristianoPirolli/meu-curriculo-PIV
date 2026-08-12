const form = document.getElementById('formContato');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;      
    alert('Obrigado pelo contato ' + nome);

    form.reset();
});