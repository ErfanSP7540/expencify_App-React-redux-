 const setTextFilter = (EditedText = '') => {
    return {
        type: 'EDIT_TEXT',
        text: EditedText
    }
}
 const setSortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}
 const setSortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}
 const setStartTime = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}
 const setEndTime = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}


export { setTextFilter, setSortByDate, setSortByAmount, setStartTime, setEndTime }