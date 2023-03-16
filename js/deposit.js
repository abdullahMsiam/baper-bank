document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDeposit = depositField.value;
    depositField.value = '';

    const previousDeposit = document.getElementById('deposit-total');
    const previousDepositAmount = previousDeposit.innerText;

    const depositTotal = parseFloat(newDeposit) + parseFloat(previousDepositAmount);

    previousDeposit.innerText = depositTotal;

    const balanceField = document.getElementById('balance-field');
    const previousBalance = balanceField.innerText;

    const balanceTotal = parseFloat(newDeposit) + parseFloat(previousBalance);

    balanceField.innerText = balanceTotal;

})

