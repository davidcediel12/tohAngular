# Tour of heroes

This project is created to understand the basic features of Angular, starting from basic elements like components and services, to make request to a service using http and RxJs elements 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Components

There are 9 components so far, described below:

1. ### Heroes Component 
    This component show all the heroes existing in the database.

2. ### Dashboard component 
    This component show five heroes in a dashboard way

3. ### Hero detail component
    In this component, we can see the details of each hero, also, we can change the name.

4. ### Hero search component
    This components allow us to find a hero by the name, once we type a letter in the field, the component will make a request to the server to find coincidences 

5. ### Login component
    This component sent a HTTP post with the credentials, if there are correct, the server return a JWT to store it

6. ### Sign up component 
    This component allow us to register to the application

7. ### Navbar component
    This component show the navbar of the page, the elements in there will be different if the user is logged in or not

8. ### Messages component
    A simple component to show some details of what is going on in the app (fetch heroes, delete one hero, etc.)


9. ### Add-hero
    Component that use reactive form to create a new hero, in this component we can see some validators 


## Services 

To make some functions avialable to all components and make some HTTP request, we use **services**, there are 5 services described below 


1. ### Heroes Service
    Contains all elements to manage the heroes, like: Add hero, modify name, find hero, find heroes by name, delete hero, etc.

2. ### Powers service
    Read only service to retrieve all powers, this is used when we create a hero, each hero has a power, so we need to list them to select one 

3. ### Authentication Service
    Handle all elements related with authentication, like Sign in, Sign Up, chack if user is Logged in, retrieve token information, etc.

4. ### Intercept auth service 
    Intercept all HTTP request and, if the user has an authentication token, the service add it to the headers

