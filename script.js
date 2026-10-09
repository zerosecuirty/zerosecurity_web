(() => {
  const config = window.ZEROSECUIRTY_CONFIG || {};
  const nav = document.querySelector(".primary-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const toast = document.getElementById("site-toast");
  let toastTimer;

  document.getElementById("year").textContent = new Date().getFullYear();

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 5000);
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }));
  }

  document.querySelectorAll(".course-enquiry").forEach(link => {
    link.addEventListener("click", () => {
      const course = link.dataset.course || "";
      const courseField = document.querySelector('#guidance-form [name="interest"]');
      if (courseField) {
        const matching = [...courseField.options].find(option => option.textContent.trim() === course);
        if (matching) courseField.value = matching.value;
      }
    });
  });

  function makeMessage(form, type) {
    const data = new FormData(form);
    const rows = [];
    rows.push(`ZEROSECUIRTY - ${type}`);
    for (const [key, value] of data.entries()) {
      if (key === "consent") continue;
      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase());
      rows.push(`${label}: ${String(value).trim()}`);
    }
    rows.push("", "Please contact me about this enquiry.");
    return rows.join("\n");
  }

  function sendEnquiry(form, type) {
    const message = makeMessage(form, type);
    const whatsappNumber = String(config.whatsappNumber || "").replace(/\D/g, "");
    const email = String(config.contactEmail || "").trim();

    if (whatsappNumber) {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      showToast("Your enquiry message is ready in WhatsApp. Send it there to contact the institute.");
      return;
    }
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const subject = encodeURIComponent(`ZEROSECUIRTY enquiry: ${type}`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      showToast("Your email draft is ready. Send it from your email application.");
      return;
    }
    showToast("Before enquiries can be sent, add your WhatsApp number or contact email in config.js, then upload the updated files to GitHub.");
    const feedback = form.querySelector(".form-feedback");
    if (feedback) feedback.textContent = "Your details passed validation, but no contact destination is configured yet. Add a WhatsApp number or email in config.js to send this enquiry.";
  }

  document.querySelectorAll("form[data-form-type]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      sendEnquiry(form, form.dataset.formType || "Course enquiry");
    });
  });

  const note = document.getElementById("contact-config-note");
  if (note) {
    if (config.whatsappNumber || config.contactEmail) {
      note.textContent = "Contact options are configured. Test each enquiry before launch.";
    } else {
      note.textContent = "Website owner: add your WhatsApp number or email in config.js to receive enquiries.";
    }
  }

  // Contact detail placeholders can be configured without editing page layout.
  if (config.instituteAddress) {
    const locationPill = document.querySelector(".location-pill");
    if (locationPill) locationPill.innerHTML = '<span class="status-dot"></span> ' + String(config.instituteAddress).replace(/[<>&"]/g, "");
  }
})();
