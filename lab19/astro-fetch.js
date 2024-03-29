
// let promise = new Promise(function(resolve,reject){

// });

// promise.then()



$(document).ready(
    function () {
    $("#view_button").click(getPicture);
    });
    function getPicture() {
        let date= $("#date").val() ;
        let url = 'https://api.nasa.gov/planetary/apod?api_key=cNv5U4640THADS9vvLTdaBZ3Jnx43q19Q1JXGbMu';
        if(date){
            url = 'https://api.nasa.gov/planetary/apod?api_key=cNv5U4640THADS9vvLTdaBZ3Jnx43q19Q1JXGbMu&date='+ date;
        }
        let fetchPromise = fetch(url);
        fetchPromise.then(async response => {
            return response.json();
          })
          .then( data => { showPicture(data);})
          .catch(function(error){
              console.log(error);
              noPicture(error);
            });
    };
    function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").text(data.title);
    };
    function noPicture(error) {
    alert(error.responseText);
    }