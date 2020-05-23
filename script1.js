//question1

var a = ["black", "blue", "red", "black", "blue", "red", "black", "blue", "red", "black", "blue", "black"]

var b = [];

a.sort();

a.reverse();

console.log(a);

var temp;

for(var i = 0;i < a.length;i++){

	if(a[i] !== temp){

		b.push(a[i]);

		temp = a[i];
	}

}
console.log(b);