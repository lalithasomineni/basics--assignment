
//question2

var nestedData = {

  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },

    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}


console.log(nestedData.innerData.order[1]); //second 


nestedData.innerData.addSnack("choclate"); //adding choclate

console.log(nestedData.innerData.snacks);

//looping for prime numbers

var a = nestedData.innerData.numberData;

for(let prop in a){

	if(prop == "primeNumbers"){

    
    console.log(prop + " " + a[prop]);

}

}





