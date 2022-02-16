// Total Expense and My Balance
document.getElementById('calculate').addEventListener('click',function(){
    // Expense Total
    const myFood = document.getElementById('food').value;
    const myRent = document.getElementById('rent').value;
    const myCloths = document.getElementById('cloths').value;
    const total =  parseFloat(myFood) + parseFloat(myRent) + parseFloat(myCloths);
   
    let myExpenses =document.getElementById('total-expense');

    myExpenses.innerText = total;

    // Balance
    const myIncome = document.getElementById('income').value;
    const myBalance = document.getElementById('balance');
    const leftMoney = myIncome - total;
    myBalance.innerText = leftMoney;

});
