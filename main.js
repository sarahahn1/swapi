const pushButton =  document.querySelector("button")
const baseUrl = "https://swapi.dev/api/planets/?search=Alderaan"

function btnClick(evt) {
    console.log("buttonclicked")
    axios.get(baseUrl).then((res) => {
        console.log(res)
        for(let i = 0; i < res.data.results[0].residents.length; i++){
        console.log(res.data.results[0].residents[i])
        //name of the resident
        //axios.get
        let url = res.data.results[0].residents[i]
        axios.get(url).then((res) => {
            console.log(res)
            console.log(res.data.name)
            let htmlPara = document.createElement ("h2")
            htmlPara.textContent=res.data.name
            document.body.appendChild(htmlPara)
        })

        }
      })
}





pushButton.addEventListener("click",btnClick)