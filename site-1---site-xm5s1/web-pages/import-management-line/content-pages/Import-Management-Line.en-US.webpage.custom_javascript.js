const btnImport =  document.getElementById('btnImport');

btnImport.addEventListener('click', ()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json; charset=utf-8");
	var raw = JSON.stringify({
	  "record_id": id.toLowerCase()
	});

	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	fetch("https://domain/api/data/v9.2/balas_ImportData", requestOptions)
	  .then(response => response.text())
	  .then(result => {
		  var results = JSON.parse(result);
          console.log(results.balas_response_ImportData);
	  })
	  .catch(error => console.log('error', error));
})
