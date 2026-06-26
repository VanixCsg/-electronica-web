const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const backToTopButton = document.querySelector(".back-to-top");
const toast = document.querySelector("#toast");

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3200);
}

function closeMobileMenu() {
  if (!menuButton || !mobileNav) {
    return;
  }

  menuButton.setAttribute("aria-expanded", "false");
  mobileNav.classList.remove("is-open");

  const icon = menuButton.querySelector("img");
  if (icon) {
    icon.src = "assets/icons/menu.svg";
  }
}

function toggleMobileMenu() {
  if (!menuButton || !mobileNav) {
    return;
  }

  const isOpen = mobileNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));

  const icon = menuButton.querySelector("img");
  if (icon) {
    icon.src = isOpen ? "assets/icons/close.svg" : "assets/icons/menu.svg";
  }
}

function initMobileMenu() {
  if (!menuButton || !mobileNav) {
    return;
  }

  menuButton.addEventListener("click", toggleMobileMenu);

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}

function initBackToTop() {
  if (!backToTopButton) {
    return;
  }

  function updateBackToTop() {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 500);
  }

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  updateBackToTop();
  window.addEventListener("scroll", updateBackToTop, { passive: true });
}

function initDemoStatus() {
  const database = window.NovaVoltDB?.get();

  if (!database) {
    return;
  }

  const totalRequests = database.solicitudes.length;
  const savedMessage = `Demo local lista: ${totalRequests} orden guardada en localStorage.`;

  window.setTimeout(() => {
    showToast(savedMessage);
  }, 900);
}

function initNewsletterForms() {
  const forms = document.querySelectorAll("[data-newsletter-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const input = form.querySelector('input[type="email"]');
      const email = input?.value.trim();

      const result = window.NovaVoltDB?.contact.subscribe(email);

      if (!result?.ok) {
        showToast(result?.message || "No se pudo guardar el correo.");
        return;
      }

      form.reset();
      showToast("Correo guardado localmente en la demo.");
    });
  });
}

function initRepairForms() {
  const forms = document.querySelectorAll("[data-repair-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      const order = window.NovaVoltDB?.orders.create({
        cliente: String(formData.get("cliente") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        telefono: String(formData.get("telefono") || "").trim(),
        equipo: String(formData.get("equipo") || "").trim(),
        marca: String(formData.get("marca") || "").trim(),
        modelo: String(formData.get("modelo") || "").trim(),
        problema: String(formData.get("problema") || "").trim(),
        prioridad: String(formData.get("prioridad") || "media").trim(),
        fechaEstimada: String(formData.get("fechaEstimada") || "").trim()
      });

      if (!order) {
        showToast("No se pudo crear la solicitud.");
        return;
      }

      form.reset();
      showToast(`Solicitud creada: ${order.codigo}`);
    });
  });
}

function initTrackingForms() {
  const forms = document.querySelectorAll("[data-tracking-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const codeInput = form.querySelector("[name='codigo']");
      const resultBox = document.querySelector("[data-tracking-result]");
      const code = codeInput?.value.trim();

      const order = window.NovaVoltDB?.orders.findByCode(code);

      if (!resultBox) {
        return;
      }

      if (!order) {
        resultBox.innerHTML = `
          <div class="tracking-result error">
            <h3>Orden no encontrada</h3>
            <p>Verifica el codigo ingresado o crea una nueva solicitud.</p>
          </div>
        `;
        showToast("Orden no encontrada.");
        return;
      }

      resultBox.innerHTML = `
        <div class="tracking-result">
          <h3>${order.codigo}</h3>
          <p><strong>Cliente:</strong> ${order.cliente}</p>
          <p><strong>Equipo:</strong> ${order.equipo}</p>
          <p><strong>Estado:</strong> ${order.estado}</p>
          <p><strong>Problema:</strong> ${order.problema}</p>
        </div>
      `;

      showToast("Orden encontrada.");
    });
  });
}

function initContactForms() {
  const forms = document.querySelectorAll("[data-contact-form]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      const message = window.NovaVoltDB?.contact.sendMessage({
        nombre: String(formData.get("nombre") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        telefono: String(formData.get("telefono") || "").trim(),
        mensaje: String(formData.get("mensaje") || "").trim()
      });

      if (!message) {
        showToast("No se pudo guardar el mensaje.");
        return;
      }

      form.reset();
      showToast("Mensaje guardado localmente.");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initBackToTop();
  initNewsletterForms();
  initRepairForms();
  initTrackingForms();
  initContactForms();
  initDemoStatus();
});