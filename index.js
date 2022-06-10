

const input = document.getElementById("search-city-input");

input.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            
            event.preventDefault();
            document.getElementById("button-addon2").click();
        }
})


function valueCitye (){    
    const valuecity = document.getElementById('search-city-input').value;

    console.log(valuecity);

    if (valuecity === "" || valuecity.length < 3) {

        document.getElementById("search-empty-warning").innerHTML = "Enter a search";
        document.getElementById("search-city-input").value = "";
    }

    else {
        document.getElementById("search-city-input").value = "";
    }


}



function emptysearch (){



}



//