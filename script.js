const button = document.querySelector("#getDog")
const dogDisplay = document.querySelector("#dog")
button.addEventListener("click", getDog);

function getDog(e) {
    e.preventDefault();
    const http = new XMLHttpRequest();
    http.open("GET", "https://dog.ceo/api/breeds/image/random", true)
    http.onload = function() {
        if (this.status === 200) {
            const dog = JSON.parse(this.responseText)
            let output = `
                <img src=${dog.message} />
            `;
            dogDisplay.innerHTML = output;
        } else {
            let output = `<h3>Oops, there was an error! Try again!</h3>`
        }
    }
    http.send();
}