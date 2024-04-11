let clickCount = 0;
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const body = document.body;

// Array to store achievements
const achievements = [
    { milestone: 100, message: "You've reached 100 clicks you can stop here!" },
    { milestone: 200, message: "You've reached 200 clicks okay thats enough!" },
    { milestone: 300, message: "You've reached 300 clicks wow you really are still going!" },
    { milestone: 400, message: "You've reached 400 clicks ok I'm leaving now have a great time clicking away" },
    { milestone: 500, message: "..." },
];

clickButton.addEventListener('click', function() {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
    
    // Change body color
    body.style.backgroundColor = getRandomColor();
    
    // Check achievements
    achievements.forEach(achievement => {
        if (clickCount === achievement.milestone) {
            displayAchievement(achievement.message);
        }
    });
});

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// to display achievements
function displayAchievement(message) {
    alert(message);
}
