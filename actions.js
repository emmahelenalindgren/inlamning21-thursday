let initialState = {
  accountNo: 1001,
  balance: null,
  destinationAccount: null
}

const DEPOSIT = "DEPOSIT",
      WITHDRAW = "WITHDRAWAL",
      TRANSFER = "TRANSFER";

function actionDeposit(amount){
  return{
    type: DEPOSIT,
    amount 
  }
}

function actionWithdraw(amount){
  return {
    type: WITHDRAWAL,
    amount
  }
}

function actionTransfer(amount, destinationAccount){
  return {
    type: TRANSFER,
    amount,
    destinationAccount
  }
}