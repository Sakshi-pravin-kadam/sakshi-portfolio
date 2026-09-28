/**
 * Sakshi Kadam - Developer Portfolio Main Interactive Engine
 * Handles navigation, mobile menu, scroll spy, project modals,
 * resume viewer, contact validation, and micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initScrollSpy();
  initContactForm();
  initProjectModals();
  initResumeModal();
  initCopyEmail();
  initBackToTop();
});

/**
 * Navbar scroll visual refinement
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileNav || !backdrop) return;

  const openMenu = () => {
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    backdrop.classList.add('visible');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    backdrop.classList.remove('visible');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * Scroll Spy - Active section indicator
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        setActiveLink(id);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  function setActiveLink(sectionId) {
    let targetId = sectionId;
    if (sectionId === 'exploring') targetId = 'skills';
    if (sectionId === 'experience') targetId = 'projects';

    desktopLinks.forEach(link => {
      if (link.getAttribute('href') === `#${targetId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      if (link.getAttribute('href') === `#${targetId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

/**
 * Project Details Modal
 */
function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBody = document.getElementById('modal-project-body');
  const modalLiveBtn = document.getElementById('modal-live-btn');
  const modalRepoBtn = document.getElementById('modal-repo-btn');
  const closeBtn = document.getElementById('project-modal-close');

  if (!modalOverlay || !closeBtn) return;

  const openProjectModal = (projectId) => {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    modalTitle.textContent = project.title;

    let badgeClass = 'badge-academic';
    if (project.badgeType === 'live') badgeClass = 'badge-live-pulse';
    else if (project.badgeType === 'system') badgeClass = 'badge-java';

    let contentHtml = `
      ${project.secondaryImage ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-bottom: 20px;">
          <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-card); box-shadow: 0 4px 16px rgba(0,0,0,0.4); background: #0b1120;">
            <div style="padding: 6px 12px; background: #0f172a; font-family: var(--font-mono); font-size: 0.72rem; color: #38bdf8; border-bottom: 1px solid #1e293b; display: flex; align-items: center; justify-content: space-between;">
              <span>${project.previewLabel || 'Main Overview'}</span>
              <span style="color: #64748b; font-size: 0.68rem;">UI View</span>
            </div>
            <img src="${project.previewImage}" alt="${project.title} Preview" style="width: 100%; height: auto; display: block;">
          </div>
          <div style="border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-card); box-shadow: 0 4px 16px rgba(0,0,0,0.4); background: #0b1120;">
            <div style="padding: 6px 12px; background: #0f172a; font-family: var(--font-mono); font-size: 0.72rem; color: #38bdf8; border-bottom: 1px solid #1e293b; display: flex; align-items: center; justify-content: space-between;">
              <span>${project.secondaryLabel || 'Feature View'}</span>
              <span style="color: #64748b; font-size: 0.68rem;">Feature View</span>
            </div>
            <img src="${project.secondaryImage}" alt="${project.title} Feature" style="width: 100%; height: auto; display: block;">
          </div>
        </div>
      ` : project.previewImage ? `
        <div style="margin-bottom: 20px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-card); box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
          <img src="${project.previewImage}" alt="${project.title}" style="width: 100%; height: auto; display: block;">
        </div>
      ` : ''}
      <div style="margin-bottom: 20px;">
        <span class="project-badge ${badgeClass}" style="margin-bottom: 12px;">${project.badge}</span>
        <p style="font-size: 1.05rem; color: var(--text-primary); margin-top: 10px;">${project.description}</p>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 0.95rem; text-transform: uppercase; color: var(--accent-cyan); font-family: var(--font-mono); margin-bottom: 10px;">Technology Architecture</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; background: rgba(11, 17, 32, 0.7); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          ${Object.entries(project.stack).map(([k, v]) => `
            <div>
              <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-dim); display: block;">${k}:</span>
              <span style="font-size: 0.88rem; font-weight: 600; color: #ffffff;">${v}</span>
            </div>
          `).join('')}
        </div>
      </div>

      ${project.deploymentHistory ? `
        <div class="project-deployment-note" style="margin-bottom: 24px;">
          <span>🚀</span>
          <span><strong>Deployment History:</strong> ${project.deploymentHistory}</span>
        </div>
      ` : ''}

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 0.95rem; text-transform: uppercase; color: var(--accent-cyan); font-family: var(--font-mono); margin-bottom: 12px;">Key Capabilities & Features</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
          ${project.features.map(f => `
            <li style="display: flex; gap: 10px; font-size: 0.9rem; color: var(--text-secondary);">
              <span style="color: var(--accent-cyan); font-weight: bold;">✓</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;

    modalBody.innerHTML = contentHtml;

    if (project.liveUrl) {
      modalLiveBtn.style.display = 'inline-flex';
      modalLiveBtn.href = project.liveUrl;
    } else {
      modalLiveBtn.style.display = 'none';
    }

    if (project.githubUrl) {
      modalRepoBtn.style.display = 'inline-flex';
      modalRepoBtn.href = project.githubUrl;
    } else {
      modalRepoBtn.style.display = 'none';
    }

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-open-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-open-project');
      openProjectModal(pId);
    });
  });

  closeBtn.addEventListener('click', closeProjectModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeProjectModal();
    }
  });
}

/**
 * Resume Preview / Download Modal
 */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('resume-modal-close');

  if (!resumeModal || !closeBtn) return;

  const openResumeModal = () => {
    resumeModal.classList.add('open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeResumeModal = () => {
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-open-resume]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  closeBtn.addEventListener('click', closeResumeModal);

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResumeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.classList.contains('open')) {
      closeResumeModal();
    }
  });
}

/**
 * Copy Email to Clipboard with Toast Notification
 */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}

/**
 * Contact Form Validation & State Handling
 */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const statusMsg = document.getElementById('form-status-msg');
  const submitBtn = document.getElementById('contact-submit-btn');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const setGroupError = (inputEl, hasError) => {
    const group = inputEl.closest('.form-group');
    if (group) {
      if (hasError) {
        group.classList.add('has-error');
      } else {
        group.classList.remove('has-error');
      }
    }
  };

  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      setGroupError(input, false);
      statusMsg.style.display = 'none';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setGroupError(nameInput, true);
      isValid = false;
    } else {
      setGroupError(nameInput, false);
    }

    // Validate Email
    if (!validateEmail(emailInput.value.trim())) {
      setGroupError(emailInput, true);
      isValid = false;
    } else {
      setGroupError(emailInput, false);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      setGroupError(subjectInput, true);
      isValid = false;
    } else {
      setGroupError(subjectInput, false);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setGroupError(messageInput, true);
      isValid = false;
    } else {
      setGroupError(messageInput, false);
    }

    if (!isValid) {
      statusMsg.className = 'form-status error';
      statusMsg.textContent = 'Please fill out all required fields correctly before sending.';
      statusMsg.style.display = 'block';
      return;
    }

    // Show Loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Prepare and launch WhatsApp message
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      // Format WhatsApp message text
      const waText = `Hi Sakshi,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
      const waNumber = PORTFOLIO_DATA.personal.whatsappNumber || '918421941464';
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

      // Fallback mailto link
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message)}`;

      statusMsg.className = 'form-status success';
      statusMsg.innerHTML = `
        <strong>Thank you, ${name}!</strong> Your message is ready for WhatsApp.
        <div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 10px;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #25d366; color: #04101e; font-weight: 700; border: none; display: inline-flex; align-items: center; gap: 6px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            <span>Open in WhatsApp</span>
          </a>
          <a href="${mailtoUrl}" class="btn btn-sm btn-secondary" style="font-size: 0.82rem;">
            <span>Or Send via Email</span>
          </a>
        </div>
      `;
      statusMsg.style.display = 'block';

      // Automatically launch WhatsApp in a new tab/app
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      form.reset();
      showToast('Opening WhatsApp with your message!');
    }, 600);
  });
}

/**
 * Back to Top Smooth Scroll
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
