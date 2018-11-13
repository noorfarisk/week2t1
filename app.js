let _ = require("underscore")
let fs = require('fs')

let ttt = fs.readFileSync("./flower.txt")
let res = ttt.toString()

console.log(lineCount(res))  // call line count
let spltres = res.split("\n")

console.log(finds(spltres))  // count S
repalcewn(spltres)           // replace S with N
console.log(listf(spltres))   // List the name of flower with 5 letter


function lineCount( text ) {
    var nLines = 0;
    for( var i = 0, n = text.length-1;  i < n;  ++i ) {
        if( text[i] === "\n" ) {
            ++nLines ;
        }
    }
    return nLines ;
}


function finds (text) {
	var ns = 0 ;
	for( var i = 0,n = text.length-1; i < n ; i++ ){

		if (text[i][0] ===  "S" ){
			++ ns ;
		}
	}
	return ns ;
}

function repalcewn (text) {
	var ns = 0 ;
	for( var i =0,n = text.length-1; i < n ; i++ ){

		if (text[i][0] ===  "S"){
            text[i] = text[i].replace("S","N") 
            console.log(text[i])
		}
	}
	
}


function listf (text) {
    let nstr = [] 
    
	for( var i =0, n = text.length-1; i < n ; i++ ){
		if (text[i].length === 5){
            nstr = nstr + " " + text[i]
        }
    }
    return nstr 
}