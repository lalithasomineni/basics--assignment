
# Write a function to sort the colors by the count.
### Eg. Input:
`["black", "blue", "red", "black", "blue", "red", "black", "blue", "red", "black", "blue", "black"];`
### Output:
`["red", "blue", "black"]`

# Using a for loop, console.log all of the numbers in the primeNumbers array.
# Console.log the value "second" inside the order array.
# Invoke the addSnack function and add the snack "chocolate".

`var nestedData = {
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
}`

