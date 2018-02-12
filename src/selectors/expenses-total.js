
const totalamount = (expenses)=>{
    
if(expenses.length==0){
    return 0;
}else{

    const total_amount_R = (acc , cur)=> acc +  cur.amount;
    return expenses.reduce(total_amount_R,0)
}

    /*let sum = 0;
    for(var i=0;i<expenses.length;i++){
        sum+= expenses[i].amount;
    }
    return sum;*/
}

export default totalamount;

