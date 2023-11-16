const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
const characterList = document.getElementById('character-list');


let = paginaActual = 1; 

function fetchData(page) {

fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then ((response) => {
        if (!response.ok) {
            throw new Error ('La solicitud no se puede realizar');
        }
        return response.json();
    })
    .then ((data) => {
        data.results.forEach((character) => {
            console.log(character);
            
            //div para cada personaje
            const characterItem = document.createElement('div');

            //elementos p para image, name y species
            const imageElement = document.createElement('img');
            imageElement.src = character.image;

            const nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${character.name}`;

            const speciesElement = document.createElement('p');
            speciesElement.textContent = `Species: ${character.species}`;

            // Añadir los elementos al div del personaje
            characterItem.appendChild(imageElement);
            characterItem.appendChild(nameElement);
            characterItem.appendChild(speciesElement);

            // Agregamos el div del personaje a characterList
            characterList.appendChild(characterItem);
        });
    });
}

// Comenzar en la primera pagina 
fetchData(paginaActual);

// Evento para retroceder 
prevPage.addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual --;
        fetchData(paginaActual);
    }
});

// Evento para empezar
nextPage.addEventListener('click', () => {
    paginaActual ++;
    fetchData(paginaActual);
});

// Intento 1 next page

    // nextPage.addEventListener('click', () => {
    //     fetch('https://rickandmortyapi.com/api/character/')
    // .then ((response) => {
    //     if (!response.ok) {
    //         throw new Error ('La solicitud no se puede realizar');
    //     }
    //     return response.json();
    // })
    // .then ((data) => {
    //     const pagUp = 0;
    //     for (let i = 1; i <= data.length; i++ ) {
    //         pagUp++;
    //     }

    //     data.results.forEach((character) => {
    //         //div para cada personaje
    //         const characterItem = document.createElement('div');

    //         //elementos p para image, name y species
    //         const imageElement = document.createElement('img');
    //         imageElement.src = character.image;

    //         const nameElement = document.createElement('p');
    //         nameElement.textContent = `Name: ${character.name}`;

    //         const speciesElement = document.createElement('p');
    //         speciesElement.textContent = `Species: ${character.species}`;

    //         // Añadir los elementos al div del personaje
    //         characterItem.appendChild(imageElement);
    //         characterItem.appendChild(nameElement);
    //         characterItem.appendChild(speciesElement);

    //         // Agregamos el div del personaje a characterList
    //         characterList.appendChild(characterItem);
    //     });
    // })

    // })


    
 // characterList.innerHTML = '';
        // // console.log(data.results);
        // data.results.forEach((character) => {
        //     const characterItem = document.createElement('div');
        //     characterItem.innerHTML = `<p>${character.name}</p>`;
        //     characterList.appendChild(characterItem);
        // });
        // data.results.forEach((especie) => {
        //     const characterSpecies = document.createElement('div');
        //     characterSpecies.innerHTML = `<p>${especie.species}</p>`;
        //     characterList.appendChild(characterSpecies);
        // })