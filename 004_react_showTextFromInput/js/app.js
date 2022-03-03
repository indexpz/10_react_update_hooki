const App = () => {
    const [value, setValue] = React.useState("")

    const handleOnChange = ev => setValue(ev.target.value.toUpperCase())
    const handleOnClick = () => setValue("")

    return (
        <React.Fragment>
            <input
                onChange={handleOnChange}
                type="text"
                placeholder="Wpisz..."
                value={value}/>

            <button onClick={handleOnClick}>Reset</button>

            <h1 className="title">{value}</h1>
        </React.Fragment>
    )


}

ReactDOM.render(<App/>, document.getElementById('root'))