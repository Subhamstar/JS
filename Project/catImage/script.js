    document.getElementById("getFact").addEventListener("click", () => {
      fetch("https://catfact.ninja/fact")
        .then(res => res.json())
        .then(data => {
          document.getElementById("fact").innerText = data.fact;
        })
        .catch(err => console.log("Error: ", err));
    });