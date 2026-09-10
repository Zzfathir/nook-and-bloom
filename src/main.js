import "./style.css";
import faviconUrl from "./assets/ic-nooknbloom.png";

document.querySelector("#site-favicon").href = faviconUrl;

const analyticsId = import.meta.env.VITE_GA_ID;
if (analyticsId) {
  const analyticsScript = document.createElement("script");
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
  document.head.appendChild(analyticsScript);
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer.push(args);
  window.gtag("js", new Date());
  window.gtag("config", analyticsId, { anonymize_ip: true });
}

const menu = {
  Coffee: [
    ["Espresso", "RM8", "A short, rich shot with a caramel finish"],
    ["Americano", "RM9", "Espresso lengthened with hot water"],
    ["Cappuccino", "RM12", "Velvety milk, cocoa dust and a soft foam"],
    ["Latte", "RM13", "Silky steamed milk and our house blend"],
    ["Mocha", "RM14", "Dark chocolate, espresso and steamed milk"],
    ["Iced Latte", "RM14", "Chilled milk and espresso over ice"],
  ],
  Bakes: [
    ["Butter Croissant", "RM9", "Flaky, golden and baked fresh each morning"],
    ["Almond Croissant", "RM12", "Frangipane, toasted almonds and pastry"],
    ["Pain au Chocolat", "RM11", "Layers of butter pastry with dark chocolate"],
    ["Cinnamon Roll", "RM10", "Brown sugar, cinnamon and a light glaze"],
    ["Banana Bread", "RM9", "Ripe bananas, walnuts and a warm crumb"],
  ],
  Brunch: [
    ["Big Breakfast", "RM24", "Eggs, sourdough, mushrooms, greens and sausage"],
    ["Mushroom Toast", "RM19", "Garlic mushrooms, whipped ricotta and herbs"],
    ["Chicken Pesto Sandwich", "RM21", "Roast chicken, pesto, greens and toasted bread"],
    ["Eggs Benedict", "RM23", "Poached eggs, ham, brioche and hollandaise"],
    ["Pancake Stack", "RM18", "Fluffy pancakes, berries and maple butter"],
  ],
};

const menuList = document.querySelector("#menu-list");
function renderMenu(category = "Coffee") {
  menuList.innerHTML = menu[category].map(([name, price, description]) => `<article class="menu-item"><div class="menu-item-name"><h3>${name}</h3><span></span><strong>${price}</strong></div><p>${description}</p></article>`).join("");
}

renderMenu();
document.querySelectorAll(".tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderMenu(tab.dataset.category);
  }),
);

// mobile nav toggle
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  document.body.classList.toggle("nav-open", !open);
});

document.querySelectorAll(".mobile-nav a").forEach((link) =>
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }),
);


// form submission handling
const form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const error = form.querySelector(`[data-error="${field.name}"]`);
    const fieldLabel = field.closest("label").firstChild.textContent.replace("*", "").trim();
    const message = field.type === "email" && field.value && !field.validity.valid ? "Please enter a valid email." : `${fieldLabel} is required.`;
    if (!field.value.trim() || (field.type === "email" && !field.validity.valid)) {
      valid = false;
      field.setAttribute("aria-invalid", "true");
      if (error) error.textContent = message;
    } else {
      field.removeAttribute("aria-invalid");
      if (error) error.textContent = "";
    }
  });
  if (!valid) return;

  const success = form.querySelector(".form-success");
  const submitButton = form.querySelector(".submit-button");
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(form)).toString(),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      success.textContent = "Thanks! Your message has been sent. We will get back to you soon.";
      success.hidden = false;
    })
    .catch(() => {
      success.textContent = "Something went wrong. Please email us directly at hello@nookandbloom.my.";
      success.hidden = false;
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = "Send message <span>↗</span>";
    });
});

form.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    field.removeAttribute("aria-invalid");
    const error = form.querySelector(`[data-error="${field.name}"]`);
    if (error) error.textContent = "";
  });
});

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal, section > *:not(.section-label)").forEach((element) => observer.observe(element));
