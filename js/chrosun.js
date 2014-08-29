(function() {
    $.getJSON('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json', function(data) {
        $('#city').text('地址：' + data.country + ' - ' + data.province + ' - ' + data.city);
    });
})();
