const stalkers = ["stalker1", "stalker2"];

document.addEventListener("mousemove", (e) => {
  stalkers.forEach((id) => {
    const stalker = document.getElementById(id);
    stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});
