const flipCard = document.querySelector(".flip-card");
const num = document.querySelector(".flip-card-back .title");
const gameButton = document.querySelector(".c-button");
const res = document.querySelector(".res");
const input = document.querySelector(".input");
const good = document.querySelector(".good");
const bad = document.querySelector(".bad");

let randomNum = Math.floor(Math.random() * 10) + 1; // Generate a random number when the page loads
num.textContent = randomNum; // Update the displayed number
let goodCount = 0;
let badCount = 0;

flipCard.addEventListener("click", () => {
  if (input.value !== "") {
    flipCard.classList.add("flipped");

    const enteredNum = parseInt(input.value);
    if (enteredNum === randomNum) {
      res.textContent = "Good";
      goodCount++;
      good.textContent = goodCount;
    } else {
      if (badCount === 4) {
        res.textContent = "انت فقر";
        badCount++;
        bad.textContent = badCount;
      } else {
        res.textContent = "Bad";
        badCount++;
        bad.textContent = badCount;
      }
    }

    // Automatically remove the flip effect after 2 seconds
    setTimeout(() => {
      flipCard.classList.remove("flipped");

      // Show SweetAlert popup after the flip effect is removed
      Swal.fire({
        title: res.textContent,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "again",
        denyButtonText: "no",
      }).then((result) => {
        if (result.isConfirmed) {
          randomNum = Math.floor(Math.random() * 10) + 1; // Generate a new random number
          num.textContent = randomNum; // Update the displayed number
          input.value = ""; // Clear the input field
        } else if (result.isDenied) {
          window.close();
        }
      });
    }, 2000);
  }
});
