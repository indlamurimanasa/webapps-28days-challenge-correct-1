rscl function checkVote() {
  let age = document.getElementById("age").value;
  let result = document.getElementById("result");

  if (age === "") {
    result.textContent = "Please enter your age";
    result.style.color = "red";
  } else if (age >= 18) {
    result.textContent = "You are eligible to vote ✅";
    result.style.color = "green";
  } else {
    result.textContent = "You are not eligible to vote ❌";
    result.style.color = "red";
  }
}



