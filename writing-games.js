const games = [
    {
        name: "Four sentence story",
        players: {
            min: 2
        },
        duration: {
            min: 5,
            max: 10
        },
        description: "Everyone writes a one sentence start to a story: the Setup. Use Quick Plots x 1 for inspiration if you need. The idea is to set the scene, maybe introduce a character or two. For example: 'In a hole in the ground there lived a hobbit.'<br><br>Next, pass your sheet to the left around the circle. The next person writes the next sentence: Complication. This should introduce some tension, drama or dilemma to the story.<br><br>This happens again and the third person writes a Crisis. Make the story come to a climax which follows the Complication.<br><br>Then finally the fourth writer rounds it all off with a Resolution. Bring it all to a satisfying close.<br><br>Then read it out for the whole circle!",
    },
    {
        name: "Description is the story",
        players: {
            max: 1
        },
        duration: {
            min: 5,
            max: 30
        },
        description: "We all love description! Show the user a thing or place, make them really get under its skin. But description can be a problem when it becomes long, self-indulgent, and gets in the way of the plot.<br><br>Your challenge is to pick something around you - an object maybe - and focus right in on it, describe it to the reader. But your description can't be static - it has to be dynamic, communicate story, go somewhere.<br><br>Maybe your object has a surprising history? Or a great adventure ahead of it? What has it seen? What is its voice?",
    },
    {
        name: "Not the whole story",
        players: {
            max: 1
        },
        duration: {
            min: 10,
            max: 60
        },
        description: "We've all heard 'show, don't tell'. How we talk is even more important than what we say. The same goes for your narrator.<br><br>Write a story whose narrator is not telling us the whole story. Show the reader there's more to this than the narrator is letting on. Maybe they're hiding something? Is there something they're not seeing? Or that they don't know?<br><br>Use Quick Plots for a springboard if you're stuck for ideas!",
    }
];

let timer = 60;
let interval;

document.getElementById("players-minus").onclick = function(e) {
    e.preventDefault();
    const playersInput = document.getElementById("players");
    if (Number(playersInput.value) > 1) {
        playersInput.value = Number(playersInput.value) - 1;
    }
}

document.getElementById("players-plus").onclick = function(e) {
    e.preventDefault();
    const playersInput = document.getElementById("players");
    playersInput.value = Number(playersInput.value) + 1;
}

document.getElementById("minutes-minus").onclick = function(e) {
    e.preventDefault();
    const minutesInput = document.getElementById("minutes");
    if (Number(minutesInput.value) > 5) {
        minutesInput.value = Number(minutesInput.value) - 5;
    }
}

document.getElementById("minutes-plus").onclick = function(e) {
    e.preventDefault();
    const minutesInput = document.getElementById("minutes");
    minutesInput.value = Number(minutesInput.value) + 5;
}

function padTime(input) {
    if (input < 10) {
        return `0${input}`;
    }
    return input;
}

function updateTime(timeLeft) {
    const timerTarget = document.getElementById("writing-games-timer");
    const hours = Math.floor(timeLeft / 3600); // is anyone going to be doing this for more than 1 hour? almost certainly not
    const minutes = Math.floor((timeLeft - hours * 3600) / 60);
    const seconds = timeLeft % 60;
    timerTarget.innerHTML = hours > 0 ?
        `${hours}:${padTime(minutes)}:${padTime(seconds)}` :
        `${padTime(minutes)}:${padTime(seconds)}`;

}

document.getElementById("writing-games-form").onsubmit = function(e) {
    e.preventDefault();
    clearInterval(interval);
    const players = document.getElementById("players").value;
    const minutes = document.getElementById("minutes").value;

    const result = games.filter(game =>
        (!game.players.min || game.players.min <= players) &&
        (!game.players.max || game.players.max >= players) &&
        (!game.duration.min || game.duration.min <= minutes) &&
        (!game.duration.max || game.duration.max >= minutes)
    );

    const resultTarget = document.getElementById("writing-games-result");
    resultTarget.classList.remove("hidden")
    const headingTarget = document.getElementById("writing-games-heading-target");
    const descriptionTarget = document.getElementById("writing-games-description-target");

    if (!result.length) {
        headingTarget.innerHTML = "Sorry, no dice";
        descriptionTarget.innerHTML = "Please try different search terms"
        document.getElementById("writing-games-timer-start").classList.add("hidden");
        document.getElementById("writing-games-timer-pause").classList.add("hidden");
        document.getElementById("writing-games-timer").innerHTML = "";
    } else {
        document.getElementById("writing-games-timer-start").classList.remove("hidden");
        document.getElementById("writing-games-timer-pause").classList.add("hidden");
            const game = result[Math.floor(Math.random() * result.length)];
        headingTarget.innerHTML = game.name;
        descriptionTarget.innerHTML = game.description;
        timer = minutes * 60;
        updateTime(timer);
    }
}

document.getElementById("writing-games-timer-start").onclick = function(e) {
    e.preventDefault();
    document.getElementById("writing-games-timer-start").classList.add("hidden");
    document.getElementById("writing-games-timer-pause").classList.remove("hidden");
    function decrementTimer() {
        timer -= 1;
        if (timer < 0) {
            clearInterval(interval);
            alert("Time's up!");
            return;
        }
        updateTime(timer);
    }
    interval = setInterval(decrementTimer, 1000);
}

document.getElementById("writing-games-timer-pause").onclick = function(e) {
    e.preventDefault();
    document.getElementById("writing-games-timer-start").classList.remove("hidden");
    document.getElementById("writing-games-timer-pause").classList.add("hidden");
    clearInterval(interval);
}
