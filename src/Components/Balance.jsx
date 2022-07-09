import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/context'

export default function Balance() {
    const { transactions, budget } = useContext(AppContext)

    // Getting Income
    const amounts = transactions.map((transaction) => transaction.amount)
    const posNum = amounts.filter((amount) => amount > 0)

    const posNumNew = posNum.reduce((total, item) => {
        return (total = total + item)
    }, 0)

    // Getting Expenses
    const amountsForExpense = transactions.map((transaction) => transaction.amount)
    const negNum = amountsForExpense.filter((amount) => amount < 0)

    const outgoings = negNum.reduce((total, item) => {
        return (total = total + item)
    }, 0)
    
    return (
        <div className="flex items-center justify-center flex-col mt-12">
            <div>
                {budget+posNumNew+outgoings < 0 && <h1 className="flex items-center justify-center text-red-600 bg-red-300 p-4 mb-2 rounded-xl">YOU ARE IN THE RED</h1> }
                <h3 className='bg-gray-300 p-4 w-64 rounded-xl'>Your current balance is: <span className='font-bold'>${budget + posNumNew + outgoings}</span></h3>
            </div>
            
            <div>
                <h3 className='bg-green-300 p-4 rounded-xl w-64 m-4'>Total income: <span className='font-bold'>
                    ${posNumNew}</span></h3>
                <h3 className='bg-red-300 p-4 rounded-xl w-64 m-4'>Total expenses: <span className='font-bold'>${outgoings}</span></h3>
            </div>
        </div>
    )
}
