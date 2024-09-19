let response;
let hints = [
    `It is a gas giant known for its rings.`,
    `This planet is the second-largest in the solar system.`,
    `It has over 80 moons, including one named Titan.`,
    `Its rings are made of ice and rock.`,
    `It is the sixth planet from the Sun.`
]
do {
    response = prompt(`Which planet in our solar system has the most moons?`)
} while (response == ``);

if (response) {
    if (response.toLowerCase() == 'saturn'){
        alert(`Good job! That is correct! The planet with the most moons is Saturn. It has 83 confirmed moons, including the famous Titan, and is known for its iconic ring system.`);
    } else {
        for (let i = 0; i < hints.length; i++) {
            response = prompt(`That is incorrect... Please try again. ${hints[i]}`);
            if (response.toLowerCase() == 'saturn'){
                alert(`Good job! That is correct! The planet with the most moons is Saturn. It has 83 confirmed moons, including the famous Titan, and is known for its iconic ring system.`);
                break;
            } 
        };
        if (response.toLowerCase() !== 'saturn'){
            alert(`GAME OVER. Please brush up on your planetary knowledge. The planet with the most moons is Saturn. It has 83 confirmed moons, including the famous Titan, and is known for its iconic ring system.`)
        }
    }
}