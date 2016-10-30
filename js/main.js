"use strict";
var token = '0azQp2IDnOylN46XcoTlluxpqhYdINwYaC3tKLluxYyHcWyhDN',
    blog_name = "www.davidslog.com";

let getInfo = () => {
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'https://api.tumblr.com/v2/blog/' + blog_name + '/posts/chat?api_key=' + token,
        headers: {
            'api_key': token,
            'blog-identifier': blog_name,
            
        },
        success: function (result) {
            console.log(result);
            let template = Handlebars.compile($('#template').html());
            $('.posts').empty().append(template(result));
        },
        error: function () {
            console.log("error");
        }
    });
}

$(document).ready(function () {
    getInfo();
    setInterval(getInfo, 100000);
})