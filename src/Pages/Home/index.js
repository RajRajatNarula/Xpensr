import React, { Component } from 'react';
import './home.css'
import Topfold from '../../Components/Topfold';
import ExpenseList from '../../Components/expense-list';
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='home'>
                <Topfold />
                <ExpenseList/>
            </div>
        );
    }
}
 
export default Home;