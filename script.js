function toggleStoryMode() {
  const story = document.getElementById("storyMode");
  story.classList.toggle("hidden");
  window.scrollTo({ top: story.offsetTop, behavior: "smooth" });
}

function startBuilding() {
  document.getElementById("storyMode").classList.remove("hidden");
  window.scrollTo({ top: document.getElementById("storyMode").offsetTop, behavior: "smooth" });
}

function setMode(mode) {
  alert(`Switched to ${mode} mode. You can customize this behavior in JS.`);
}

// Live preview functionality
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("aboutYou");
  const preview = document.getElementById("previewBox");

  if (input) {
    input.addEventListener("input", () => {
      preview.textContent = input.value.trim() || "Your story will appear here...";
    });
  }
});
