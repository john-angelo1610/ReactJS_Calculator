function App() {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);

    const display = symbol => {
        setAnswer("0");
        setExpression(prev => prev + symbol);
        expression[expression.length - 1] === "=" && ((/[0-9]/.test(symbol)) ? setExpression(symbol) : setExpression(answer + symbol));
    };

    const calculate = () => {
        try {
            setAnswer((eval(expression)));
            setExpression(prev => prev + "=");
        } catch (error) {
            setAnswer("Syntax Error!");
        }
    };

    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };

    const clear = () => {
        setExpression(prev => prev.split("").slice(0, prev.length-1).join(""));
        setAnswer(0);
    };

    const buttons = [
        {id: 'AC', symbol: 'AC', action: allClear},
        {id: 'clear', symbol: <i className="fas fa-backspace"></i>, action: clear},
        {id: 'divide', symbol: '/', action: display},
        {id: 'multiply', symbol: '*', action: display},
        {id: 'seven', symbol: '7', action: display},
        {id: 'eight', symbol: '8', action: display},
        {id: 'nine', symbol: '9', action: display},
        {id: 'subtract', symbol: '-', action: display},
        {id: 'four', symbol: '4', action: display},
        {id: 'five', symbol: '5', action: display},
        {id: 'six', symbol: '6', action: display},
        {id: 'add', symbol: '+', action: display},
        {id: 'three', symbol: '3', action: display},
        {id: 'two', symbol: '2', action: display},
        {id: 'one', symbol: '1', action: display},
        {id: 'equals', symbol: '=', action: calculate},
        {id: 'zero', symbol: '0', action: display},
        {id: 'decimal', symbol: '.', action: display}
    ];

    return(
        <div className="container">
            <div className="grid">
                <div id="display">
                    <input type="text" value={expression} placeholder="0" disabled/>
                    <div className="total">{answer}</div>
                </div>
                {buttons.map(btn => {
                    return <div id={btn.id} className="pad-btn" onClick={() => btn.action(btn.symbol)}>{btn.symbol}</div>
                })}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));