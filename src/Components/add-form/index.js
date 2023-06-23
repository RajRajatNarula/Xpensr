import React, { useState } from 'react'
import { categories } from '../../constants/add-expense';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/expenses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SucessModal from './success-modal';
import './add-form.css'

const AddForm = () => {
    const cat=categories;
    const [categoryOpen, setCategoryOpen]=useState(false)
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState();
    const [modalOpen, setModalOpen]=useState(false);
    const dispatch= useDispatch()

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleAmount = (e) => {
        const val= parseFloat(e.target.value)
        if(isNaN(val))
        {
            setAmount("")
            return
        }
        setAmount(e.target.value)
    }

    const handleCategory =(category) =>
    {
        setCategory(category)
        setCategoryOpen(false)
    }

    const handleSubmit=()=>
    {
        if(title==="" || amount==="" || !category)
        {
            console.warn("Empty Fields");
            const notify = () => toast("Please check the empty fields");
            notify();
            return;
        }

        const data={
            title,
            amount,
            category,
            createdAt:new Date(),
        };
        
        dispatch(addExpense(data));
        setModalOpen(true);

    }
  return (
    <div className='add-form'>
        <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        <SucessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <div className='form-item'>
            <label>Title </label>
            <input placeholder="Expenditure title   " value={title} onChange={(e)=>handleTitle(e)} />
        </div>

        <div className='form-item'>
            <label>Amount ₹ </label>
            <input placeholder='Enter the amount' value={amount} onChange={(e)=>handleAmount(e)} className='amount-input'/>
        </div>

        <div className='category-container-parent'>
            <div className='category'>
                <div className='category-dropdown' onClick={()=>setCategoryOpen(!categoryOpen)}>
                    <label>{category ? category.title : "Categories"}</label>
                    <i className="fi fi-rr-angle-down"></i>
                    
                </div>
                {categoryOpen && <div className='category-container'>
                        {
                            cat.map(category => (
                                <div className='category-item'
                                    style={{borderRight:`5px solid ${category.color}`}} 
                                    key={category.id} onClick={() => handleCategory(category)} >
                                    
                                    <label>{category.title}</label>
                                    <img src={category.icon} placeholder={category.title} />
                                </div>
                            ))
                        }
                    </div>}
            </div>

        </div>

        <div className='form-add-button'>
            <div onClick={handleSubmit}>
                <label>Add</label>
                <i class="fi fi-rr-plus"></i>

            </div>

        </div>



    </div>
  )
}

export default AddForm