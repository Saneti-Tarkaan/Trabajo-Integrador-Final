const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";

// consumir la api con JS metodo peticion get metodo fetch
//paso 1 guardar la llamada de la api en una variable
const llamadaApi = fetch(API_CHARACTERS);

//paso 2 esperar la respuesta de la api y convertirla a formato json
llamadaApi
  .then((data) => {
    return data.json();
  })
  //paso 3 en el ultimo then la data llega formateada lista para usar
  .then((data) => {
    const $container = document.getElementById("container");
    const characters = data.results;
    for (let i = 0; i < characters.length; i++) {
      console.log(characters[i]);
      $container.innerHTML += `
        <div class="item-grid">
            <img 
                src=${characters[i].image} 
                alt="imagen del personaje" 
            />
            <h2>${characters[i].name}</h2>
            <p>Gender: ${characters[i].gender}</p>
            <p>Species: ${characters[i].species}</p>
            <p>Status: ${characters[i].status}</p>
            <p>Location: ${characters[i].location.name}</p>
            <p>Origin: ${characters[i].origin.name}</p>
        </div>
        `;
    }
  })
  //paso 4 en caso de error aparece en el catch
  .catch((error) => {
    console.log(error);
  });
