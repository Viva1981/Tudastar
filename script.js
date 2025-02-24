document.getElementById('search').addEventListener('keyup', function() {
    let filter = document.getElementById('search').value.toLowerCase();
    let docItems = document.querySelectorAll('.doc-item');
    let found = false;

    docItems.forEach(function(item) {
        let text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = '';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    let message = document.getElementById("no-results");
    if (!found) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});

document.getElementById("custom-google-signin").addEventListener("click", function () {
    google.accounts.id.prompt(); // A Google bejelentkezési popup megjelenítése
});

// Kártyák kattinthatóvá tétele
document.querySelectorAll('.doc-item').forEach(item => {
    item.onclick = function() {
        let url = this.getAttribute('data-url');
        if (url) {
            setTimeout(() => {
                window.open(url, '_blank');
            }, 500); // Kis késleltetés, hogy elkerüljük a popup blokkolást
        }
    };
});