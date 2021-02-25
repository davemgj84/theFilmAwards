# Notes - "The Film Awards"

This is a front-end app that allows users to search OMDB (The Open Movie Database), for their favorite films. They can nominate up to 5 films for a "Shoppie" award. Once they have nominated 5 films, they will get a notification thanking them for their nominations. Users may also remove nominations if they change their mind.

- It should be noted that this was originally created for a coding challenge, and was not developed for mobile devices. It is ideally presented on screen sizes of a laptop or larger due to the original contraints of the challenge.

# Location of deployed application

The application is deployed via Netlify and be visited here:

- https://the-film-awards-by-dj.netlify.app/

# Instructions to run assignment locally

Clone this repository. Cd into the project folder, and `run npm install`.

You will require an API key from OMDB to use this locally. You can easily get a free API key here:

- http://www.omdbapi.com/apikey.aspx

Once you have your API key, create a `.env` file to store your key. Look at the existing `.env.example` file as a template if you are unsure of how to do this.

Once dependencies have been installed, and you have acquired your own OMDB API key (as well as the `.env` file), you can now run `npm start` to start the application locally on `Port 3000`.

**_ It should be noted that this application was developed for laptop screens and larger. I unfortunately have not made it responsive for mobile at this time _**

## Dependencies include:

- React - ^17.0.1
- Node-Sass - ^4.14.1
- Axios - ^0.21.1

This repository has also been deployed on NETLIFY here:

- https://the-film-awards-by-dj.netlify.app/

# Feedback on this technical challenge

I had a ton of fun working on this project! I wanted to utilize my creativity to design and implement an art deco theme to "The Film Awards". I wanted to give it the look and feel of the early days of the Film industry and the Oscars. I hope you enjoy my project.

# Screenshots

![Search](https://github.com/davemgj84/theFilmAwards/blob/master/docs/filmAwards.png?raw=true)
![Nominate](https://github.com/davemgj84/theFilmAwards/blob/master/docs/nominate.png?raw=true)
![Thank you!](https://github.com/davemgj84/theFilmAwards/blob/master/docs/banner.png?raw=true)
