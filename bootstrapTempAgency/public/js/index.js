//Id for warning box
const searchWarningBox = document.getElementById('search-warning-box');

const inputSearchId = document.getElementById('search-input').value;

const buttonSearch = document.getElementById('search-button');

function inputSearchBar (){

    if(inputSearchId.length < 3 || inputSearchId === null) {
       
        document.getElementById('row-warning').innerHTML = `<div 
        class="card search-warning-box" id="search-warning-box">
            <div class="card-body">
                Enter a city
            </div>
        </div>`;

        document.getElementById('search-input').value = '';
}
    else {
        searchWarningBox.style.display ="none";
    }
}


function buttonLoadClick (){

    document.getElementById('load-btn').innerHTML = `<div class="spinner-border" role="status">
            <span class="sr-only"></span>
                </div>`;
}
