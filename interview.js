const interviews = {
  "h": "신혜령 인터뷰 내용...\n",
  "hs": "최한수 인터뷰 내용...\n",
  "sy": "임성연 인터뷰...\n",
  "js": "김지수 인터뷰...\n"
};

document.querySelectorAll(".hotspot").forEach(spot => {
  spot.addEventListener("click", () => {
    let key = spot.dataset.target;
    showInterview(interviews[key]);
  });
});

function showInterview(text) {
  const screen = document.getElementById("interview-screen");
  const typing = document.getElementById("typing-text");
  typing.textContent = "";
  screen.style.display = "flex";
  typeWriter(text, 0);
}

function typeWriter(text, i) {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i+1), 40);
  }
}

document.getElementById("interview-screen").addEventListener("click", () => {
  document.getElementById("interview-screen").style.display = "none";
});
