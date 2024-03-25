// . loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print A message saying that the username is available.

// . make sure your comparsion is case insensitive. If 'john' has been used, 'JOHN' should not be accepted.


let current_users: string[] = ['sarBan','DaNiyal','salMan','Hamzah','john'];

let new_users: string[] = ['bilal','sarBan','Dawood','jameel','Hamzah'];

new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available. please write a diffrent username`);
}
else{
    console.log(`The username ${newUsername} is available.`);
}
})