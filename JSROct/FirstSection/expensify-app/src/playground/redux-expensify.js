import { createStore, combineReducers } from 'redux';

//timestamps
// 33400,10,-203






store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))
//const expenseThree = store.dispatch(addExpense({ description: 'Bulshits', amount: 400 }))

// console.log(expenseOne);
// console.log(expenseTwo);
// console.log(expenseThree);


// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('ffe'))
// store.dispatch(setTextFilter())


store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(-200));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));



const demoState = {
    expenses: [{
        id: 'fssdgshhshgs',
        description: 'January Rent',
        note: 'This was the final payment for that address.',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

