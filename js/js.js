"use strict";

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let str = `${dna}`;
    str.replace('T', 'U');
}

console.log(DNAtoRNA("TTTT"));