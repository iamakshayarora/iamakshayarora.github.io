document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling (exclude external links)
    document.querySelectorAll('.nav-link').forEach(anchor => {
      if (!anchor.hasAttribute('target')) { // Skip links with target="_blank"
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    });
  
    // Scrollspy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#sidebar',
      offset: 50
    });
  
    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
  
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Section Fade-In Animation
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sections.forEach(section => observer.observe(section));

    // Sidebar Toggle (update main content margin)
    const sidebar = document.querySelector('#sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebar.addEventListener('show.bs.collapse', () => {
    mainContent.classList.remove('sidebar-collapsed');
    });
    sidebar.addEventListener('hide.bs.collapse', () => {
    mainContent.classList.add('sidebar-collapsed');
    });
  
    // Skills Chart (Radar Chart)
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Python', 'SQL', 'JavaScript', 'Tableau', 'R', 'Cloud Tech'],
        datasets: [{
          label: 'Technical Skills',
          data: [90, 95, 65, 75, 80, 85],
          backgroundColor: 'rgba(76, 97, 175, 0.2)',
          borderColor: '#8462a9 ',
          borderWidth: 3,
          pointBackgroundColor: '#8462a9'
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              color: '#ffffff', // Color of the text
              showLabelBackdrop: true, // Enable the backdrop
              backdropColor: 'rgba(0, 0, 0, 0.1)', // Color of the backdrop (semi-transparent black)
              backdropPadding: 3
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            angleLines: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            pointLabels: {
              color: '#e6e6e6'
            }
          }
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              color: '#e6e6e6'
            }
          }
        }
      }
    });
  });