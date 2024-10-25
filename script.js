const amount = document.getElementById("amount");

amount.oninput = () => {
  amount.value = amount.value.replace(/[^0-9]/g, "");
}