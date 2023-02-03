
# Random Quote Generator

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!




## API Reference

#### Get all items

```http
  GET https://type.fit/api/quotes
```

#### Get item

```http
  async function fetchData() {
            const response = await fetch(`https://type.fit/api/quotes`)
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex]);
        }
```

#### Quote (text,author))

Takes bunch of Quotes text and author


## Demo

Insert gif or link to demo

https://codepen.io/beauhelmi/pen/yLqZadV
## Acknowledgements

 - [Youtube FCC demo](https://www.youtube.com/watch?v=NyZzRSTZQ2Y)


