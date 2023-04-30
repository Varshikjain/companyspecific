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





  