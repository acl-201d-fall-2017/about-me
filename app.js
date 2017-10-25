'use strict';

const username = prompt('What\'s your name?');
console.log('User said their name was: ' + username);
alert('Hello ' + username + '!');
alert(username + ' I am going to ask you a series of yes or no questions. Type yes, no, y or n in the field with no punctuation to submit your answer. Upper or lower case should not matter.')

const likesPizza = prompt(username + ' do I like pizza?'); // Likes pizza?
console.log('Question: likes pizza? User answered: ' + likesPizza);
if(likesPizza.toLowerCase() === 'yes' || likesPizza.toLowerCase() === 'y'){
    alert('Correct! I do like pizza.');
} else{
    alert('Wrong... who doesn\'t like pizza..?');
}

const likesGuardians = prompt(username + ' did I enjoy watching Guardians of the Galaxy?'); // Likes Guardians of the Galaxy?
console.log('Question: Liked Guardians of the Galaxy? User answered: ' + likesGuardians);
if(likesGuardians.toLowerCase() === 'yes' || likesGuardians.toLowerCase() === 'y'){
    alert('Correct! That movie was awesome.');
}else{
    alert('Wrong. How could you NOT like that movie?');
}

const likesGuardiansSequel = prompt(username + ' what about the sequel Guardians 2? Did I like that movie?'); // Likes Guardians 2?
console.log('Question: Did I like the sequel of Guardians of the Galaxy? User answered: ' + likesGuardiansSequel);
if(likesGuardiansSequel.toLowerCase() === 'yes' || likesGuardiansSequel.toLowerCase() === 'y'){
    alert('Correct! Best sequel in years!');
}else{
    alert('Wrong. Of course I liked the sequel! Best sequel in years imho...');
}

const favFoodPotatoes = prompt(username + ' would you believe me if I told you potatoes were my favorite food?'); // Likes potatoes?
console.log('Question: Are potatoes my favorite food? User answered: ' + favFoodPotatoes);
if(favFoodPotatoes.toLowerCase() === 'yes' || favFoodPotatoes.toLowerCase() === 'y'){
    alert('Correct! Potatoes are so versatile.');
}else{
    alert('Wrong. Potatoes are the best food ever!');
}

const grewUp = prompt(username + ' did I grow up in Oregon?'); // Grew up in Oregon?
console.log('Question: Did I grow in in Oregon? User answered: ' + grewUp);
if(likesGuardians.toLowerCase() === 'no' || likesGuardians.toLowerCase() === 'n'){
    alert('Correct! I actually grew up in Alaska!');
}else{
    alert('Wrong. How could you have known that tho?');
}

//if(likesGuardians.toLowerCase() === 'yes' || likesGuardians.toLowerCase() === 'y'){
//    alert
//  }else()
//
//  tell them do no use punctuation in first alert
//  create a new variable to erase all the toLowerCase like: const guardiansAns = likesGuardians.toLowercase(); then use guardiansAns instead of likesGuardians.toLowercase()
//
//  or just add .toLowerCase(); at the end of the initial cont
