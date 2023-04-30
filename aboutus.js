document.addEventListener('DOMContentLoaded', function() {
    // Get the Career Advice link from the navbar
    const AboutUsLink = document.querySelector('nav ul li:nth-of-type(4) a');
  
    // Add a click event listener to the Career Advice link
    AboutUsLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
  
      // Get the main section of the page
      const mainSection = document.querySelector('main');
  
      // Create the first circular card
      const card1 = document.createElement('div');
      card1.classList.add('card', 'text-center', 'bg-secondary', 'text-white', 'mx-auto', 'card-circle');
      card1.innerHTML = `
        <div class="card-body">
          <div>
            <h5 class="card-title">Varshik Jain</h5>
            <p class="card-text">Data Analyst at Optum (UHG)</p>
          </div>
        </div>
      `;
  
      // Create the second circular card
      const card2 = document.createElement('div');
      card2.classList.add('card', 'text-center', 'bg-secondary', 'text-white', 'mx-auto', 'card-circle');
      card2.innerHTML = `
        <div class="card-body">
          <div>
            <h5 class="card-title">Deepak Bathija</h5>
            <p class="card-text">Software Engineer at E&amp;Y</p>
          </div>
        </div>
      `;
  
      // Remove any existing content from the main section
      while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild);
      }
  
      // Add the cards to the main section
      mainSection.appendChild(card1);
      mainSection.appendChild(card2);
  
      // Add flex classes to the main section
      mainSection.classList.add('d-flex', 'flex-row');
    });
  });