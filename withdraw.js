function withdraw(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);
    const users= ctx.users
    const withdrawamount= Number
    const availablebalance= ctx.users.balance;

    function validate(field, label){
        if(!field){
            setStatus('Error:' + label)
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleWithdraw(){
      const newbalance= availablebalance - withdrawamount;
       setShow(false);
       return(
           console.log(newbalance)
       )
       
    }

    function clearForm(){
        setShow(true);


    }

    return(
        <Card
            bgcolor= "primary"
            header= "Withdraw"
            status= {status}
            body={show ? (
                <>
                Available Balance:<br/>
                <>
                
                </>

                Amount<br/>
                <input type="input" className="form-control" id="email" 
                placeholder="Enter Amount" value={ctx.users.balance} onChange={e=> setBalance(e.
                currentTarget.value)}/> <br/>
                
                <button type= "submit" className= "btn btn-light" onClick= {handleWithdraw}>Withdraw</button>

                </>
                ):(
                    <>
                    <h5>Success!</h5>
                    <button type= "submit" className= "btn btn-light" onClick= {clearForm}>Make Another Withdraw</button>
                    </>
             )}
        />
    )


}