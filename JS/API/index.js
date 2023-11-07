
// syntax of fetch function to use post property

let response = await fetch('https://api.github.com/users', {method: 'POST'});
console.log(response);

let urlParams = new URLSearchParams({
  name: "John Doe",
  age: 30,
  city: "New York"
});
fetch("http://example.com/submit-form??" + urlParams)
.then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
