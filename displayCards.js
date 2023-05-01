function displayCards(pageNum, searchTerm) {
    container.innerHTML = "";
    const startIndex = (pageNum - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    let companiesToDisplay = companies.slice(startIndex, endIndex);
  
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      companiesToDisplay = companies.filter(company => {
        const isMatch = company.name.toLowerCase().includes(searchTermLower);
        if (isMatch) {
          console.log("yes");
        }
        return isMatch;
      });
    }
  
    companiesToDisplay.forEach((company) => {
      const col = document.createElement("div");
      col.classList.add("col-sm-6", "col-md-4");
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card", "mb-4", "box-shadow");
      if (searchTerm && company.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        cardBody.classList.add("searched");
      }
  
      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
      cardHeader.textContent = company.name;
  
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = "Welcome to " + company.name;
  
      const cardBodyInner = document.createElement("div");
      cardBodyInner.classList.add("card-body", "text-center");
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
  
    updatePagination(pageNum);
  }