let initialState = {
  accountNo: 1001,
  balance: null,
  destinationAccount: null
}

function rootReducer(state = initialState, action) {
  
  switch(action.type){
    case DEPOSIT: 
      let newstate = Object.assign({}, state);
      newstate.amount = action.amount;
      return newstate.balance += newstate.amount;
      
    case WITHDRAWAL:
      let newstate = Object.assign({}, state);
      newstate.amount = action.amount;
      return newstate.balance -= newstate.amount;
      
    case TRANSFER:
      let newstate = Object.assign({}, state);
      newstate.amount = action.amount;
      newstate.destinationAccount = action.destinationAccount;
      return newstate.destinationAccount += newstate.amount;
      
  }
}