// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
modal = document.querySelector('div#modal')
modal.className = "hidden"

// When a user clicks on an empty heart:
// Invoke mimicServerCall to simulate making a server request
mimicServerCall()
  

// When the "server" returns a failure status:
// Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
// Display the error modal by removing the .hidden class
// Display the server error message in the modal
// Use setTimeout to hide the modal after 3 seconds (add the .hidden class)


// When the "server" returns a success status:
// Change the heart to a full heart
// Add the .activated-heart class to make the heart appear red
let heart = document.querySelector("span.like-glyph");
console.log(heart);

heart.addEventListener('click', () => {
  (heart.classList.toggle('activated-heart')) 
  if (heart.innerHTML = EMPTY_HEART){
    (heart.innerHTML = FULL_HEART)
  }else (heart.innerHTML = EMPTY_HEART)
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
