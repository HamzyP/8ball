# Magic 8-Ball Web Application

This project is a **JavaScript-based "Magic 8-Ball"** web application where users can ask questions and receive random answers, similar to the classic toy. Additionally, the app tracks a history of questions and answers and keeps a question counter to display the total questions asked during the session.

## Live Demo
[Click here to view the application!](https://hamzyp.github.io/8ball/)

## Features

- **Magic 8-Ball Responses**: Users can type any question, and the app responds with a random answer, much like the original Magic 8-Ball.
- **Question History**: The application stores a history of all questions asked, along with the responses, which can be viewed through a pop-up modal.
- **Question Counter**: Displays a counter of how many questions have been asked since the start of the session.
- **Styled Interface**: A clean, dark-themed UI with smooth animations and button styling for a more interactive experience.

## Setup and Usage

1. Clone or download the repository.
2. Open `index.html` in a web browser to run the app.
3. In the input field, enter your question and click **Send** to receive an answer.
4. Click **Show History** to view a history of all questions and answers for the session.

## Files

- **index.html**: The main HTML file, containing the structure of the web page.
- **style.css**: CSS file for styling the application, including button styling and modal layout.
- **index.js**: JavaScript logic for handling user input, generating responses, and managing question history.

## Code Highlights

- The **`questionHistory` array** stores each question and answer, allowing them to be displayed in the history modal.
- A **modal popup** is implemented in `style.css` and displayed via JavaScript to show the question and answer history.
- The **question counter** updates automatically to keep a running total of questions asked.

## Potential Future Improvements

- Add local storage to persist question history between sessions.
- Add additional UI animations and transition effects.
- Explore adding more customizable answers.
- Introduce a light theme alongside the current dark theme, allowing users to toggle between light and dark modes for improved accessibility and customization.
- Add a mobile layout so it looks good on mobile.
- Fix sizing issue of the entry box.

## Credits

This project is based on a JavaScript task from Codecademy and was further developed into a complete Magic 8-Ball application.
