// ===== 1. Welcome message on page load =====
document.getElementById("welcome").textContent = "Welcome to my portfolio page!";

// ===== 2. Dark mode / light mode toggle =====
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // Update the button text to match the current mode
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});

// ===== 3. Show / hide sections (Skills, Projects, Achievements) =====
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Each button stores the id of the section it controls
    const content = document.getElementById(button.dataset.target);

    if (content.style.display === "none") {
      content.style.display = "";
      button.textContent = "Hide";
    } else {
      content.style.display = "none";
      button.textContent = "Show";
    }
  });
});

// ===== 4. Add a new skill dynamically =====
const skillInput = document.getElementById("skill-input");
const addSkillBtn = document.getElementById("add-skill-btn");
const skillsList = document.getElementById("skills-list");

addSkillBtn.addEventListener("click", function () {
  const skill = skillInput.value.trim();

  // Ignore empty input
  if (skill === "") {
    return;
  }

  // Create a new list item and add it to the skills list
  const newSkill = document.createElement("li");
  newSkill.textContent = skill;
  skillsList.appendChild(newSkill);

  skillInput.value = "";
});
