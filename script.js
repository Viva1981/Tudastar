document.getElementById('search').addEventListener('keyup', function() {
    let filter = document.getElementById('search').value.toLowerCase();
    let docItems = document.querySelectorAll('.doc-item');

    docItems.forEach(function(item) {
        let text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
