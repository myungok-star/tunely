// CLIENT-SIDE JS
//  *
//  * You may edit this file as you see fit.  Try to separate different components
//  * into functions and objects as needed.
//

$(document).ready(function() {
    console.log('app.js loaded!');
    // var albumData = $(this).serialize();
    $.ajax({
        method: 'GET',
        url: '/api/albums',
        type: 'json',
        success: handleGetAlbumSuccess,
        error: handleGetAlbumError
    })
});

function handleGetAlbumSuccess(data) {
    //var allAlbums = data;
    //console.log(allAlbums)
    data.forEach(function(album) {
        renderAlbum(album);
    });
}

function handleGetAlbumError(data) {
    console.log("there was an error");
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
    console.log('rendering album', album);
    var source = $('#album-template').html();
    var template = Handlebars.compile(source);
    var albumHtml = template(album);
    $('#albums').prepend(albumHtml);
}
