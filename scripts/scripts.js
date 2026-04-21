function hamburger() {
  var links = document.getElementById("menu-links");

  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

function toggleContent(id) {
  var content = document.getElementById(id);

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
