console.log('this is a test');

import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props)=>{
    return (<div>
        <h1> Info </h1>
        <p> this is a pragraph on p tag(from Info JSX) {props.info}</p>
    </div>);
}

const WithAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
        <div> {props.isADmin && "This is a tip from Admin"}</div>
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminCom  = WithAdminWarning(Info);
ReactDOM.render(<AdminCom isADmin={true} info="INFOO"/> ,document.getElementById('app')   )
