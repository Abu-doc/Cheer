document.addEventListener("DOMContentLoaded", function () {
    const storyText = document.getElementById("story-text");
    const storyGif = document.getElementById("story-gif");
    const choicesContainer = document.querySelector(".choices");

    if (!storyText || !storyGif || !choicesContainer) {
        console.error("Required elements are missing in the HTML!");
        return;
    }

    // 🎶 Sound Effects
    let spookySound = new Audio("spooky.mp3");
    let clownLaugh = new Audio("clown.mp3");
    let carRev = new Audio("porsche-105500.mp3");
    let crashSound = new Audio("crash.wav");
    let latinMusic = new Audio("latin.mp3"); // The real horror for Ana

    // 🕷️ Story Scenarios
    const storyData = {
        start: {
            text: "You wake up in a purple-lit garage. A Porsche 911 sits in front of you, engine running. A note on the windshield reads: 'Ana, get in.'",
            gif: "start.gif",
            choices: [
                { text: "🚗 Get in the Porsche (duh)", next: "porscheRide" },
                { text: "😑 Stand there like an NPC", next: "npcMoment" },
                { text: "📞 Call someone for help (as if that ever works)", next: "callForHelp" }
            ]
        },
        porscheRide: {
            text: "You sit in the car. The doors lock. The car speaks: 'Buckle up, princesa.' The stereo plays phonk. The road ahead is endless.",
            gif: "porsche.gif",
            choices: [
                { text: "🕶️ Vibe to the phonk", next: "phonkVibe" },
                { text: "🛑 Try to open the door", next: "cantEscape" }
            ]
        },
        phonkVibe: {
            text: "The Porsche drifts flawlessly. The neon lights blur past. Ana, you were born for this.",
            gif: "drift.gif",
            choices: [
                { text: "🏁 Race through the city", next: "raceCity" },
                { text: "🛑 Slow down (bad idea)", next: "slowDown" }
            ]
        },
        raceCity: {
            text: "You hit 200 mph. The world feels alive. A cop car appears behind you. Time to make a choice.",
            gif: "race.gif",
            choices: [
                { text: "🚔 Outrun the cops", next: "outrunCops" },
                { text: "📣 Yell 'I AM SPEED'", next: "lightningMcQueen" },
                { text: "💥 Drift too hard (Risk of crashing)", next: "crashEnding" } // New crash scenario
            ]
        },
        crashEnding: {
            text: "You drift too hard, lose control, and CRASH! The Porsche is totaled. The dream is over. 💀",
            gif: "crash.gif",
            choices: [
                { text: "🔄 Restart (because Ana is built different)", next: "start" }
            ]
        },
        outrunCops: {
            text: "The Porsche laughs. 'Cops? They’re NPCs.' You drift into a secret tunnel. You lost them. Ana: 1, Cops: 0.",
            gif: "win.gif",
            choices: [
                { text: "💜 Go home, legend", next: "win" }
            ]
        },
        lightningMcQueen: {
            text: "The cops hear you yell 'I AM SPEED' and start playing... LATIN MUSIC. The horror.",
            gif: "scream.gif",
            choices: [
                { text: "😭 Beg for mercy", next: "begMercy" }
            ]
        },
        begMercy: {
            text: "The cops let you go, but only after making you listen to a full Bad Bunny album. You may never recover.",
            gif: "trauma.gif",
            choices: [
                { text: "💀 Restart (you deserve better)", next: "start" }
            ]
        },
        slowDown: {
            text: "The car doesn’t slow down. The stereo says: 'Ayo? I thought you liked speed?' It accelerates.",
            gif: "speedup.gif",
            choices: [
                { text: "😨 Apologize to the car", next: "apologizeCar" },
                { text: "🎮 Try cheat codes (like in Forza)", next: "cheatCodes" }
            ]
        },
        apologizeCar: {
            text: "'That’s right, say sorry.' The Porsche accepts your apology. But you’re now its servant forever.",
            gif: "trapped.gif",
            choices: [
                { text: "🔄 Restart, servant", next: "start" }
            ]
        },
        cheatCodes: {
            text: "You whisper 'GODMODE'. The car turns into a flying spaceship. You leave Earth forever.",
            gif: "spaceship.gif",
            choices: [
                { text: "🛸 Rule the galaxy", next: "win" }
            ]
        },
        callForHelp: {
            text: "You dial a number. A voice answers: 'Help? Nah fam, you're in the wrong game.' The call ends.",
            gif: "deadend.gif",
            choices: [
                { text: "📞 Try again (spoiler: it won’t work)", next: "callForHelp" },
                { text: "😩 Accept your fate", next: "start" }
            ]
        },
        npcMoment: {
            text: "You stand there, doing nothing. The Porsche honks. 'HELLO? MOVE?'. Suddenly, you hear an eerie clown laugh from the shadows... WTF?",
            gif: "npc.gif",
            choices: [
                { text: "🚶‍♀️ Walk away like an NPC", next: "runAway" },
                { text: "🚗 Finally get in the car", next: "porscheRide" }
            ]
        },
        runAway: {
            text: "You try to leave. But the world loops. No matter where you run, you end up back at the Porsche.",
            gif: "endless.gif",
            choices: [
                { text: "🔄 Accept your fate", next: "start" }
            ]
        },
        win: {
            text: "You ESCAPED. The Porsche is now yours. You drive off into the night, a legend. Ana's true love... is speed. 💜",
            gif: "win.gif",
            choices: [
                { text: "🏆 Play Again", next: "start" }
            ]
        }
    };

    function updateStory(scenarioKey) {
        if (!storyData[scenarioKey]) {
            console.error("Scenario not found:", scenarioKey);
            return;
        }

        let scenario = storyData[scenarioKey];

        // 🔄 Update text and GIF
        storyText.innerHTML = scenario.text;
        storyGif.src = scenario.gif;

        // 🚀 Clear old choices and add new ones
        choicesContainer.innerHTML = "";
        scenario.choices.forEach(choice => {
            let btn = document.createElement("button");
            btn.innerHTML = choice.text;
            btn.classList.add("choice-button");
            btn.addEventListener("click", function () {
                updateStory(choice.next);
            });
            choicesContainer.appendChild(btn);
        });

        // 🔊 Play sounds based on scenario
        if (scenarioKey === "porscheRide") carRev.play();
        if (scenarioKey === "lightningMcQueen") latinMusic.play();
        if (scenarioKey === "scream") spookySound.play();
        if (scenarioKey === "npcMoment") clownLaugh.play();
        if (scenarioKey === "crashEnding") crashSound.play();
    }

    // 🎬 Start the game
    updateStory("start");
});
