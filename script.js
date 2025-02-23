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

// Kártyák kattinthatóvá tétele
document.querySelectorAll('.doc-item').forEach(item => {
    item.addEventListener('click', function() {
        let url = this.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});
