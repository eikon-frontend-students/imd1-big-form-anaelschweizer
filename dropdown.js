const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".dropdown__trigger");
  const placeholder = dropdown.querySelector(".dropdown__placeholder");
  const hiddenInput = dropdown.querySelector("input[type='hidden']");
  const items = dropdown.querySelectorAll(".dropdown__item");

  trigger.addEventListener("click", () => {
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove("open");

        const otherTrigger = otherDropdown.querySelector(".dropdown__trigger");

        otherTrigger.setAttribute("aria-expanded", "false");
      }
    });

    dropdown.classList.toggle("open");

    trigger.setAttribute("aria-expanded", dropdown.classList.contains("open"));
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      placeholder.textContent = item.textContent.trim();
      hiddenInput.value = item.dataset.value;

      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    });
  });
});

document.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown__trigger");

    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(".dropdown__trigger");

      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    });
  }
});
