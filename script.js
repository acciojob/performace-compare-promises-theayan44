// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

const outputAll = document.getElementById("output-all");
const outputAny = document.getElementById("output-any");

// You can write your code here
function compare(){
	const fetches = [];
	let startTime = performance.now();
	for(let i=0; i<apiUrls.length; i++){
		fetches[i] = fetch(apiUrls[i]);
	}
	Promise.all(fetches).then((values)=>{
		const endTime = performance.now();
		outputAll.innerText = endTime - startTime;
	});
	startTime = performance.now();
	Promise.any(fetches).then((values)=>{
		const endTime = performance.now();
		outputAny.innerText = endTime - startTime;
	});
}

compare();