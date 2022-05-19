function login(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    let i= 0
    const users = ctx.users

    function validate(field, label){
        if(!field){
            setStatus('Error:' + label)
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleLogIN(){
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        for(i = 0; i< users.length; i++){
            if(email==users[i].email && password==users[i].password){
                console.log("im in")
                setShow(false);
                return
            }
           }
           alert("invalid address or password");
           setShow(true);
    }

    function clearForm(){
        setEmail('');
        setPassword('');
        setShow('true');


    }

    return(
        <Card
            bgcolor= "primary"
            header= "Login"
            status= {status}
            body={show ? (
                <>
                Email Address<br/>
                <input type="input" className="form-control" id="email" 
                placeholder="Enter Email" value={email} onChange={e=> setEmail(e.
                currentTarget.value)}/> <br/>

                Password<br/>
                <input type="password" className="form-control" id="password" 
                placeholder="Enter Password" value={password} onChange={e=> setPassword(e.
                currentTarget.value)}/> <br/>

                <button type= "submit" className= "btn btn-light" onClick= {handleLogIN}>Login</button>

                </>
                ):(
                    <>
                    <h5>Success!</h5>
                    <button type= "submit" className= "btn btn-light" onClick= {clearForm}>Logged In!</button>
                    </>
             )}
        />
    )


}