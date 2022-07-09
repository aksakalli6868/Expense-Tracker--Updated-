export default function reducer(state, action) {
    if(action.type === "ADD"){
        return {...state, transactions: [...state.transactions, action.payload]}
    } else if(action.type === "REMOVE"){
        return{...state, transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)}
    }
    return state
}
