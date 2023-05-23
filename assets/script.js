var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

//This function lists the topics array of subjects to be studied
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}


//This function selects the topic to study randomly from among the topics outlines in the function above
function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}


//This is where the console.log commands will all go
console.log('Here are the topics we learned throughout Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();