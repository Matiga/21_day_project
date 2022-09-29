let countries = []
const countryListElement = document.querySelector("#country-list")
const countryInputElement = document.querySelector("#country-input")

function fetchCountries(){
    fetch("https://restcountries.com/v3.1/all")
    .then((response)=> response.json())
    .then((data)=>{
        //console.log(data) this one give us a data
        countries= data.map((x)=>x.name.common)
        countries.sort()
        loadData(countries,countryListElement)
        //console.log(countries)
    })
}
function loadData(countries,element){
    if(countries){
        element.innerHTML ="";
        let innerElement = "";
        countries.forEach((item) => {
            innerElement +=`
            <li>${item}</li>`
        });
         element.innerHTML = innerElement
    }
}

function filterData(countries,searchText){
    return countries.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()))

}

fetchCountries()
countryInputElement.addEventListener("input",function(){
    const filteredData = filterData(countries,countryInputElement.value)
    loadData(filteredData,countryListElement)
})
