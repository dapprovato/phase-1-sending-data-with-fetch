function submitData(name, email) {
    const formData = {
        name: name,
        email: email
      }
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData)
      }
      
      return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
           console.log("print;", data)
           const newDiv = document.createElement("div")
           newDiv.innerHTML = data.id
           document.body.appendChild(newDiv)
        })
        .catch(function (error) {
          alert("Failed to post!")
          console.log(error.message)
          const newDivTwo = document.createElement("div")
          newDivTwo.innerHTML = error
          document.body.appendChild(newDivTwo)
        })
}