const button = document.querySelector("#getDog")
const dogDisplay = document.querySelector("#dog")
button.addEventListener("click", getDog);

function getDog(e) {
    e.preventDefault();
    // ajax style
        // const http = new XMLHttpRequest();
        // http.open("GET", "https://dog.ceo/api/breeds/image/random", true)
        // http.onload = function() {
        //     if (this.status === 200) {
        //         const dog = JSON.parse(this.responseText)
        //         dogDisplay.innerHTML = `
        //             <img src=${dog.message} />
        //         `;
        //     } else {
        //         dogDisplay.innerHTML = `<h3>Oops, there was an error! Try again!</h3>`
        //     }
        // }
        // http.send();

    //fetch style
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
            console.log('error')
            dogDisplay.innerHTML = `<h3>Oops, there was an error! Try again!</h3>`
        })
}