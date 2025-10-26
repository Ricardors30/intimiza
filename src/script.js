// Script mínimo: scroll do botão e comportamento responsivo do menu (exemplo)
const explorarBtn = document.getElementById('explorarBtn');
if (explorarBtn) {
explorarBtn.addEventListener('click', () => {
const produtos = document.querySelector('section[aria-label="produtos"]') || document.querySelector('section:nth-of-type(3)');
if (produtos) produtos.scrollIntoView({ behavior: 'smooth' });
});
}


// Exemplo: adaptar menu para toque (colapsar em telas pequenas)
// Simples toggler: (adicione um botão toggle no HTML se quiser usar)


// Função utilitária: keep images cover on load (improve layout jank)
document.querySelectorAll('img').forEach(img => {
img.addEventListener('error', () => img.classList.add('opacity-50'));
});
// script.js

// Alterna a visibilidade do menu mobile
const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Captura o envio do formulário e exibe mensagem de sucesso
const newsletterForm = document.getElementById("newsletterForm");
const successMessage = document.getElementById("successMessage");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(newsletterForm);

    try {
      const response = await fetch(newsletterForm.action, {
        method: newsletterForm.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        newsletterForm.reset();
        successMessage.classList.remove("hidden");
        successMessage.textContent =
          "✅ Obrigada! Sua inscrição foi enviada com sucesso 💕";

        // Oculta a mensagem após 5 segundos
        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 5000);
      } else {
        successMessage.classList.remove("hidden");
        successMessage.textContent =
          "⚠️ Ocorreu um erro ao enviar. Tente novamente.";
      }
    } catch (error) {
      successMessage.classList.remove("hidden");
      successMessage.textContent =
        "⚠️ Erro de conexão. Verifique sua internet e tente novamente.";
    }
  });
}
