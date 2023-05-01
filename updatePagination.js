function updatePagination(pageNum) {
    paginationContainer.innerHTML = "";
    const numPages = Math.ceil(companies.length / cardsPerPage);
  
    // limit the number of buttons displayed to 5
    let startPage = Math.max(1, pageNum - 2);
    let endPage = Math.min(numPages, pageNum + 2);
  
    if (startPage === 1) {
      endPage = Math.min(numPages, 5);
    }
  
    if (endPage === numPages) {
      startPage = Math.max(1, numPages - 4);
    }
  
    // add a "..." ellipsis button if there are more pages available
    if (startPage > 1) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      const link = document.createElement("a");
      link.classList.add("page-link");
      link.href = "#";
      link.textContent = "...";
      link.addEventListener("click", () => {
        displayCards(startPage - 1);
      });
      li.appendChild(link);
      paginationContainer.appendChild(li);
    }
  
    // add the numbered page buttons
    for (let i = startPage; i <= endPage; i++) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      if (i === pageNum) {
        li.classList.add("active");
      }
      const link = document.createElement("a");
      link.classList.add("page-link");
      link.href = "#";
      link.textContent = i;
      link.addEventListener("click", () => {
        displayCards(i);
      });
      li.appendChild(link);
      paginationContainer.appendChild(li);
    }
  
    // add a "..." ellipsis button if there are more pages available
    if (endPage < numPages) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      const link = document.createElement("a");
      link.classList.add("page-link");
      link.href = "#";
      link.textContent = "...";
      link.addEventListener("click", () => {
        displayCards(endPage + 1);
      });
      li.appendChild(link);
      paginationContainer.appendChild(li);
    }
  }