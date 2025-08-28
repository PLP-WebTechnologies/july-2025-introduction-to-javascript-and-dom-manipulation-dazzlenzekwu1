// ===============================
// Mastering JavaScript BASICS (Variables, Conditionals)
// ===============================

// Count how many dramas have been reviewed
function checkDramaCount() {
  let dramaList = document.querySelectorAll(".content article"); 
  let count = dramaList.length;

  if (count > 2) {
    document.getElementById("drama-count").textContent =
      `You have ${count} dramas reviewed already! Great job 👏`;
  } else {
    document.getElementById("drama-count").textContent =
      `Only ${count} dramas so far. Keep reviewing! ✍️`;
  }
}

// ===============================
// JavaScript FUNCTIONS
// ===============================

// Add a new drama to the "currently watching" sidebar
function checkDramaCount() {
  let dramaList = document.querySelectorAll(".content article"); 
  let count = dramaList.length;

  if (count > 2) {
    document.getElementById("drama-count").textContent =
      `You have ${count} dramas reviewed already! Great job 👏`;
  } else {
    document.getElementById("drama-count").textContent =
      `Only ${count} dramas so far. Keep reviewing! ✍️`;
  }
}

// Arrow function
const changeTitle = () => {
  document.getElementById("main-heading").textContent = "🎬 KDrama Haven!";
};

// Function expression
const formatDrama = function(name, genre) {
  return `${name} (${genre})`;
};
console.log(formatDrama("Goblin", "Fantasy Romance")); 

// ===============================
// JavaScript LOOPS
// ===============================

let recs = ["Reply 1988", "Crash Landing on You", "Vincenzo", "Hospital Playlist", "Goblin"];

function showRecsInConsole() {
  // For loop
  for (let i = 0; i < recs.length; i++) {
    console.log("Rec #" + (i + 1) + ":", recs[i]);
  }

  // While loop
  let count = recs.length;
  while (count > 0) {
    console.log("Counting down:", count);
    count--;
  }
}
showRecsInConsole(); 

// ===============================
// Part 4: DOM INTERACTIONS
// ===============================

// Toggle light/dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// 2. Highlight Favorite Drama
function highlightFavorite() {
  let fav = document.querySelector("article:nth-child(2)"); // Example: Reply 1988
  fav.classList.toggle("highlight");
}

// 3. Expand/Collapse Reviews
function toggleReview(articleId) {
  let extra = document.getElementById(articleId);
  extra.style.display = (extra.style.display === "none") ? "block" : "none";
}
