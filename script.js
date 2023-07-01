const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('') //For splitting the word to letters
    .map(
      //For creating an HTML element around each letter and adding a css transition property
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms"> ${letter}</span>`
    )
    .join(''); //For contacting the elements of the array together to plain text to put back in the HTML
});
