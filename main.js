//  GET request using fetch()
fetch("https://jsonplaceholder.typicode.com/posts")
   
    // Converting received data to JSON
    .then(response => response.json())
    .then(json => {
  
        // Create a variable to store HTML
        let li = `<tr><th>Name</th><th>Email</th></tr>`;
       
        // Loop through each data and add a table row
        json.forEach(user => {
            li += `<tr>
                <td>${user.id} </td>        
            </tr>`;
        });
        document.getElementById("posts").innerHTML = li;  
    // Display result
    
});

fetch("https://jsonplaceholder.typicode.com/comments")
   
    // Converting received data to JSON
    .then(response => response.json())
    .then(json => {
  
        // Create a variable to store HTML
        let li = `<tr><th>PostId</th><th>Id</th><th>Comments</th></tr>`;
       
        // Loop through each data and add a table row
        json.forEach(user => {
            li += `<tr>
                <td>${user.postId}</td>
                <td>${user.id}</td>
                 <td>${user.body} </td>        
            </tr>`;
        });
        document.getElementById("comments").innerHTML = li; 
    // Display result
    
});

