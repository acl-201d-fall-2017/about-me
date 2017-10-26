'use strict';

const username = prompt('What\'s your name?');
console.log('User said their name was: ' + username);
alert('Hello ' + username + '!');
let score = 0;
alert(username + ' I am going to ask you a series of yes or no questions. Type yes, no, y or n in the field with no punctuation to submit your answer. Upper or lower case should not matter.');
// do I like pizza?
const likesPizza = prompt(username + ' do I like pizza?'); // Likes pizza?
console.log('Question: likes pizza? User answered: ' + likesPizza);
if(likesPizza.toLowerCase() === 'yes' || likesPizza.toLowerCase() === 'y'){
    alert('Correct! I do like pizza.');
    score++;
} else{
    alert('Wrong... who doesn\'t like pizza..?');
}
// guess if I liked guardians of the galaxy
const likesGuardians = prompt(username + ' did I enjoy watching Guardians of the Galaxy?'); // Likes Guardians of the Galaxy?
console.log('Question: Liked Guardians of the Galaxy? User answered: ' + likesGuardians);
if(likesGuardians.toLowerCase() === 'yes' || likesGuardians.toLowerCase() === 'y'){
    alert('Correct! That movie was awesome.');
    score++;
}else{
    alert('Wrong. How could you NOT like that movie?');
}
//guess if I liked guardians 2
const likesGuardiansSequel = prompt(username + ' what about the sequel Guardians 2? Did I like that movie?');
console.log('Question: Did I like the sequel of Guardians of the Galaxy? User answered: ' + likesGuardiansSequel);
if(likesGuardiansSequel.toLowerCase() === 'yes' || likesGuardiansSequel.toLowerCase() === 'y'){
    alert('Correct! Best sequel in years!');
    score++;
}else{
    alert('Wrong. Of course I liked the sequel! Best sequel in years imho...');
}
// guess if my favorite food is potatoes
const favFoodPotatoes = prompt(username + ' would you believe me if I told you potatoes were my favorite food?');
console.log('Question: Are potatoes my favorite food? User answered: ' + favFoodPotatoes);
if(favFoodPotatoes.toLowerCase() === 'yes' || favFoodPotatoes.toLowerCase() === 'y'){
    alert('Correct! Potatoes are so versatile.');
    score++;
}else{
    alert('Wrong. Potatoes are the best food ever!');
}
// guess where I grew up
const grewUp = prompt(username + ' did I grow up in Oregon?');
console.log('Question: Did I grow in in Oregon? User answered: ' + grewUp);
if(grewUp.toLowerCase() === 'no' || grewUp.toLowerCase() === 'n'){
    alert('Correct! I actually grew up in Alaska!');
    score++;
}else{
    alert('Wrong. How could you have known that tho? I actually grew up in Alaska!');
}
// guessing game, guess a number between 1-10
alert(username + ' we are going to play a guessing game. I will think of a number between 1 and 10, and you have 4 tries to guess it!'); // Alert before guessing game starts, explaining to them the rules.
for(let i = 1; i < 5; i++){
    const guess = prompt(username + ' guess a number between 1 and 10.');
    console.log('Question: Guess a number between 1 and 10? User answered: ' + guess);
    if(guess === '6'){
        alert('Correct. The answer was 6!');
        score++;
        break;
    }else if (guess <= 5) {
        alert('Wrong. Too low! Keep guessing! You have used ' + i + ' of 4 of your guesses.');
    }else if(guess >= 7) {
        alert('Wrong. Too high! Keep guessing! You have used ' + i + ' of 4 of your guesses.');
    }
}
// guessing game, guess what state/states I've lived in
for(let i = 1; i < 7; i++){
    const lived = ['alaska', 'washington', 'oregon'];
    const whereLived = prompt(username + ' this is going to be a hard one. Only 3 correct answers out of so many possible answers! What states do you think I\'ve lived in?').toLowerCase();
    console.log('Question: What state have I lived in? User answered: ' + whereLived);
    if(lived.includes(whereLived)){
        alert('Correct. I have lived in ' + lived[0] + ', ' + lived[1] + ', and ' + lived[2] + '.');
        score++;
        break;
    }else{
        alert('Incorrect. ' + i + ' guesses out of 6 have been used!');
    }
}

// score informs them of their score
alert(username + ' you got ' + score + ' out of 7 correct! Good job.');
