//Cheyanna's help

var num = 99;
while(num > 1){
//Since there are two special cases in which to change the string, we'll check for those using if statements

	if(num===2){
		console.log(
					 num+" bottles of juice on the wall! "
                    +num+" bottles of juice! Take one down, pass it around... "
                    +(num-1)+" bottle of juice on the wall!");//last bottle
	}

	if(num===1){
		console.log(
					 num+" bottle of juice on the wall! "
                    +num+" bottle of juice! Take one down, pass it around... "
                    +(num-1)+" bottles of juice on the wall!");//why is zero pluralized?
    }

	//if num isn't 1 or 2, then this statement will print. 
	else{
		console.log(
					 num+" bottles of juice on the wall! "
					+num+" bottles of juice!"
					+" Take one down, pass it around... "//pass it around is the key phrase
					+(num-1)+" bottles of juice on the wall!");
	}
	num--
}
