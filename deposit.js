function deposit(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setdeposit] = React.useState('');
    const ctx = React.useContext(UserContext);
    const newbalance = Number;
    const depositNum = Number;
    const balance = Number

    function validate(field, label){
        if(!field){
            setStatus('Error:' + label)
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleDeposit(){
       balance == 0
       newbalance == balance + depositNum;
       setShow(false);
       return(ctx.users.balance.push({balance:newbalance})
        )
    }

    function clearForm(){
        setShow(true);
 }

    return(
        <Card
            bgcolor= "primary"
            header= "Deposit"
            status= {status}
            body={show ? (
                <>
                Current Balance: <br/>


                Amount<br/>
                <input type="input" className="form-control" id="deposit" 
                placeholder="Enter Amount" value={deposit} onChange={e=> setdeposit(e.
                currentTarget.value)}/> <br/>

                <button type= "submit" className= "btn btn-light" onClick= {handleDeposit}>Make Deposit</button>

                </>
                ):(
                    <>
                    <h5>Success!</h5>
                    <button type= "submit" className= "btn btn-light" onClick= {clearForm}>Make Another Deposit</button>
                    </>
             )}
        />
    )


}