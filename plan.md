## Planning

1. Configuration/dependencies
  * Ember
  * Bootstrap (to be used from app->styles->app.css and within app->templates->application.hbs)

2. Specs
  * It will contain two models: question and answer.
    * The question model will contain these attributes: content, author, notes.
    * The answer model will contain these attributes: response, responder
  * Users can view a list of all questions
  * Users can click on a specific question and view the notes on it
  * Users can add answers to a specific question
  * Admin can view a list of all questions on a separate page
  * Admin can click on a specific question to edit or delete it    

3. Integration
  * It will contain these routes: index, admin, questions, read-question, and about.
  * The index route will serve as the homepage, displaying only a list of question content (each in a link-to read-question route) and author's name, and also allow users to add new questions.
    * Use new-question component to show question form for saving new questions
  * The read-question route will allow users to view the question notes and add answers to that question (with answer response and responder name).
    * Use read-detail component to display the question's notes  
    * Use new-answer component to show answer form for saving new answers
  * The admin route will serve as the admin portal, with a list of all question content (each in a link-to questions route)
  * The questions route will allow admin to edit or delete an individual question and all answers associated with that question.
    * Use question-detail and update-question components to edit or delete the question
  * The about route will display information about the app, including its purpose.

4. UX/UI
  * Use app->templates->application.hbs to create header and footer display on all pages
    * Header will contain link to index routes
    * Footer will contain links to admin and about routes
  * Develop custom style!

5. Polish
  * If possible, allow for edit or deletion of answers with new component on read-question route
  * Develop README
