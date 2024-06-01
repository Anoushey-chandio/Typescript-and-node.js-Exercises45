"use strict";
//store the locations in a array. make sure the array is not in alphabetical order.
let places = ['Italy ', 'Turkey', 'agra', 'Eifel Tower', 'Times square'];
//print your array in its original order.
console.log('original  ' + places);
//print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//show that your array is still in its original order by  printing it.
console.log('original  ' + places);
//print your array reverse  in alphabetical order without changing the order of original list.
console.log('copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing again .
console.log('original  ' + places);
//reverse the order of your  list .  print the array to show that its order has changed.
console.log('original  ' + places.reverse());
//reverse the order of your list again.print the list to show it's back to its original order .
console.log('original  ' + places.reverse());
//sort your array so its stored alphabetical order print the array to show that its order has been changed .
console.log('original ' + places.sort().reverse());
//sort to changed your array so it's stored in reverse alphabetical order .print the list to show that its order has changed . 
console.log('original  ' + places.sort().reverse());
