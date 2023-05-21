const selectMoviesEle = document.getElementById("movies");
const seat1Checkbox = document.getElementById("seat1");
const seat2Checkbox = document.getElementById("seat2");
const seat3Checkbox = document.getElementById("seat3");
const seat4Checkbox = document.getElementById("seat4");
const seat5Checkbox = document.getElementById("seat5");
const alertMsg = document.getElementById("alert-msg");
const bookedPriceEle = document.getElementById("booked-price");
const totalPriceEle = document.getElementById("booked-price");

let gotMoviePrice = 0;
let totalPrice = 0;

// Register event listener: Change checkbox colors
seat1Checkbox.addEventListener("click", (event) => {
  event.target.classList.toggle("active-checkbox");
  if (event.target.classList.contains("active-checkbox")) {
    totalPrice += gotMoviePrice;
  } else {
    totalPrice -= gotMoviePrice;
  }
  totalPriceEle.innerHTML = `Total: ${totalPrice}`;
  showAlertMsg(true);
});
seat2Checkbox.addEventListener("click", (event) => {
  event.target.classList.toggle("active-checkbox");
  if (event.target.classList.contains("active-checkbox")) {
    totalPrice += gotMoviePrice;
  } else {
    totalPrice -= gotMoviePrice;
  }
  totalPriceEle.innerHTML = `Total: ${totalPrice}`;
  showAlertMsg(true);
});
seat3Checkbox.addEventListener("click", (event) => {
  event.target.classList.toggle("active-checkbox");
  if (event.target.classList.contains("active-checkbox")) {
    totalPrice += gotMoviePrice;
  } else {
    totalPrice -= gotMoviePrice;
  }
  totalPriceEle.innerHTML = `Total: ${totalPrice}`;
  showAlertMsg(true);
});
seat4Checkbox.addEventListener("click", (event) => {
  event.target.classList.toggle("active-checkbox");
  if (event.target.classList.contains("active-checkbox")) {
    totalPrice += gotMoviePrice;
  } else {
    totalPrice -= gotMoviePrice;
  }
  totalPriceEle.innerHTML = `Total: ${totalPrice}`;
  showAlertMsg(true);
});
seat5Checkbox.addEventListener("click", (event) => {
  event.target.classList.toggle("active-checkbox");
  if (event.target.classList.contains("active-checkbox")) {
    totalPrice += gotMoviePrice;
  } else {
    totalPrice -= gotMoviePrice;
  }
  totalPriceEle.innerHTML = `Total: ${totalPrice}`;
  showAlertMsg(true);
});

// Register event listener: Set movie price as per movie name
selectMoviesEle.addEventListener("change", (event) => {
  seat1Checkbox.checked = false;
  seat2Checkbox.checked = false;
  seat3Checkbox.checked = false;
  seat4Checkbox.checked = false;
  seat5Checkbox.checked = false;
  gotMoviePrice = Number(event.target.value) || 0;
  totalPrice = 0;
  totalPrice += gotMoviePrice;
  totalPriceEle.innerHTML = `Total: ${totalPrice}`;
  showAlertMsg(true);
});

const showAlertMsg = (shouldShow) => {
  if (shouldShow) {
    alertMsg.classList.remove("hide");
  } else {
    alertMsg.classList.add("hide");
  }
};

// Initial Execution
showAlertMsg(false);
