import React, { useContext, useState } from 'react'
import { AppContext } from '../context/context'

export default function AddTransaction() {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const { dispatch } = useContext(AppContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text && amount){
            const newTransaction = {
                id: Math.floor(Math.random() * 100),
                text: text,
                amount: parseInt(amount)
            }
            console.log(newTransaction.id);
            dispatch({ type:"ADD", payload:newTransaction })
            setText("")
            setAmount(0)
        }
    }

    return (
        <div className='flex items-center justify-center w-[-690px] p-4'>
            <form>
                <input type="text" name="text" placeholder='transportation' value={text} onChange={(e) => setText(e.target.value)} className='border-2 p-3 border-indigo-600'/>
                <input type="number" name="amount" placeholder='44.23' value={amount} onChange={(e) => setAmount(e.target.value)} className='border-2 p-3 border-indigo-600 w-24 ml-4'/>
                <button type="submit" onClick={(e) => handleSubmit(e)} className='bg-blue-300 p-3 w-24 rounded-xl font-bold'>Submit</button>
            </form>
        </div>
    )
}
