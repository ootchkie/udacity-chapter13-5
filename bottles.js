/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */
var num = 99;

while (num>1) {// check value of num
    
    // print lyrics using num
    console.log((num+" bottles of juice on the wall! "+num+" bottles of juice!")
    //if
    +((num===99)?(" Take one down, pass it around..."//pass it around is the key phrase
                +(num-1)+" bottles of juice on the wall!")//single instance for 99
    //else if
    :((num)!==2)?(" Take one down, pass it around..."
                 +((num-1)+" bottles of juice on the wall!")
                 +((num-1)+" bottles of juice on the wall!")//you need extra bottle to play the game, another bottle please!)    
                 +((num-1)+(" bottles of juice"))):
                 
    (" Take one down, pass it around... 1 bottle of juice on the wall! 1 bottle of juice on the wall! 1 bottle of juice")));//beer run
    
    /*
    if((num)!==2) {//((num)!==2)?((num-1)+" bottles of juice on the wall!"):("1 bottle of juice on the wall!")
        console.log((num-1)+" bottles of juice on the wall!");
    }//need an extra line to play the game 
    if((num)===2) {
        console.log("1 bottle of juice on the wall!");
    //I prefer my if statements, but they don't print on the sameline, how to get around it?  
    }
    */
    
    // decrement num
    num--;


    if (num===1) {// don't forget to check pluralization on the last line!
    
        // print lyrics using num
        console.log(" Take one down, pass it around... "+num+" bottle of juice on the wall! "
                                                       +num+" bottle of juice on the wall! "//last bottle
                                                       +num+" bottle of juice! Take one down, pass it around... "+(num-1)+" bottles of juice on the wall!");//Where's the beer?
    
        
    }
}
