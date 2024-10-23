// JavaScript for the job dashboard functionalities

// Search job functionality
const searchInput = document.querySelector('.search_bar input[type="search"]');
const jobCards = document.querySelectorAll('.job_card');

// Add event listener to the search input
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  jobCards.forEach(card => {
    const jobTitle = card.querySelector('.text h2').textContent.toLowerCase();
    if (jobTitle.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Filter jobs by category
const categorySelect = document.querySelector('.search_bar select');
categorySelect.addEventListener('change', (e) => {
  const selectedCategory = e.target.value.toLowerCase();
  jobCards.forEach(card => {
    const jobDetails = card.querySelector('.text span').textContent.toLowerCase();
    if (jobDetails.includes(selectedCategory) || selectedCategory === 'category') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Tag removal functionality
const tags = document.querySelectorAll('.tag i');
tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.parentElement.remove();
  });
});

// Responsive Navbar functionality (optional)
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle'); // Assume you add a menu button for mobile
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active'); // Add a class to show/hide the navbar on mobile
});

// Dynamically update jobs (placeholder example)
function loadMoreJobs() {
  // You could fetch more jobs from an API and append them here
  const jobList = document.querySelector('.main-body');
  const newJobCard = document.createElement('div');
  newJobCard.className = 'job_card';
  newJobCard.innerHTML = `
    <div class="job_details">
      <div class="img"><i class="fab fa-microsoft"></i></div>
      <div class="text">
        <h2>Software Engineer</h2>
        <span>Microsoft - Junior Post</span>
      </div>
    </div>
    <div class="job_salary">
      <h4>$7k - $14k /yr</h4>
      <span>5 days ago</span>
    </div>
  `;
  jobList.appendChild(newJobCard);
}
