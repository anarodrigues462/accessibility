// Seleciona as palavras e as lacunas (drop zones)
const draggables = document.querySelectorAll(".draggable");
const dropZones = document.querySelectorAll(".drop-zone");

// Define o evento de arrastar
draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text", event.target.dataset.word);
  });
});

// Define o evento de arrastar e soltar nas lacunas
dropZones.forEach(dropZone => {
  dropZone.addEventListener("dragover", event => {
    event.preventDefault();
  });

  dropZone.addEventListener("drop", event => {
    event.preventDefault();
    const word = event.dataTransfer.getData("text");

    // Verifica se a palavra está correta para a lacuna
    if (word === dropZone.dataset.word) {
      dropZone.textContent = word;
      dropZone.classList.add("correct");
    } else {
      alert("Palavra incorreta. Tente novamente!");
    }
  });
});
