
import {createStore} from 'redux';



const incrementCount = ({incrementBy=1}={}  )=>({
    type : 'INCREMENT',
    incrementBy

})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECCREMENT',
    decrementBy
})

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
})


const resetCount = () => ({
    type: 'RESET'
})

const store  = createStore( (state={ count:0 },action)=>{

    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy}
            break;
        case 'DECCREMENT':
            return { count: state.count - action.decrementBy }
            break;
        case 'RESET':
            return { count: 0 }
            break;
        case 'SET':
            return { count: action.count }
            break;

        default:
            break;
    }
    return state;
});


console.log(store.getState());

//store.dispatch(incrementCount());


store.dispatch(incrementCount({ incrementBy: 3 }));

console.log(store.getState());
store.dispatch(decrementCount({ decrementBy: 6 }));

console.log(store.getState());
store.dispatch(setCount({ count: 22 }));
console.log(store.getState());

store.dispatch(resetCount());
console.log(store.getState());

/*
store.dispatch({ type: 'INCREMENT', incrementBy:30})
console.log(store.getState());

store.dispatch({ type: 'DECCREMENT', decrementBy :10})
console.log(store.getState());

store.dispatch({ type: 'DECCREMENT' })
console.log(store.getState());
store.dispatch({ type: 'DECCREMENT' })
console.log(store.getState());

store.dispatch({ type: 'RESET' })
console.log(store.getState());



store.dispatch({ type: 'SET' , count : 100})
console.log(store.getState());

*/