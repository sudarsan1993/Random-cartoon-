const btn = document.getElementById("random-cartoon");
const container = document.querySelector(".img-container");
const head = document.querySelector("#heading");
const para = document.querySelector("p");

// event listerner

btn.addEventListener("click", random);

function random() {
  container.style.display = "block";
  fetch("https://finalspaceapi.com/api/v0/character")
    .then((res) => res.json())
    .then((data) => {
      const num = Math.ceil(Math.random() * 40);
      head.textContent = `${data[num].name}`;
      para.textContent = `${data[num].abilities}`;
      container.innerHTML = `
    <img src="${data[num].img_url}">`;
      console.log(data);
    });
}
