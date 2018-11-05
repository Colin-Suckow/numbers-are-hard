$(function() {
  initFirebase();
  initText();
})

var db;
var data = 0;


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
  db.collection("data").doc('k1Cr5QzO1j5bgXkZMAKt')
    .onSnapshot(function(doc) {
      console.log(doc.data().press);
      $('#press-text').text(doc.data().press);
      data = doc.data().press;
    })

  $("#press-button").click(function() {
    console.log("+1 button pressed");
    data += 1;
    db.collection("data").doc('k1Cr5QzO1j5bgXkZMAKt')
      .update({
        press: data
      })

  })

}