async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
}

fetchData()
    .then(data => console.log('Received:', data))
    .catch(error => console.log('terribly sorry:', error));