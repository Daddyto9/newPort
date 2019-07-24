  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDbPBqewb883ZyyCk-TwujhvzGMoxqLXEE",
      authDomain: "contactform-bbb1c.firebaseapp.com",
      databaseURL: "https://contactform-bbb1c.firebaseio.com",
      projectId: "contactform-bbb1c",
      storageBucket: "",
      messagingSenderId: "975837745411",
      appId: "1:975837745411:web:0d157167d6ed61c4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference messages collection
  var messagesRef = firebase.database().ref('messages');


  // listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e) {
      e.preventDefault();

      // get values
      var name = getInputVal("name");
      var company = getInputVal("company");
      var email = getInputVal("email");
      var phone = getInputVal("phone");
      var message = getInputVal("message");

      // save message
      saveMessage(name, company, email, phone, message);

      // show an alert
      document.querySelector('.alert').style.display = 'block';

      // hide alert after 3 seconds
      setTimeout(function() {
          document.querySelector('.alert').style.display = 'none';
      }, 3000);

      // reset form
      document.getElementById('contactForm').reset();
  }

  // function to get form values 
  function getInputVal(id) {
      return document.getElementById(id).value;
  }

  // Function to save the messages to firebase
  function saveMessage(name, company, email, phone, message) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          company: company,
          email: email,
          phone: phone,
          message: message

      });
  }