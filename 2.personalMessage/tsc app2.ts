let personName :string ='';

personName = prompt('what is your name?') || '';

if(personName !== null && personName !== ''){

    alert(`hello ${personName},would you like to learn some python today?`);
}

else{
    alert('ýou  have to fill your name !')
    }