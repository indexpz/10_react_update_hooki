const App = () => {
    const [text, setText] = React.useState("")

    const handleOnClick = () => setText(`${text}a`)

    {
        return (
            <React.Fragment>
                <button onClick={handleOnClick}>Dodaj "A"</button>
                <h1>{text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))