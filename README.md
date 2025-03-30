# Netflix-GPT

 - Create React app (npx create-react-app netflix-gpt)
 - Configured TailwindCSS(take help of tailwindCSS website)
 - Routing of App
 - Login form
 - Sign up form
 - Form Validation
 - useRef Hook
 - Firebase Setup
 - Deploying our app to production
 - Create Sign Up user account
 - Implement Sign In user API
 - Created Redux Store with userSlice
 - Implemented Sign out
 - Update Profile
 - BugFix: Sign up user displayName and profile picture update
 - Bugfix: if the user is not logged in, Redirect /browse to Login Page and vice-versa
 - Unsubscibe to the onAuthSatateChanged callback
 - Add all the hardcoded values to the cnstants file
 - Register TMDB API & create an app & get access token
 - Get Data from TMDB now playing movis list API
 - Custom Hook for now Playing movies
 - Create movieSlice
 - Update store with movie slice
 - Planning for mainContainer & secondary container
 - Fetch data for trailer video
 - Update Store with Trailer Video Data
 - Embeded the Youtube Video and make it autoplay and mute
 - Build Secondary component


 # Features
- Login/Sing Up
    - Sign In / Sign up form
    - redirect to Brose Page
- Browse (after authentication)
    - Header
    - Main Movie
       - Trailer in Background
       - Title & Description
       - MovieSuggestions
         - Movie * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions


#### When your form have more(15-16) fields, always use the library known as [Formik](https://formik.org/)

- [Regex for email validation](https://saturncloud.io/blog/how-can-i-validate-an-email-address-using-a-regular-expression/)

- [Regex for password Validation](https://regexr.com/3bfsi)

- [Firebase Authentication](https://firebase.google.com/docs/auth/web/firebaseui)


## Why 2 times rendering happen?
``` javascript
    <React.StrictMode>
    <App />
  </React.StrictMode>
  If I will put my <App/> inside React.StrictMode then It will just happen 2 times in your local but at production 1 time , bc react does extra rendering of your components to check inconstancy in between your call (It's a good thing)
```

