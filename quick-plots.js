const themes = [
    "Jewel thief",
    "Penguin",
    "Knitting",
    "Espionage",
    "Secret bunker",
    "Clockwork beast",
    "Record player",
    "Jealous neighbour",
    "A fabulous banquet",
    "Test results are back",
    "A lingering smell",
    "Music lesson",
    "A cunning plan",
    "Joyous relief",
    "Class war",
    "Giving someone a good talking to",
    "Anniversary",
    "Dusty old tape",
    "It's an ambush!",
    "Live studio audience",
    "Beans on toast",
    "Expensive beer",
    "On the verge",
    "Rock n roll",
    "Chameleon",
    "The great migration",
    "Mindfulness retreat",
    "On the scent",
    "Missing",
    "Wake up",
    "Anti-social behaviour",
    "Engine room",
    "Social distance",
    "Take control",
    "Ashtray",
    "Clear, crisp night",
    "Choreography",
    "Buy, buy, buy",
    "Incursion",
    "Ball pit",
    "The other side",
    "The mirror cracked from side to side",
    "Skeleton in the closet",   
    "Before the storm",
    "First day at work",
    "Across the rooftops",
    "Breakdown of communication",
    "Starlight",
    "Slam the door",
    "Random chance",
    "Unlucky",
    "A thorny problem",
    "Just one more",
    "Harvest",
    "Unstable",
    "Keep it alive",
    "Limited space",
    "Start with nothing",
    "Deeper and deeper",
    "One room",
    "Infection",
    "Swarm",
    "Growth",
    "Guardian",
    "Last resort",
    "Tick tock",
    "Sisters",
    "Goddess",
    "Unconventional food",
    "Flameproof",
    "Heat death",
    "Limits to infinity",
    "Attic",
    "Evil laugh",
    "Impossible!",
    "There's something wrong with...",
    "Painting",
    "Ancient script",
    "Conspiracy",
    "Swoop",
    "The earth isn't round, it's...",
    "We have to go further!",
    "Unconventional weapon",
    "Gone rogue",
    "Hello and welcome",
    "Host",
    "Weave",
    "Carrot",
    "Stick",
    "Upside down",
];

function shuffle(arr) {
    return arr.sort(() => Math.random() > 0.5 ? 1 : -1);
}

function getQuickPlot(n) {
    return shuffle(themes).slice(0, n);
}

document.getElementById("quick-plots-button-3").onclick = function(e) {
    e.preventDefault();

    let target = document.getElementById("quick-plots-target");
    target.innerHTML = '';
    for (let plot of getQuickPlot(3)) {
        let plot_li = document.createElement('li');
        plot_li.innerHTML = plot;
        target.appendChild(plot_li)
    }
}

document.getElementById("quick-plots-button-1").onclick = function(e) {
    e.preventDefault();

    let target = document.getElementById("quick-plots-target");
    target.innerHTML = '';
    for (let plot of getQuickPlot(1)) {
        let plot_li = document.createElement('li');
        plot_li.innerHTML = plot;
        target.appendChild(plot_li)
    }
}
