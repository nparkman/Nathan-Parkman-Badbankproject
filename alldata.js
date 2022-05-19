function alldata(){
    const ctx = React.useContext(UserContext)
    return(
        <h1>ALLDATA<br/>
            {JSON.stringify(ctx)}
        </h1>
    );

}