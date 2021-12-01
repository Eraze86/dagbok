//hämta element

const save = document.getElementById("save")
const reset = document.getElementById("reset")
const textIDiv = document.getElementById("section")
array = []

//function som skapar en lista med blogginlägget
function getdisplay() {

    const date = document.getElementById("date").value;
    const headline = document.getElementById("headline").value;
    const textfield = document.getElementById("textfield").value;
    let list = document.createElement("ul");
    let togheter = date + " " + headline + " " + textfield;



    let listDate = document.createElement("li")
    listDate.innerHTML = date + "<br> " + headline + "<br> " + textfield;
    list.append(listDate)
    textIDiv.append(list)
    console.log("lite", listDate)
    if(togheter)
        array.push(togheter)

    localStorage.setItem("inlägg", JSON.stringify(togheter));
    console.log(localStorage)
   
}
//knappt som tar bort text i input
reset.addEventListener("click", () => {
    const date = document.getElementById("date").value = "";
    const headline = document.getElementById("headline").value = "";
    const textfield = document.getElementById("textfield").value = "";
});
//sparar texten från getdisplay 
save.addEventListener("click", () => {
    getdisplay();

});

//låter en radera inlägg