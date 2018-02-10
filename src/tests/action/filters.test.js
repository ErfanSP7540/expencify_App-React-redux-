import moment from 'moment'
import {setTextFilter , setSortByDate , setSortByAmount , setStartTime , setEndTime} from '../../actions/filters'



test('Filters>> setTextFilter',()=>{
    const input = 'water'
    const recieved = setTextFilter()
    const expected = {
                        type: 'EDIT_TEXT',
                        text: ''
                      }
    expect(recieved).toEqual(expected)                  

})

/*const setTextFilter = (EditedText = '') => {
    return {
        type: 'EDIT_TEXT',
        text: EditedText
    }
}*/

test('Filters>> setSortByDate', () => {

    const recieved = setSortByDate()
    const expected = {
        type: 'SORT_BY_DATE'
    }
    expect(recieved).toEqual(expected)
})

/*const setSortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}*/

test('Filters>> setSortByAmount', () => {

    const recieved = setSortByAmount()
    const expected = {
        type: 'SORT_BY_AMOUNT'
    }
    expect(recieved).toEqual(expected)
})

/*const setSortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}*/


test('Filters>> setStartTime', () => {
    const input =  moment(2342323423)
    const recieved = setStartTime(input)

    const expected = {
        type : 'SET_START_DATE',
        startDate: moment(2342323423)
    }
    expect(recieved).toEqual(expected)
})
/*
const setStartTime = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}
*/

test('Filters>> setEndTime', () => {
    const input = moment(2342323423)
    const recieved = setEndTime(input)

    const expected = {
        type: 'SET_END_DATE',
        endDate: moment(2342323423)
    }
    expect(recieved).toEqual(expected)
})

/*const setEndTime = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}
*/


export { setTextFilter, setSortByDate, setSortByAmount, setStartTime, setEndTime }