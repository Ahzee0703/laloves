document.getElementById('confirmationYes').addEventListener('click', function() {
    window.location.href = "https://ahzee0703.github.io/lalove/"; // replace with the desired URL
});

document.getElementById('confirmationNo').addEventListener('click', function() {
    var buttonNo = document.getElementById('confirmationNo');
    buttonNo.style.position = 'absolute';
    buttonNo.style.left = '0';
    buttonNo.style.top = '0';
});