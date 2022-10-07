const button = document.querySelector("#getDog")
const dogDisplay = document.querySelector("#dog")
button.addEventListener("click", getDog);

function getDog(e) {
    e.preventDefault();
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(response) {
            return response.json();
        })
        .then(function(dog) {
            dogDisplay.innerHTML = `
                <img src=${dog.message} />
            `;
        })
        .catch((error) => {
            dogDisplay.innerHTML = `<h3>Oops, there was an error! Try again!</h3>`
        })
}