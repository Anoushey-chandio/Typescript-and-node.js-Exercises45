"use strict";
let Guest_List = ['Sajal Ali ', 'Maya Ali', 'Mahira Khan'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n');
}
;
let absent_Guest = 'Sajal Ali';
let new_Guest = 'Ayza Khan';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you !\n\n');
}
;
console.log(`Miss. ${absent_Guest} is not coming to the party`);
