// BookNest Static Export - Shared JavaScript

// Mobile Navigation Toggle
function toggleMobileNav() {
  const nav = document.querySelector('.nav');
  const buttons = document.querySelector('.header-buttons');
  
  if (!nav || !buttons) return;
  
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    buttons.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--card)';
    nav.style.padding = '1rem';
    nav.style.borderTop = '1px solid var(--border)';
    nav.style.gap = '1rem';
    
    buttons.style.display = 'flex';
    buttons.style.position = 'absolute';
    buttons.style.top = 'calc(100% + 150px)';
    buttons.style.left = '0';
    buttons.style.right = '0';
    buttons.style.background = 'var(--card)';
    buttons.style.padding = '1rem';
    buttons.style.justifyContent = 'center';
    buttons.style.borderBottom = '1px solid var(--border)';
  }
}

// Accordion functionality
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        accordionItems.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Password visibility toggle
function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  const icon = document.querySelector(`[data-toggle="${inputId}"]`);
  
  if (input && icon) {
    if (input.type === 'password') {
      input.type = 'text';
      icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;
    } else {
      input.type = 'password';
      icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    }
  }
}

// Form submission handlers
function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Show loading state
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  
  // Simulate login
  setTimeout(() => {
    alert('Welcome back! Redirecting to browse...');
    window.location.href = 'browse.html';
  }, 1000);
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Creating Account...';
  btn.disabled = true;
  
  setTimeout(() => {
    alert('Account created! Welcome to BookNest.');
    window.location.href = 'browse.html';
  }, 1000);
}

function handleContactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  setTimeout(() => {
    alert('Message sent! We\'ll get back to you within 24-48 hours.');
    e.target.reset();
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 1000);
}

// Search functionality
function handleSearch(e) {
  if (e.key === 'Enter') {
    const query = e.target.value;
    if (query.trim()) {
      alert('Searching for: ' + query);
    }
  }
}

// Filter books (for browse page)
function filterBooks() {
  const searchTerm = document.getElementById('searchInput')?.value?.toLowerCase() || '';
  const category = document.getElementById('categoryFilter')?.value || 'all';
  const condition = document.getElementById('conditionFilter')?.value || 'all';
  
  const bookCards = document.querySelectorAll('.book-card');
  let visibleCount = 0;
  
  bookCards.forEach(card => {
    const title = card.dataset.title?.toLowerCase() || '';
    const author = card.dataset.author?.toLowerCase() || '';
    const bookCategory = card.dataset.category || '';
    const bookCondition = card.dataset.condition || '';
    
    const matchesSearch = title.includes(searchTerm) || author.includes(searchTerm);
    const matchesCategory = category === 'all' || bookCategory === category;
    const matchesCondition = condition === 'all' || bookCondition === condition;
    
    if (matchesSearch && matchesCategory && matchesCondition) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
  
  // Update results count
  const countEl = document.getElementById('resultsCount');
  if (countEl) {
    countEl.textContent = visibleCount;
  }
}

// Chat functionality (for book detail page)
function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const messagesContainer = document.getElementById('chatMessages');
  
  if (!input || !messagesContainer || !input.value.trim()) return;
  
  const message = input.value.trim();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const messageEl = document.createElement('div');
  messageEl.style.cssText = 'display: flex; justify-content: flex-end; margin-bottom: 0.75rem;';
  messageEl.innerHTML = `
    <div style="max-width: 80%; border-radius: 1rem; padding: 0.5rem 1rem; background: var(--hero-gradient); color: white;">
      <p style="font-size: 0.875rem;">${message}</p>
      <p style="font-size: 0.75rem; margin-top: 0.25rem; opacity: 0.7;">${time}</p>
    </div>
  `;
  
  messagesContainer.appendChild(messageEl);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  input.value = '';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize accordion if present
  initAccordion();
  
  // Add search input listener
  const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"]');
  searchInputs.forEach(input => {
    input.addEventListener('keypress', handleSearch);
  });
  
  // Initialize filter listeners
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const conditionFilter = document.getElementById('conditionFilter');
  
  if (searchInput) searchInput.addEventListener('input', filterBooks);
  if (categoryFilter) categoryFilter.addEventListener('change', filterBooks);
  if (conditionFilter) conditionFilter.addEventListener('change', filterBooks);
  
  // Chat input enter key
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendChatMessage();
    });
  }
});

// Category click handler
function browseCategory(category) {
  window.location.href = `browse.html?category=${encodeURIComponent(category)}`;
}
