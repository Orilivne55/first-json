// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => { 
//         console.log(response);
//         return response.json()})
//       .then(data => {
//         console.log(data);
//         data.map(element => {
//         mainDiv.innerHTML += `<h1>${element.name}</h1>`
//         mainDiv.innerHTML += `<h2>${element.username}</h2>`
//         mainDiv.innerHTML += `<p>${element.address.city}</p>`
//         });
//       })
//       .catch(error => {
//         console.log(error)})
        


        function fetchData() {
                  fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
          console.log(response);
          return response.json()
        })
        .then(data => {
          console.log(data);
          const mainDiv = document.getElementById("mainDiv")
          const btn = document.getElementById("btn")
          mainDiv.innerHTML = 
            `<h5>${data.value}</h5>`
            btn.addEventListener("click",fetchData)
        })
        .catch(error => {
          console.log(error);
        })
        }
        fetchData()