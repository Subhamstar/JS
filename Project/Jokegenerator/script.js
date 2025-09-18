document.getElementById("getJoke").addEventListener("click", () => {
fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
        document.getElementById("joke").innerText = data.setup + " - " + data.punchline;
    })
    .catch(err => console.log("Error: ", err));
});