import React from 'react'
import Topfold from '../../Components/Topfold';
import './add-expense.css'
import AddForm from '../../Components/add-form';

const AddExpense = () => {
  return (
    
    <div className='add-expense'>
      <Topfold/>
      <AddForm/>
    </div>
  )
}

export default AddExpense;