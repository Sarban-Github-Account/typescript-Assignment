
//Store the location in a array. Make sure the array is not in in alphabetical order.
let places :string[] = ['Unites States' , 'Japan' , 'Brazil' , 'Australia' , 'South Africa'];

//print your array in its original order.
console.log('orignal ' + places);

//print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());

//Show that your array is still in its original order by printing it.
console.log('orignal ' + places);

//print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy '+ [...places].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log('orignal ' + places);

//Reverse the order of your list. print the array to show that its order has chamged.
console.log('orignal ' + places.reverse());

//Reverse the order of your list. print the list to show it's back to its original order.
console.log( 'orignal ' + places.reverse());

//Short your array so it's stored in alphabetical order. print the array to show that its order has been changed.
console.log ('orignal ' + places.sort());

//short to change your array so it's stored in reverse alphabetical order. print the list to show that its order has changed.
console.log('orignal ' + places.sort().reverse());