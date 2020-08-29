# 🌤 Weather React App

This is a simple weather app made with React. The end is to show the temperature in certains countries and their respective cities that the user can select. To get the information that shows the temperature I use the OpenWeatherMap API.
  This project allows me to get practice and understand Reactconcepts such as useState, useEffect, how to consume an API with async JavaScript functions, the documentation with PropTypes and of course React components!
  
  ## 🔧 Components
  
  This app has the following components:
  
  - Header: This component shows the title that it gets from a prop sent by the App.js  
  
  - Form: The form component allows the user to introduce and select the city and the country from where he wants to know the weather. The component has the function of realizing the comprobation if the user introduces correctly the data or if he doesn't, the form will act in consequence and show an error component or not.
  
  - Error: This component has the responsibility of showing the error message that get from the props that depend on where it's called.
  
  - Weather: The weather component shows the current, maximum and minimum temperature from the city that the user selects.
  
  ### 👇 You can try it here! Feedback is always welcome!
  https://p-weather-react.netlify.app/
