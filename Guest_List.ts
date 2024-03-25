
let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];
//for(let i=0; i<Guest_List.length; i++){
  //  console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
 // }    

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;

//for(let i=0; i<Guest_List.length; i++){
//  console.log ('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.,\n\nThank You!,\n\n')
//}

//console.log('Mr. ${absent_Guest} is not coming to the party.');
//console.log('Good New! We find Big Table so we are initing 3 more guests.')

//array me 3 guest add kiya hain
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

//for(let i=0; i<Guest_List.length; i++){
//    console.log ('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.,\n\nThank You!,\n\n')
//}

// console.log('\nSorry we can not arrange big table, only two peopes will be invited,');
//Yahan per mene Guest remove kiya hain
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
//    console.log(`sorry Mr. ${remove_Guest}, You are not inited for Dinner.`);
}
//Hamare bache howe 2 Invited Guest.
//for (let i=0; i<Guest_List.length; i++){
//   console.log('Dear Mr. ' + Guest_List[i] +',\n\nYou are still invited.\n\nThank You!\n\n')
// }    
// Mene sare Guest array se romove kar diya.
Guest_List.splice(0, 2);
console.log(Guest_List);


//Exercise 19

//print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest  Are: ${Guest_List.length}`);



