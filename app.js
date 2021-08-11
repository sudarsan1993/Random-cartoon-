const btn = document.getElementById("random-cartoon");
const container = document.querySelector(".img-container");
const head = document.querySelector("#heading");
const para = document.querySelector("p");

// event listerner

btn.addEventListener("click", random);

async function random() {
  container.style.display = "block";

  const cartoons = await fetch("https://finalspaceapi.com/api/v0/character");
  const character = await cartoons.json();

  const num = Math.ceil(Math.random() * 40);
  head.textContent = `${character[num].name}`;
  para.textContent = `${character[num].abilities}`;
  container.innerHTML = `
    <img src="${character[num].img_url}">`;
}
