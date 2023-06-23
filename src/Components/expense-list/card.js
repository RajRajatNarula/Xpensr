import moment from 'moment'
import React from 'react'
import './card.css'
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/expenses';

const Card = ({item}) => {
    const time=moment(item.createdAt).fromNow();
    const dispatch =useDispatch();
    const handleDelete=()=>
    {
        dispatch(deleteExpense(item))
    }
    console.log(item)
  return (
    <div  className='card' style={{borderRight:`6px solid ${item.category.color}`}}>
        <div className='card-image-container'>
            <img src={item.category.icon}
             alt={item.category.title}
             className='card-image'/>
        </div>
        <div className='card-info'>
            <label className='card-title'>{item.title}</label>
            <label className='card-time'>{time}</label>
        </div>
        <div className='card-right'>
            <div className='delete-icon'>
                 <i class="fi fi-rr-trash" onClick={handleDelete}></i>
            </div>
            <div className='card-amount'>
                <label>₹ {item.amount}</label>
            </div>
        </div>
    </div>
  )
}

export default Card