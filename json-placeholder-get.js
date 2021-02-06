console.log("JSON Placeholder-GET");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUsers(json))
  .catch(error => console.log(error))

  function displayUsers(users){
      const usernames = users.map(user => user.username);
      const ul = document.getElementById("user-container");
      
      console.log(usernames);
      for (let i = 0; i < usernames.length; i++) {
         const username = usernames[i];
         const li = document.createElement("li");
         
         
         li.innerText = username;
         //console.log(li);
         ul.appendChild(li);
      }
  }
