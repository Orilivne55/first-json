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
        


        // function fetchData() {
        //           fetch('https://api.chucknorris.io/jokes/random')
        // .then(response => {
        //   console.log(response);
        //   return response.json()
        // })
        // .then(data => {
        //   console.log(data);
        //   const mainDiv = document.getElementById("mainDiv")
        //   const btn = document.getElementById("btn")
        //   mainDiv.innerHTML = 
        //     `<h5>${data.value}</h5>`
        //     btn.addEventListener("click",fetchData)
        // })
        // .catch(error => {
        //   console.log(error);
        // })
        // }
        // fetchData()


        function weatherApi(city) {
          const mainDiv = document.getElementById("mainDiv")
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7ec52230bc0f1f72539d3ee739a55306
          `
          fetch(url)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            mainDiv.innerHTML += `<p> today temp: ${data.main.temp}</p>
            <p> feels like: ${data.main.feels_like}</p>
            `
          })
        }
        btn2.addEventListener("click", (e) =>{
          e.preventDefault()
          const enterCity = document.getElementById("enterCity")
          let city = enterCity.value
          weatherApi(city)
        })
        