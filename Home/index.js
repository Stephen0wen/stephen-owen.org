const projectTiles = [...document.getElementsByClassName("project-tile")];
const profileLinks = [...document.getElementsByClassName("profile-link")];

projectTiles.forEach((tile) => {
    addScaleListeners(tile);
});

profileLinks.forEach((profileLink) => {
    addScaleListeners(profileLink);
});

function addScaleListeners(htmlObject) {
    htmlObject.addEventListener("mouseover", bigScale);
    htmlObject.addEventListener("mouseout", resetScale);
    htmlObject.addEventListener("focus", bigScale);
    htmlObject.addEventListener("blur", resetScale);
}

function bigScale() {
    this.style.transform = "scale(1.08)";
    this.style.transition = "200ms";
}

function resetScale() {
    this.style.transform = "scale(1)";
    this.style.transition = "200ms";
}
