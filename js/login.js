document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-field').value;
    const passwordField = document.getElementById('password-field').value;

    if (emailField === 'sontan@baap.com' && passwordField === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tumi "Abbur BANK" e dhukte paroba na!!!');
    }
})