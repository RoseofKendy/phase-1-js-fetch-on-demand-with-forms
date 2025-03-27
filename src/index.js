const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const input = document.querySelector("input#searchByID");
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => {
          if (!response.ok) {
            // Handle 404 or other HTTP errors
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Not Found";
          summary.innerText = "We couldn't find a movie with that ID.";
          console.error(error);
        });
    });
  };

document.addEventListener('DOMContentLoaded', init);