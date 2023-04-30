
// document.getElementById("search-btn").addEventListener("click", function(event) {
// 	event.preventDefault(); // prevent form from submitting
// 	let searchTerm = document.getElementById("search-input").value;
// 	if (searchTerm.trim() !== "") {
// 		alert("You searched for: " + searchTerm);
// 	} else {
// 		alert("Please enter a search term.");
// 	}
// });

const companies = [
    { name: "Amazon", link: "https://example.com/company1", button: "Learn More" },
    { name: "Walmart", link: "https://example.com/company2", button: "Learn More" },
    { name: "Juspay", link: "https://example.com/company3", button: "Learn More" },
    { name: "Nutanix", link: "https://example.com/company4", button: "Learn More" },
    { name: "E & Y", link: "https://example.com/company5", button: "Learn More" },
    { name: "Optum", link: "https://example.com/company6", button: "Learn More" }
  ];
  
  const container = document.getElementById("card-container");

  companies.forEach((company) => {
    const col = document.createElement("div");
    col.classList.add("col-sm-6", "col-md-4");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card", "mb-4", "box-shadow");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = company.name;

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Welcome to " + company.name;

    const cardBodyInner = document.createElement("div");
    cardBodyInner.classList.add("card-body","text-center");
    cardBodyInner.appendChild(cardHeader);
    cardBodyInner.appendChild(cardTitle);

    const link = document.createElement("a");
    link.href = company.link;

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = company.button;

    link.appendChild(button);
    cardBody.appendChild(cardBodyInner);
    cardBody.appendChild(link);
    col.appendChild(cardBody);
    container.appendChild(col);
  });




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
  