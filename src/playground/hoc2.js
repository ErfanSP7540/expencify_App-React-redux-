console.log('hoc2.js');


import React from 'react'
import ReactDOM from 'react-dom'

const Inner = (props)=>{
    return (
        <div> 
            <h1>  {props.name && "Hello "+props.name}</h1>
        </div>
    )
} 

const HorderCom = ( metodforReturningProp ) => {
    return (Input) => (<Input {...metodforReturningProp()} />)
}

const MainCom = HorderCom( ()=>({name:'ali'}) )( Inner  )

console.log(MainCom);

ReactDOM.render(<MainCom /> ,document.getElementById('app') )
//