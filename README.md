# manager
### A react-native application for managing employees and their schedules

### Technologies Used
- React Native
- Redux
- Firebase

### Setup
**This is assuming you already have XCode up to date and react-native-cli installed**
*Estimated Time: 5 minutes*

- run `npm install`
- run `touch .env`
- take keys from `/.env-example` and place them into your new `.env` file, we'll add values later
- Create or login to an account at [Firebase](https://firebase.google.com/)
- Once logged in click *Go To Console* at the top right of the page
- Create a firebase database (call it whatever you want)
- Visit *Authentication* on the panel to the left, go to *Sign-In Method* and choose **Email/Password**
- Click the first Enable switch but **do not enable Email link (Passwordless sign-in)**
- When that's done click *Web Setup* on the top right corner and you should see something like:
```
var config = {
  apiKey: "apikey2019831029",
  authDomain: "authdomain-91382.firebaseapp.com",
  databaseURL: "https://authdomain-91382.firebaseio.com",
  projectId: "authdomain-91382",
  storageBucket: "authdomain-91382.appspot.com",
  messagingSenderId: "827498237492378"
};
```
- Copy the value of each key within `config` and place it in its respective spot within your new *.env* file without quotes or spaces
- Then within firebase on the right panel under *Develop* visit *Database*
- Then under Realtime Database click Get Started and then click *Enable*, don't worry about choosing locked or test
- Then when you're new database loads click the *Rules* tab
- Remove all of the json there and replace it with:
```
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```
- Click *Publish* and you're done
- run `react-native run-ios` from the project root directory and your simulator should start and you should be able to login with any credentials (account login/create for this app are one in the same)
