## First React App
This is just practice using react's CDN links so that i can get to grips with using react locally without worring about the extra things like bundlers and dependencies and extra files.

## Using ReactDOM 
Global object with the render method for rendering html elements and text on a target within the HTML document.

## Quiz 1
1. Why do we need to `import React from "react"` in our files?
Because react is being used through a dependency and to access its objects we need to 
import them first into the project that needs them meaning we can't use JSX without importing react
first.

2. If I were to console.log(page) in index.js, what would show up?
An object containing each html element within the variable.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
It has no parent element so it would throw an error.

4. What does it mean for something to be "declarative" instead of "imperative"?
For something to be declarative, you only need to tell it to do something and it would know how.

For something to be imperative, you ned to tell it how to do something step by step before it is able to complete a task.

5. What does it mean for something to be "composable"?
When something is made from multiple components so it is modular.


## Quiz 2 
1. What is a React component?
 A react component is an individual piece of code that codes for a part of a website or app e.g. a navigation bar. It is a function function that returns HTML code and it is reusable.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The first letter of the name of the function is not capitalised.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
The component function is called like a function instead of being called like a HTML tag. 