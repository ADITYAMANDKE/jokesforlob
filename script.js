function getJoke()
{
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
            .then(response => response.json()).then(data => {document.getElementById("joke-text").innerText =`${data.setup} ${data.punchline}`;}).catch(error => {console.log("error in api ".error);
        document.getElementById("joke-text").innerText = "Failed to fetch Joke";})
}
