function repeatPyramid(n){
	let data = [];
	for(let i=1; i <= n; i++){
		let pattern = []
		for (var j = 1; j < n-i; j++) { 
		      pattern.push(" "); 
		}
		if(i != 1){
			for(let j = i; j <=i && j!=1; j--){
				pattern.push(j)
			}
		}
		for(let j=1; j <=i; j++){
			pattern.push(j)
		}
		data.push(pattern.join(" "))
	}
	console.log(data)
}

repeatPyramid(6);

function displayPyramid(n) { 
  for (var i = 0; i < n; i++) { 
    var str = ''; 
    for (var j = 1; j < n-i; j++) { 
      str = str + ' '; 
    } 
    for (var k = 1; k <= (2*i+1); k++) { 
      str = str + '*'; 
    } 
    console.log(str); 
  } 
} 

displayPyramid(6);

function squarePrint(n){
	let rows = n;

	// pattern variable carries the final pattern in string format
	let pattern = "";

	// outer loop runs for `rows` no. of times
	for (let n = 1; n <= rows; n++) {
	   for (let num = 1; num <= 5; num++) {
	      // print star only if it is the boundary location
	      if (n == 1 || n == rows) pattern += "*";
	      else {
	         if (num == 1 || num == 5) {
	            pattern += "*";
	         } else {
	            pattern += " ";
	         }
	      }
	   }
	   pattern += "\n";
	}
	console.log(pattern);

}

squarePrint(6)

function hallowP(n){
	let string = "";

	for (let i = 1; i <= n; i++) { 
	  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }

	  // printing star
	  for (let j = 0; j < i; j++) {
	    if(i === n) {
	      string += "*";
	    }
	    else {
	      if (j == 0 || j == i - 1) {
	        string += "*";
	      }
	      else {
	        string += " ";
	      }
	    }
	  }
	  string += "\n";
	}
	console.log(string);
}

hallowP(6);


let n = 5;
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(' ')
//   }
  // printing stars
  for (let k = 0; k < 2 * i - 1; k++) {
    process.stdout.write('*')
  }
  console.log("---");
}