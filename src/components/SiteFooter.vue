
<template>
  <footer class="footer" id="contacto">
    <a class="footer__cv" :href="cvUrl" download>Descargar CV</a>

    <nav class="footer__social">
      <a :href="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a :href="github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>
      <a :href="`mailto:${email}`" aria-label="Correo">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </a>
    </nav>

    <p class="footer__copy">
      © {{ year }} José David Yepez Vanegas. Todos los derechos reservados.
    </p>
  </footer>
</template>

<script setup>
// Datos de contacto y enlaces del footer
const email = 'jdavidvanegas25@gmail.com'
const linkedin = 'https://www.linkedin.com/in/davidvanegas25/'
const github = 'https://github.com/DavidVanegas720'

// La ruta del CV vive en /public. BASE_URL aplica el base '/MyWeb/' en produccion.
const cvUrl = `${import.meta.env.BASE_URL}CV_Jose_David_Yepez_Vanegas.pdf`

// Anio dinamico para el copyright
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 48px 24px;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.footer__cv {
  display: inline-block;
  background: var(--color-accent);
  color: var(--color-accent-contrast);
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: var(--shadow);
  transition: transform var(--transition), opacity var(--transition);
}
.footer__cv:hover {
  transform: translateY(-2px);
  opacity: 0.92;
}
.footer__social {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 28px 0;
}
.footer__social a {
  color: var(--color-text-muted);
  display: inline-flex;
  transition: color var(--transition), transform var(--transition);
}
.footer__social a:hover {
  color: var(--color-accent);
  transform: translateY(-2px);
}
.footer__social svg {
  width: 24px;
  height: 24px;
}
.footer__copy {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
</style>
