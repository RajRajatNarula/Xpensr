import React from 'react'
import { useSelector } from 'react-redux'
import Card from './card'
import './expense-list.css'

const ExpenseList = () => {
    
    const { expenseList : list} = useSelector((state)=>state.expenses)
    
  return (
    <div className='expense-list'>
        {
            list.length ? (list.map((item)=><Card item={item}/>))
            :
            (
                <div className='empty-state'>
                      <img src={require("../../assets/images/empty.png")} alt='Empty List' className='empty-image'/>
                      <label>Uh Oh ! Your Expense list is empty</label>
                </div>
            )
        }

    </div>
  )
}

export default ExpenseList