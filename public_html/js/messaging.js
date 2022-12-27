window.addEventListener('load', function() {
    var change = setInterval(function() {
        var content = document.querySelector('#content');
        var preview = document.querySelector('#preview');
        preview.innerHTML = content.value;
    }, 1000);
});