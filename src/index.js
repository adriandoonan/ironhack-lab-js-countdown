const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimeoutTimer = null



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector('#start-btn')
startButton.addEventListener('click', () => {
  startCountdown()
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  document.querySelector('#time').innerText = remainingTime
  showToast("⏰ Final countdown! ⏰")
  startButton.disabled = true
  startButton.innerText = 'Hold steady...'
  timer = setInterval(() => {
    remainingTime--
    document.querySelector('#time').innerText = remainingTime
    if (remainingTime === 0) {
      clearInterval(timer)
      remainingTime = DURATION
      showToast('Lift off! 🚀')
      startButton.disabled = false
      startButton.innerText = 'Start Countdown'
      return
    }
    if (remainingTime === 5) showToast("Start the engines! 💥")
  }, 1000);
}


const toastDiv = document.querySelector('#toast')
const toastCloseButton = toastDiv.querySelector('#close-toast')
toastCloseButton.addEventListener('click',() => {
  toastDiv.classList.remove('show')
  clearTimeout(toastTimeoutTimer)
})


// ITERATION 3: Show Toast
function showToast(message = 'mmm, warm toast') {
  console.log("showToast called!");

  // Your code goes here ...
  toastDiv.querySelector('#toast-message').innerText = message
  toastDiv.classList.add('show')
  toastTimeoutTimer = setTimeout(()=> {

    toastDiv.classList.remove('show')
  }, 3000)
}
