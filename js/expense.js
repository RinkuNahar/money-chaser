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



document.getElementById('saving').addEventListener('click',function(){
    // Saving percentage

    const myIncome = document.getElementById('income').value;
    const mySaving = document.getElementById('percentage').value;
    const calSave = mySaving/100;
    const mySave = myIncome * calSave;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = mySave;

    // Remaining Balance
    const RemainingBalance = document.getElementById('remaining-amount');
    
    // Total Expense
    const myFood = document.getElementById('food').value;
    const myRent = document.getElementById('rent').value;
    const myCloths = document.getElementById('cloths').value;
    const total =  parseFloat(myFood) + parseFloat(myRent) + parseFloat(myCloths);


    const Income = document.getElementById('income').value;
    const leftMoney = Income - total;
    const myRemaining = leftMoney - mySave;
    RemainingBalance.innerText = myRemaining;
});


