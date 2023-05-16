Write JavaScript code that fetches a random cat photo from "https://api.thecatapi.com/v1/images/search" and displays it on a webpage when a button is clicked. The code should adhere to the following requirements:

1. Declare a constant variable named `url` and assign it the value "https://api.thecatapi.com/v1/images/search".

2. Use `document.querySelector` to select the HTML element with the class name "container" and assign it to a variable named `section`.

3. Use `document.querySelector` to select the HTML element with the class name "btn" and assign it to a variable named `button`.

4. Attach an event listener to the `button` variable, listening for the "click" event, and call the `getRandomCats` function when the button is clicked.

5. Define an arrow function named `randomCatPhoto` that takes a parameter named `json`.
   - Retrieve the URL of the cat photo from the `json` object and assign it to a variable named `photo`.
   - Add the "cats" class to the `section` element using the `classList.add` method.
   - Create a new `img` element and assign it to a variable named `image`.
   - Set the `src` attribute of the `image` element to the `photo` variable.
   - Add the "random_cats" class to the `image` element using the `classList.add` method.
   - Set the `alt` attribute of the `image` element to the `photo` variable.
   - Append the `image` element as a child to the `section` element.

6. Implement the `getRandomCats` function:
   - Clear the content of the `section` element by setting its `innerHTML` property to an empty string.
   - Use a try-catch block:
     - Inside the try block, use `await` to fetch the data from the `url` using the `fetch` function, and assign it to a variable named `response`.
     - Use `await` to parse the `response` as JSON, and assign the resulting object to a variable named `json`.
     - Call the `randomCatPhoto` function, passing `json` as an argument.
     - Add a console log statement to print the `json` object.
   - In the catch block, log the error message to the console.

Ensure that the code follows the provided instructions and runs successfully when the button is clicked, displaying a random cat photo on the webpage.

Best of luck with your coding!
