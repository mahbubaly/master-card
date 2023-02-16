function getTotalElementById(elementId){
    const InputFiled=document.getElementById(elementId);
    const spendString=InputFiled.value;
    const spend=parseFloat(spendString);

    
    
    return spend;


}


document.getElementById('btn-calculate').addEventListener('click',function(){
    const incomeInputFiled=document.getElementById('income-total');
    const totalIncomeString=incomeInputFiled.value;
    const totalIncome=parseFloat(totalIncomeString); //Total Income : 


    //Spend On food:
    const totalFoodAmount = getTotalElementById('food-filed');
    const totalRentAmount= getTotalElementById('rent-filed');
    const totalCothesAmount= getTotalElementById('Clothes-filed');

    //calculate total spend: 

    const totalSpendAmount=totalFoodAmount+totalRentAmount+totalCothesAmount;
    



    //Set total-Expenses: 
    const totalExpensesFiled=document.getElementById('total-Expenses');
    const totalExpenses=totalExpensesFiled.innerText;
    
   //Try to remove NaN : 
    if(totalExpensesFiled.innerText=='NaN'){
        totalExpensesFiled.innerText=0;
    }
    else{
        totalExpensesFiled.innerText=totalSpendAmount;
    }
    



    //Calculate:

    const CurrentBalance=totalIncome-totalSpendAmount;
    


    //Current Balance: 
    const CurrentBalanceFiled=document.getElementById('total-balance');
    const balanceFiled=CurrentBalanceFiled.innerText;
    
   
    if(CurrentBalanceFiled.innerText=='NaN'){
        CurrentBalanceFiled.innerText=0;
    }
    else{
        CurrentBalanceFiled.innerText=CurrentBalance;
    }

});

document.getElementById('btn-save').addEventListener('click',function(){
    const incomeInputFiled=document.getElementById('income-total');
    const totalIncomeString=incomeInputFiled.value;
    const totalIncome=parseFloat(totalIncomeString); //Total Income :


    const getDiscountFiled=document.getElementById('convert-percentage');
    const getDiscountString=getDiscountFiled.value;
    const getDiscount=parseFloat(getDiscountString); //Discount Percentage.

    const Discount=totalIncome*(getDiscount/100);

    //Current Balance:
    const CurrentBalanceFiled=document.getElementById('total-balance');
    const balanceFiledString=CurrentBalanceFiled.innerText;
    const balanceFiled=parseFloat(balanceFiledString);

    
    //Set Saving amount: 

   const savedTextElement= document.getElementById('saving-total');
   const savedAmount=savedTextElement.innerText;
   savedTextElement.innerText=Discount;



   //Total amount after:



   const totalDiscountAmount=balanceFiled-Discount;

   /// Set Remaining-balance:
   const remainTextElement= document.getElementById('Remaining-balance');
   const remainAmount=remainTextElement.innerText;
   remainTextElement.innerText=totalDiscountAmount;

    


    





   




});