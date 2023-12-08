const form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let valA = parseFloat(document.getElementById('valor-A').value);
    let valB = parseFloat(document.getElementById('valor-B').value);

    const messagesuccess = 'Formulario enviado com sucesso!';
    const containerMessageSuccess = document.querySelector('.success-message');
    const containerMessageError = document.querySelector('.error-message');

    const formValid = numbervalid(valA, valB);

    if (formValid) {
        containerMessageError.style.display = 'none';
        containerMessageSuccess.innerHTML = messagesucess;
        containerMessageSuccess.style.display =  'block';

    document.getElementById('valor-A').value = '';
    document.getElementById('valor-B').value = '';

} 
else{
    containerMessageError.style.display= 'block';
    containerMessageSuccess.style.display = 'none';
    }

});


    function numbervalid (valA, valB) {
        return valB > valA;
    }


