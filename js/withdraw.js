document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    const withdraw = parseFloat(withdrawAmount);
    withdrawField.value = '';

    const balanceField = document.getElementById('balance-field');
    const previousBalance = balanceField.innerText;
    const previousBalanceAmount = parseFloat(previousBalance);

    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawAmount = previousWithdraw.innerText;

    const withdrawTotal = parseFloat(previousWithdrawAmount) + withdraw;

    previousWithdraw.innerText = withdrawTotal;

    const currentBalance = previousBalanceAmount - withdrawTotal;
    balanceField.innerText = currentBalance;

})