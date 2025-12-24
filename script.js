// Jab user cookie button dabayega, tab ye function chalega
function placeCookie() {
    const center = document.getElementById('center-cell');
    
    // 1. Center mein cookie emoji dalna
    center.innerText = "🍪";
    center.style.backgroundColor = "#ffe5d9";
    
    // 2. 1 second baad game chupa kar notes dikhana
    setTimeout(() => {
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('notes-section').style.display = 'block';
    }, 1000);
}
