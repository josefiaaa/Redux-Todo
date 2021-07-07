import { ADD_TODO } from '../actions';

let defaultState = {
    todos: [
        {
            id: Date.now(),
            todo: 'Wash Car',
            completed: false
        },
        {
            id: Date.now(),
            todo: 'Foster Kittens',
            completed: false
        },
        {
            id: Date.now(),
            todo:'Keep all of them',
            completed: false
        }
    ]
}

export default function reducer(state= defaultState, action) {
    switch (action.type) {
        case ADD_TODO:
            let newTodos = [...state.todos, action.payload];
            return Object.assign({}, state, {todos: newTodos})
        default:
            return state;
    }
}