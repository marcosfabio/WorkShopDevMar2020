function onoff(){
    document
    .querySelector("#modal")
    .classList
    .toggle("hide")

    document
    .querySelector("body")
    .classList
    .toggle(hidescroll)

    document
    .querySelector("#modal")
    .classList
    .toggle(addscroll)
}

function checkfields(event){
    
    const ValuesToCheck = [
        "image",
        "title",
        "category",
        "description",
        "link",
    ]

    const isEmpty = ValuesToCheck.find(function(value){
       
       const isString = typeof event.target[value].value === "string"
       const Empty = !event.target[value].value.trim()
        if (isString && Empty){
            return true
        }
    })

   if(isEmpty){
    event.preventDefault()
    alert("Por Favor, Preencha Todos os Campos!")
   }

}