import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from '../components/ExpenseListFilters'

const HomePage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default HomePage;