const companies = [
  { name: "Amazon", link: "https://example.com/company1", button: "Learn More" },
  { name: "Walmart", link: "https://example.com/company2", button: "Learn More" },
  { name: "Juspay", link: "https://example.com/company3", button: "Learn More" },
  { name: "Nutanix", link: "https://example.com/company4", button: "Learn More" },
  { name: "E & Y", link: "https://example.com/company5", button: "Learn More" },
  { name: "Optum", link: "https://example.com/company6", button: "Learn More" },
  { name: "Nokia", link: "https://example.com/company6", button: "Learn More" },
  { name: "Cognizant", link: "https://example.com/company6", button: "Learn More" },
  { name: "Accenture", link: "https://example.com/company6", button: "Learn More" },
  { name: "TCS", link: "https://example.com/company6", button: "Learn More" },
  { name: "National Instruments", link: "https://example.com/company6", button: "Learn More" },
  // ... Add more companies here
];

const cardsPerPage = 6;
const container = document.getElementById("card-container");
const paginationContainer = document.getElementById("pagination-container");

displayCards(1);

////
const searchButton = document.querySelector('#search button');
searchButton.addEventListener('click', searchCompanies);

// Use the companies array as needed

function searchCompanies(event) {
    event.preventDefault();
    const searchTerm = document.querySelector('#search-input').value;
    displayCards(1, searchTerm);
  }
