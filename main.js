$(function() {
  initFirebase();
  initText();
})

var db;
var pressNumber = -1;


function initFirebase () {
  var config = {
    apiKey: "AIzaSyA34BXX2SMtUCLgJMv0JN_FYMg2b39gSz8",
    authDomain: "numbers-1c4b0.firebaseapp.com",
    databaseURL: "https://numbers-1c4b0.firebaseio.com",
    projectId: "numbers-1c4b0",
    storageBucket: "",
    messagingSenderId: "461929920895"
  };
  firebase.initializeApp(config);
  db = firebase.firestore();
}

function initText() {

  var updateInterval = setInterval(() => {
    db.collection("data").doc('k1Cr5QzO1j5bgXkZMAKt')
    .get().then(function(doc) {
      pressNumber = doc.data().press;
      $('#press-text').text(doc.data().press);
    })
  }, 1000);


  $("#press-button").click(function() {
    if(pressNumber == -1) {
      return;
    }
    console.log("+1 button pressed");
    pressNumber += 1;
    db.collection("data").doc('k1Cr5QzO1j5bgXkZMAKt')
      .update({
        press: pressNumber
      })
      $('#press-text').text(pressNumber);
  })
  

}
