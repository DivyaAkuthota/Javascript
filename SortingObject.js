/**
 * Created by munni on 4/21/16.
 */
console.log("Divya Akuthota");


function sortLibrary() {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
    library.sort(function(a,b){

        if(a.author < b.author) return -1;
        else if(a.author > b.author) return 1;
        else return 0;
    });
    console.log(library);
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Abraham Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();


function processData(myArray) {
    var i, j;
    for( i = 0; i < 2; i++){
        for( j = 0; j < myArray.length - i - 1; j++){
            if(myArray[j] > myArray[j+1]){
                var temp = myArray[j];
                myArray[j] = myArray[j+1];
                myArray[j+1] = temp;
            }
        }
    }

    console.log(myArray[myArray.length - 2]); // gives the second highest number
    // above algorithm works only for unique numbers
}

var array = [3,6,2,12,1,10,5];

processData(array);
