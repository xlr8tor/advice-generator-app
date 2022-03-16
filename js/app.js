const span = document.getElementById("id");
const para = document.getElementById("advice");
const btn = document.querySelector(".btn");

const URL = `https://api.adviceslip.com/advice`;

const getData = async () => {
  const {
    slip: { id, advice },
  } = await (await fetch(URL)).json();
  span.textContent = id;
  para.textContent = `"${advice}"`;
};

getData();
btn.addEventListener("click", () => {
  getData();
});
