// scripts 

// METODO 1 
let i = 0;
console.log("valore di i:" + i)
let carosello = [
	1,
	2,
	3,
	4,
	5
]
const myBtnPlus = document.getElementById("myBtnPlus").addEventListener("click", function () {
	i++; 
	console.log("Addizione valore di i:" + i)
	if (i == 4) {
		i = 0;
		console.log("guarda che i == 5 ora entrato nel if");
		console.log("valore di i:" + i)
	}
});

const myBtnMeno = document.getElementById("myBtnMeno").addEventListener("click", function () {
	i--; 
	console.log("Sottrazione valore di i:" + i)
	if (i == -1) {
		i = 4;
		console.log("guarda che i == -1 ora entrato nel if");
		console.log("valore di i:" + i)
	} 
});


// METODO 2 
let carosello = { 
	1,
	2,
	3,
	4,
	5
















