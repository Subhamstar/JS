    document.getElementById("loadNews").addEventListener("click", () => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res => res.json())
        .then(data => {
          const container = document.getElementById("news");
          container.innerHTML = "";
          data.forEach(post => {
            const div = document.createElement("div");
            div.innerHTML = `
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            `;
            container.appendChild(div);
          });
        })
        .catch(err => console.error("Error:", err));
    });