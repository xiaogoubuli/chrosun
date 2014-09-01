(function() {
    $('#city').val(localStorage.city || 'tianjin');
    $('#save').click(function() {
        localStorage.city = $('#city').val();
        alert('ok');
    });
})();
