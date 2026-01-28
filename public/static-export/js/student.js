// Student Portal Specific JavaScript

// Toggle mobile sidebar
function toggleStudentSidebar() {
  const sidebar = document.querySelector('.student-sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

// Close sidebar when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector('.sidebar-overlay');
  if (overlay) {
    overlay.addEventListener('click', toggleStudentSidebar);
  }
});

// Tab switching for swap requests
function switchTab(tabId) {
  // Update tab triggers
  document.querySelectorAll('.tab-trigger').forEach(trigger => {
    trigger.classList.remove('active');
    if (trigger.dataset.tab === tabId) {
      trigger.classList.add('active');
    }
  });
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.style.display = 'none';
    if (content.id === tabId) {
      content.style.display = 'block';
    }
  });
}

// Image upload preview
function handleImageUpload(input) {
  const preview = document.getElementById('imagePreview');
  const upload = document.getElementById('imageUpload');
  
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `
        <img src="${e.target.result}" alt="Preview">
        <button class="image-preview-remove" onclick="removeImage()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      `;
      preview.style.display = 'block';
      upload.style.display = 'none';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function removeImage() {
  const preview = document.getElementById('imagePreview');
  const upload = document.getElementById('imageUpload');
  const input = document.getElementById('bookImage');
  
  preview.style.display = 'none';
  preview.innerHTML = '';
  upload.style.display = 'flex';
  input.value = '';
}

// Toggle swap only switch
function toggleSwapOnly() {
  const toggle = document.getElementById('swapOnlyToggle');
  const priceField = document.getElementById('priceField');
  
  toggle.classList.toggle('active');
  
  if (toggle.classList.contains('active')) {
    priceField.style.display = 'none';
  } else {
    priceField.style.display = 'block';
  }
}

// Profile edit toggle
let isEditingProfile = false;

function toggleProfileEdit() {
  isEditingProfile = !isEditingProfile;
  const inputs = document.querySelectorAll('.profile-form input, .profile-form textarea');
  const editBtn = document.getElementById('editProfileBtn');
  const saveBtn = document.getElementById('saveProfileBtn');
  const cancelBtn = document.getElementById('cancelProfileBtn');
  
  inputs.forEach(input => {
    input.disabled = !isEditingProfile;
  });
  
  if (isEditingProfile) {
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline-flex';
    cancelBtn.style.display = 'inline-flex';
  } else {
    editBtn.style.display = 'inline-flex';
    saveBtn.style.display = 'none';
    cancelBtn.style.display = 'none';
  }
}

function saveProfile() {
  alert('Profile saved successfully!');
  toggleProfileEdit();
}

function cancelProfileEdit() {
  toggleProfileEdit();
}

// Add book form submission
function handleAddBook(e) {
  e.preventDefault();
  alert('Book listed successfully!');
  window.location.href = 'student-my-books.html';
}

// Accept/Decline swap request
function acceptSwap(id) {
  alert('Swap request accepted! You can now chat with the user.');
}

function declineSwap(id) {
  alert('Swap request declined.');
}

// Filter borrowed books
function filterBorrowedBooks() {
  const status = document.getElementById('borrowedStatusFilter').value;
  const search = document.getElementById('borrowedSearch').value.toLowerCase();
  const cards = document.querySelectorAll('.borrowed-card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const cardStatus = card.dataset.status;
    const cardTitle = card.dataset.title.toLowerCase();
    const cardAuthor = card.dataset.author.toLowerCase();
    
    const matchesStatus = status === 'all' || cardStatus === status;
    const matchesSearch = cardTitle.includes(search) || cardAuthor.includes(search);
    
    if (matchesStatus && matchesSearch) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });
}
