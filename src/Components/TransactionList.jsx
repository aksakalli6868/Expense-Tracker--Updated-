import React, { useContext } from 'react'
import { AppContext } from '../context/context'

import { BsFillTrashFill } from 'react-icons/bs'

export default function TransactionList() {
    const {transactions, dispatch} = useContext(AppContext)

    return (
        <div className='flex flex-row items-center justify-center'>
            <div className='font-bold mr-9'>
                History 
            </div>
            
            <div>
                <ul>
                    {transactions.map((transaction) => {
                        return (<li className='bg-gray-300 p-7'>
                        {transaction.text} / Amount: ${transaction.amount}
                        <button onClick={() => dispatch({ type:"REMOVE", payload:transaction.id })}className='ml-3'>{ <BsFillTrashFill className='flex justify-end text-red-500 float-right' /> }</button>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}
