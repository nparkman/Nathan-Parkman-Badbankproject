function home(){
    return(
        <Card
            txtcolor="black"
            header="BadBank Landing"
            title="Welcome"
            text="Hi this is Atom or atm for short
            he's still learning how to bank
            and is not responsible for any money
            lost or gained while using his services"
            body={(<img src="robot.jpg" className="img-fluid"
            alt="Responsive image"/>)}
        />
    );

}