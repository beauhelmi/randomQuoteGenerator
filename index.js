function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [color, setColor] = React.useState("#111")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://type.fit/api/quotes`)
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex]);
        }
        fetchData();
    }, [])

    const getNewQuote = () => {

            const colors = [
                "blue",
                "yellow",
                "pink",
                "purple",
                "red",
                "green",
            ];


        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex])
        setColor(colors[randColorIndex])
    }

    return (
        <div style={{backgroundColor: color, minHeight: "100vh" }}>
        <div id="quote-box" className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body">
                        {randomQuote ? (
                            <>
                                <h5 id="author" className="card-title">- {randomQuote.author || "No author"}</h5>
                                <p id="text" className="card-text">&quot;{randomQuote.text}&quot;</p>
                            </>
                        ) : (
                            <h2>Loading</h2>
                        )}

                        <div className="">
                            <button id="new-quote" onClick={getNewQuote} className="btn btn-warning ml-3">New Quote</button>
                            <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=QuotesOfTheDay&hashtags=BeauCoding&related=freecodecamp&text=" +
                                encodeURIComponent(
                                    '"' + randomQuote.text + '"' + " - " + randomQuote.author || "No Author"
                                )}
                                target="_blank" className="btn btn-primary">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"))