

//Equality and Inequality Tests 
console.log("Equality test with string: ", "Apple" ==="Apple"); 

//Equality and Inqualiy Test
console.log("Inequality test with string: ",("Apple" as string) != "oramge");
//Tests using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

//Numerical tests involving equality 
console.log("Equality test with numbers: ",26 === 26);
//Numerical tests inolving inequality
console.log("Inquality test with number: ", (26 as number) != 35);

//greater than than
console.log("Greater than  test: ", 10 > 5);
//less than test
console.log("less than test: ",5 < 10 );

//greater than or equal to
console.log("Greater than and equal to test: ", 5 <= 10 );
//Tests using "and" and "or" operator
console.log("less than or equal to test:", 5 <= 10 );

//Tests using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
//Tests using "or" operator
console.log("or operation test: ",5===5);

//Test whether an item is in a array
const fruits :string[] = ['Nashpati','Banana','Amrood'];
console.log('Test "Nashpati" in the array: ',fruits.includes("Nashpati"));

//Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));