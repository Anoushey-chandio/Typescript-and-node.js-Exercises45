let Guest_List : string [] = ['Sajal Ali ','Maya Ali','Mahira Khan'] 
//for(let i=0; i<Guest_List.length; i++) {
   //console.log('Dear Miss. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n');
//}

let absent_Guest : string ='Sajal Ali';
let new_Guest : string ='Ayza Khan';
Guest_List [0] = new_Guest;

//for(let i=0; i<Guest_List.length; i++) {
   // console.log('Dear Miss. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n');
 //}

console.log(`Miss. ${absent_Guest} is not coming to the party`);

console.log('Good News! We are Find Big Table So We are inviting 3 More Guests.');
Guest_List.unshift('Ramsha Khan');
Guest_List.splice(2,0,'Zarnish khan');
Guest_List.push('Sehar Khan');

for(let i=0; i<Guest_List.length; i++) {
    console.log('Dear Miss. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n');

 };

console.log('\n Sorry we can not arrange big table ,only two persons are invited .');

while(Guest_List.length > 2){
   let remove_Guest= Guest_List.pop();
   console.log(`Sorry Miss ${ remove_Guest} you are not invited for dinner .`);

}
for(let i=0; i<Guest_List.length; i++) {
    console.log('Dear Miss. ' + Guest_List[i] +',\n\nYou are still invited .\n\nThank you !\n\n');

 };
 Guest_List.splice(0,2);
 console.log(Guest_List);