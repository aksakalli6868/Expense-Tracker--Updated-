import React, { useReducer } from "react"
import reducer from "./AppReducer"

const AppContext = React.createContext()

const defaultValue = {
    budget: 1200,
    transactions : []
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    return <AppContext.Provider value={{
        transactions: state.transactions,
        budget: state.budget,
        dispatch
    }}>
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider}