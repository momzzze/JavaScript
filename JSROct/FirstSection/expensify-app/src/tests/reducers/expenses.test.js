import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from "../"


test('testing default state', () => {
    const state = expensesReducer(undefined, { tyep: '@@INIT' });
    expect(state).toEqual([]);
})
test('testing ADD_EXPENSE', () => {

})
test('testing REMOVE_EXPENSE', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state=expensesReducer(expenses)
})
test('testing EDIT_EXPENSE', () => {

})




