// errorMessage
function errorMessage(expenseId){
    if(isNaN(document.getElementById(expenseId).value)){
        alert('Please Put a number');
    }
    if(parseFloat(document.getElementById(expenseId).value) < 0){
        alert('Please Put a Number Greater Than 0');
    }
    
}
// Expense Total
function totalExpense(){
    const myFood = document.getElementById('food').value;
    errorMessage('food');

    const myRent = document.getElementById('rent').value;
    errorMessage('rent');

    const myCloths = document.getElementById('cloths').value;
    errorMessage('cloths');
    const total =  parseFloat(myFood) + parseFloat(myRent) + parseFloat(myCloths);
   return total;
    
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

    if(total > parseFloat(document.getElementById('income').value)){
        alert('You Can Not Expense Money More Than Your Income');
        myBalance.innerText = 0;
    }
   
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
    
     if(myRemaining<0){
        alert('You Can not Save Any Money');
        RemainingBalance.innerText = 0;
        savingAmount.innerText = 0;
    }
});


