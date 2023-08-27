document.addEventListener("DOMContentLoaded", function(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 const breedUrl = "https://dog.ceo/api/breeds/list/all"
 const breedDropdown = document.getElementById("breed-dropdown")
 const breedListContainer = document.getElementById("dog-breeds")

fetch(imgUrl)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    data.message.forEach(function (imgUrl){
        const imgElement = document.createElement('img')
        imgElement.src = imgUrl
        document.body.appendChild(imgElement)
    })
})
.catch(function(error) {
    console.error("Error fetching images:",error)
})


fetch("https://dog.ceo/api/breeds/list/all")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    const breeds = Object.keys(data.message)

    breeds.forEach(function(breedName) {
        const listItem = document.createElement("li")
        listItem.textContent = breedName

        listItem.addEventListener("click", function() {
            listItem.style.color = "red"
        })
        breedListContainer.appendChild(listItem)
  
     breedDropdown.addEventListener("change", function() {
            const selectedLetter = breedDropdown
            const filteredBreeds = breeds.filter(function(breed) {
                return breed.startsWith(selectedLetter)
            })
            breedListContainer.innerHTML = ""

            filteredBreeds.forEach(function(breedName) {
                const listItem = document.createElement("li")
                listItem.textContent = breedName
                breedListContainer.appendChild(listItem)
            })
     })
    })
}) 
     
    
})