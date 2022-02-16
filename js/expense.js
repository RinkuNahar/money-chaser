// Expense Total
function totalExpense(){
    const myFood = document.getElementById('food').value;
    const myRent = document.getElementById('rent').value;
    const myCloths = document.getElementById('cloths').value;
    const total =  parseFloat(myFood) + parseFloat(myRent) + parseFloat(myCloths);
   
    
}

document.getElementById('calculate').addEventListener('click',function(){
    
   const total = totalExpense();

   let myExpenses =document.getElementById('total-expense');
    myExpenses.innerText = total;

    // Balance
    const myIncome = document.getElementById('income').value;
    const myBalance = document.getElementById('balance');
    const leftMoney = myIncome - total;
    myBalance.innerText = leftMoney;

});

document.getElementById('saving').addEventListener('click',function(){
    // Saving percentage

    const myIncome = document.getElementById('income').value;
    const mySaving = document.getElementById('percentage').value;
    const calSave = mySaving/100;
    const mySave = myIncome * calSave;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = mySave;

    // Total Expense
    const total = totalExpense();

    // Remaining Balance
    const RemainingBalance = document.getElementById('remaining-amount');
    const income = document.getElementById('income').value;
    const leftMoney = income - total;
    const myRemaining = leftMoney - mySave;
    RemainingBalance.innerText = myRemaining;
    
});


