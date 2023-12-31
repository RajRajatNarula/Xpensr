import React from 'react'
import Modal from 'react-modal';
import './success-modal.css'
import { Link } from 'react-router-dom';

const SucessModal = ({modalOpen,setModalOpen}) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#71ccca',
          borderRadius:"12px",

        },
      };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
        <div className='modal-inner'>
            <labe>Expense added successfully</labe>
            <img src={require("../../assets/images/added-image.png")} alt='Expense Added' className='modal-image'/>
            <Link to='/'>
            <div className='take-home-button'>
                <i class="fi fi-rr-home"></i>
                Home
            </div> 
            </Link>
           
        </div>

    </Modal>
  )
}

export default SucessModal