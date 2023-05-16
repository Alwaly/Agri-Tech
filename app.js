document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    // Get form values
    var n = document.getElementById("n").value;
    var p = document.getElementById("p").value;
    var k = document.getElementById("k").value;
    var temperature = document.getElementById("temperature").value;
    var humidity = document.getElementById("humidity").value;
    var ph = document.getElementById("ph").value;
    var rainfall = document.getElementById("rainfall").value;
    
    // Create data object with form values
    var postData = {
        N: n,
        P: p,
        K: k,
        temperature: temperature,
        humidity: humidity,
        ph: ph,
        rainfall: rainfall
    };
    //console.log(JSON.stringify(data));
    fetch("http://127.0.0.1:8000/predict", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(data => {
        // Traitement de la réponse de l'API
        console.log("Hello");
        console.log(data);
      })
      .catch(error => {
        // Gestion des erreurs
        console.error(error);
      });
    // Make the POST request
    /*var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8000/predict", true);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Request successful, do something with the response
        console.log(xhr.responseText);
      }
    };
    
    xhr.send(JSON.stringify(data));*/
  });

