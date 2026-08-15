const home = document.getElementById("home");
const game = document.getElementById("game");
const frame = document.getElementById("gameFrame");

document.getElementById("play").addEventListener("click", () => {
  home.style.display = "none";
  game.style.display = "block";
  frame.src = "https://www.googlesnake.com/";
});

document.getElementById("back").addEventListener("click", () => {
  frame.src = "about:blank";
  game.style.display = "none";
  home.style.display = "flex";
});

document.getElementById("fullscreen").addEventListener("click",()=>{chrome.tabs.create({url:"https://www.googlesnake.com/"});});
