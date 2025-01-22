document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.getElementById("episodeModal");
  const closeModalButton = document.querySelector(".close-modal");
  const musica="Música creada por el equipo de FigmaFever usando SunoAI.";
  document.querySelectorAll(".episode").forEach((episode) => {
    episode.addEventListener("click", function () {
      const imgSrc = this.querySelector(".episodeImg")?.src;
      const title = this.querySelector("h2")?.innerText;
      const dateAndDuration = this.querySelector("small")?.innerText;
      const description = this.querySelector("p")?.innerText;
      const descriptionHidden = this.querySelector("span")?.innerText;

      if (imgSrc && title && dateAndDuration && description) {
        modal.querySelector(".modal-img").src = imgSrc;
        modal.querySelector(".modal-details h4").innerText = title;
        modal.querySelector(".modal-details small").innerText = dateAndDuration;

        const shortDescription = description.substring(0, 100);
        const moreText = description.substring(100);

        modal.querySelector(".short-description").innerText = shortDescription;
        modal.querySelector(".more-text").innerText = moreText;
        modal.querySelector(".more-text").innerText += descriptionHidden+"\n"+musica;

        modal.style.display = "flex";
      }
    });
  });

  closeModalButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  document.querySelector(".read-more").addEventListener("click", function () {
    const moreText = modal.querySelector(".more-text");
    console.log(moreText.style.display);
    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      this.innerText = "Leer menos";
    } else {
      moreText.style.display = "none";
      this.innerText = "Leer más";
    }
  });
});
