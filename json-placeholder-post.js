//const postInfo = { title: 'foo', body: 'bar', userId: 1 }
function postData(){
    //console.log("clicked");
    const title= document.getElementById("post-title").value;
    const body= document.getElementById("post-body").value;
    //console.log(title, body);
    const postInfo ={ title: title, body: body};
    postToServer(postInfo);
}
function postToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}