(function() {
    chrome.browserAction.setIcon({path: 'images/online.png'});
    $.getJSON('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json', function(data) {
        $('#city').html('当前地址：' + data.country + ' - ' + data.province + ' - ' + data.city + '<br />设定地址：' + localStorage.city);
    });
    var city = localStorage.city;
    city = city?city:'beijing';
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q='+localStorage.city+',china&lang=zh_cn', function(data) {
        var list = data.list;
        var table = '<table><tr><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
        for (var i in data.list) {
            var d = new Date(list[i].dt*1000);
            table += '<tr>';
            table += '<td>'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'</td>';
            table += '<td>'+list[i].weather[0].description+'</td>';
            table += '<td>'+Math.round(list[i].temp.min-273.15)+' °C</td>';
            table += '<td>'+Math.round(list[i].temp.max-273.15)+' °C</td>';
            table += '</tr>';
        }
        table += '</table>';
        $('#city').html($('#city').text() + table);
    });
})();
