function balance(){
    const ctx = React.useContext(UserContext);
    const users= ctx;
    return(
        <h1>Balance<br/>
            {JSON.stringify(users.balance)}
        </h1>
    );

}