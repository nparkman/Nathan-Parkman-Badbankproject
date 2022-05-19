function Spa(){
    return(
        <HashRouter>
             <NavBar/>
             <UserContext.Provider value= {{users:[{name:'Nathan',email:'nate@gmail.com',
             password:'password1',balance:69.69}]}}>
             <Route path="/" exact component={home}/>
             <Route path="/createaccount/" component={createaccount}/>
             <Route path="/login/" component={login}/> 
             <Route path="/deposit/" component={deposit}/> 
             <Route path="/withdraw/" component={withdraw}/> 
             <Route path="/balance/" component={balance}/> 
             <Route path="/alldata/" component={alldata}/>
             </UserContext.Provider>
        </HashRouter>
       
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)
