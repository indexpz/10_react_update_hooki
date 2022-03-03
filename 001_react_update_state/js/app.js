const App =()=>{
    const [counter, setCounter] = React.useState(10);


    return(
        <div>
            <h3>Prezentacja stanu w React</h3>
            <p>Wartość stanu: {counter}</p>
        </div>
    )

        }

        ReactDOM.render(<App/>, document.getElementById("root"));