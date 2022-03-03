const ADDITION = 'addition'
const SUBTRACTION = 'subtraction'
const RESET = 'reset'

const Counter = props => {
    const [count, setCount] = React.useState(0)
    const [result, setResult] = React.useState(props.result)


    const handleClick = (type, number = 1) => {
        if (type === "subtraction") {
            setCount(count + 1)
            setResult(result - number);
        } else if (type === "reset") {
            setCount(count + 1)
            setResult(props.result);
        } else if (type === "addition") {
            setCount(count + 1)
            setResult(result + number);
        }
    }

    return (
        <React.Fragment>
            <MathButton
                name="-10"
                number={10}
                type={SUBTRACTION}
                click={handleClick}
            />
            <MathButton
                name="-1"
                number={1}
                type={SUBTRACTION}
                click={handleClick}
            />
            <MathButton
                name="Reset"
                type={RESET}
                click={handleClick}
            />
            <MathButton
                name="+1"
                number={1}
                type={ADDITION}
                click={handleClick}
            />
            <MathButton
                name="+10"
                number={10}
                type={ADDITION}
                click={handleClick}
            />

            <ResultPanel count={count} result={result}/>

        </React.Fragment>
    )
}

const MathButton = ({click, name, number, type}) => {
    const handleOnClick = () => click(type, number);
    return <button onClick={handleOnClick}>{name}</button>;
}

const ResultPanel = ({count, result}) => {
const additionalInformation = count > 10 ? <span>. Przeciążenie procesora!</span> : null

    return (<React.Fragment>
            <h1>Liczba kliknięć: {count} {additionalInformation}</h1>
            <h1>Wynik: {result}</h1>
        </React.Fragment>
    )
}

const startValue = 0;

ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'))