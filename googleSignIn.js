var username = null;
const firebaseConfig = {
    apiKey: "AIzaSyBf3bJaWiOked6TAd8E-Z48BpSYCxHyhAk",
    authDomain: "login-signup-4a018.firebaseapp.com",
    databaseURL: "https://login-signup-4a018-default-rtdb.firebaseio.com",
    projectId: "login-signup-4a018",
    storageBucket: "login-signup-4a018.appspot.com",
    messagingSenderId: "252373325301",
    appId: "1:252373325301:web:36174983aa0ee482103cbc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(token)
      console.log(user)
      username = user.displayName;
      document.body.innerHTML = username;
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}

