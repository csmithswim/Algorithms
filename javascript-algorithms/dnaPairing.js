/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array. For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]] The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

function pairElement(str) {

    //Set up conditionals inside a for loop so the matching string gets pushed to the other matching string.adminBtns

    let newArray = str.split('');

    let pairArray = []

    for (let i = 0; i < str.length; i++) {

       if (newArray[i] === 'G'){
           pairArray.push(['G','C'])
       }
       else if (newArray[i] === 'T'){
           pairArray.push(['T','A'])
       }
       else if (newArray[i] === 'C'){
        pairArray.push(['C','G'])
        }
        else if (newArray[i] === 'A'){
            pairArray.push(['A','T'])
        }                
    }

    console.log(pairArray);
    return pairArray;
}

pairElement("TTGAG")


/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]. */


const pairDna = (str) => {

    return str.split("").map(letter => {
        switch (letter) {
            case "A":

                return ["A","T"]

            case "T":

                return ["A", "T"]

            case "C": 

                return ["C", "G"]

            case "G":

                return ["G", "C"]

        }

    });

};







