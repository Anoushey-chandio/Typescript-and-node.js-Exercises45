// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make great() that modifies the array of magicians by adding 
//the phrase the Great to each magician's name. Call show magicians() to see that
// the list has actually been modified.


let magician: string[] =['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function make_great(magicianarray: string[]){

    for(let i=0; i<magicianarray.length; i++){

      magician[i] = 'the great ' + magicianarray[i]
    }
}

function show_magicians(magicians: string[]){
magicians.forEach (element => {
console.log(element);
});
}
make_great(magician);
show_magicians(magician);