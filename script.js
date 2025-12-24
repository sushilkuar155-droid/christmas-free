function makeMove(index) {
    const cells = document.querySelectorAll('.cell');
    // Video ke jaisa cookie emoji lagana
    cells[index].innerText = "🍪";
    cells[index].style.backgroundColor = "#ffe5d9";
    
    // Thodi der baad game khatam karke notes dikhana
    setTimeout(() => {
        document.querySelector('.game-container').style.display = 'none';
        document.getElementById('notes-section').style.display = 'block';
    }, 1000);
}
