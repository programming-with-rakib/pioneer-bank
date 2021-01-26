

const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display ='none';

    const transationArea = document.getElementById('transaction-area');
    transationArea.style.display ='block';
})



// deposit button event handler

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit').value;
    const depositNumber = parseFloat(depositAmount);
    

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);

    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('deposit').value='';


    // add to blance
    const currentBlance = document.getElementById('currentblance').innerText;
    const currentBlanceNumber = parseFloat(currentBlance);
     
    const totalBlanceSum = depositNumber + currentBlanceNumber;
     
    document.getElementById('currentblance').innerText = totalBlanceSum;
 
  

})


// withdraw button event handler

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
   const withdrawAmount = document.getElementById('withdraw').value;
   const withdrawNumber = parseFloat(withdrawAmount);
   
   const currentWithdraw = document.getElementById('currentwithdraw').innerText;
   const currentWithdrawNumber = parseFloat(currentWithdraw);

   const totalWithdraw = withdrawNumber + currentWithdrawNumber;

   document.getElementById('currentwithdraw').innerText = totalWithdraw;
   
   document.getElementById('withdraw').value='';


   // add to blance
   const currentBlance = document.getElementById('currentblance').innerText;
   const currentBlanceNumber = parseFloat(currentBlance);
   
   const totalBlanceCost = withdrawNumber - currentBlanceNumber;

   document.getElementById('currentblance').innerText = totalBlanceCost;

  // document.getElementById('currentblance').innerText = totalWithdraw;
})

