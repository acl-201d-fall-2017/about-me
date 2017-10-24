const username = prompt('What\'s your name');
console.log('User said their name was: ' + username);
alert('Hello ' + username + "!")

const likesPizza = confirm(username + ' do I like pizza?'); // Likes pizza?
console.log('Question: likes pizza? User answered: ' + likesPizza);
if(likesPizza === true){
    alert('Correct! I do like pizza.');
} else{
    alert('Wrong... who doesn\'t like pizza..?');
}

const likesGuardians = confirm(username + ' did I enjoy watching Guardians of the Galaxy?'); // Likes Guardians of the Galaxy?
console.log('Question: Liked Guardians of the Galaxy? User answered: ' + likesGuardians);
if(likesGuardians === true){
    alert('Correct! That movie was awesome.');
}else{
    alert('Wrong. How could you NOT like that movie?');
}

const likesGuardiansSequel = confirm(username + ' what about the sequel Guardians 2? Did I like that movie?'); // Likes Guardians 2?
console.log('Question: Did I like the sequel of Guardians of the Galaxy? User answered: ' + likesGuardiansSequel);
if(likesGuardiansSequel === true){
    alert('Correct! Best sequel in years!');
}else{
    alert('Wrong. Of course I liked the sequel! Best sequel in years imho...');
}

const favFoodPotatoes = confirm(username + ' would you believe me if I told you potatoes were my favorite food?'); // Likes potatoes?
console.log('Question: Are potatoes my favorite food? User answered: ' + favFoodPotatoes);
if(favFoodPotatoes === true){
    alert('Correct! Potatoes are so versatile.');
}else{
    alert('Wrong. Potatoes are the best food ever!');
}

const grewUp = confirm(username + ' did I grow up in Alaska?'); // Grew up in Alaska?
console.log('Question: Did I grow in in Alaska? User answered: ' + grewUp);
if(grewUp === true){
    alert('Correct! I did grow up in Alaska. Anchorage to be specific!');
}else{
    alert('Wrong. How could you have known that tho?');
}

