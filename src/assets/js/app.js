"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    items.forEach((item, index) => {
      if (item && item instanceof Element) {
        const xOffset = index % 2 === 0 ? x : -x;
        const yOffset = -y * (index + 1) * 10;

        item.style.transform = `translate(${
          xOffset * (index + 1) * 20
        }px, ${yOffset}px)`;
      }
    });
  });
});
