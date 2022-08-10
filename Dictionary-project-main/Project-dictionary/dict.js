
//request based on jquery
$(document).ready(()=>{
  $('#lookup').click(()=>{
    var word= $('#word').val();
    $.ajax({
      "url": "http://localhost:2021/", 
      "data": {"word": word},  // user input to be send to the server, ?word=''
      "type": "GET",
      "success": (data)=>{
        window.updateHtml(data);
      }, 
      "error": ()=> console.log('Error ocured from the server')
      });
  })

}
);

$(document).ready(()=>{
  $("#word").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#lookup").click();
    }
  });
})

// }
// );
// $(document).ready(()=>{
//   $('#lookup').click(()=>{
//     var word= $('#word').val();
//     //$.ajax({
//   // config for your database
//   var config = {
//   user: 'sa',
//   password: 'mypassword',
//   server: 'localhost',
//   database: 'SchoolDB',
//   options: { trustServerCertificate: true }
//   };
//   sql.connect(config, function (err) {
//     if (err) console.log(err);
//     // create Request object
//     var request = new sql.Request();
//     request.query('select * from Student', function (err, recordset) {
//       if (err) console.log(err)
//       // send records as a response
//       res.send(recordset);
//       });
//       });
//       });
//     });
// function showHTML(data){
//   // console.log(data);
//   window.updateHtml(data);

// }

// function errorHandler(){
//   console.log('Erroe ocured from the server');
// }


