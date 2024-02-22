function getJoke()
{
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
            .then(response => response.json()).then(data => {
                const jokeSetup = data.setup;
                const jokePunchline = data.punchline;
                document.getElementById("joke-text").innerText =`${data.setup} ${data.punchline}`;
                const favbtn = document.createElement("button");
                favbtn.innerText = "Add to Favourite";
                favbtn.onclick = () => {
                  addtoFavourites(jokeSetup,jokePunchline);
                  favbtn.remove();
                }
                document.getElementById("joke-container").appendChild(favbtn)}).catch(error => {console.log("error in api ".error);document.getElementById("joke-text").innerText = "Failed to fetch Joke";});  
}

function addtoFavourites(jokeSetup,jokePunchline)
{

    const favJokeContainer = document.getElementById("favorites-container");
    const favJoke = document.createElement("div");
    const jokeContent = document.createElement("p");
    jokeContent.innerText = `${jokeSetup} ${jokePunchline}`;
    favJoke.appendChild(jokeContent);
    favJokeContainer.appendChild(favJoke);
    savefavtoLocalStorage();
}
function savefavtoLocalStorage()
{
    const favourites = document.getElementById("favorites-container").innerHTML;
    localStorage.setItem("favourites",favourites);
}
function loadFavoritesFromLocalStorage()
{
    const savedfav = localStorage.getItem("favourites");
    if(savedfav)
    {
        document.getElementById("favorites-container").innerHTML = savedfav;
    }
}
loadFavoritesFromLocalStorage();
