var original_height;

var livre    = $('#livre');
var iframe   = livre[0].contentWindow;

var first    = $('#first');
var second   = $('#second');
var third    = $('#third');
var fourth   = $('#fourth');
var fifth    = $('#fifth');
var sixth    = $('#sixth');

var article  = $('.article');
var text     = $('.text');

/**
 * Initial state
 */
livre.ready(function() {
    var that = parent;
    original_height = livre.height();
    text.hide();
});

/**
 * Discovering content
 */
function toggleLivre() {
    var newHeight;

    text.hide();

    contentChange(iframe.curPageIndex);

    if(livre.height() != 0){
        $("body").css("overflow", "scroll");
        newHeight = 0;
    } else {
        newHeight = original_height;
        $("body").css("overflow", "hidden");
    }

    livre.animate({height: newHeight});
}

function contentChange(pageIndex) {
    $.get('./assets/config.json', function(data) {

        if($('#' + data[pageIndex].id != 0 )) {
            $.get('pages/' + data[pageIndex].text, function(data) {
                article.html(data);
            });
        }

        $('#' + data[pageIndex].id).show();


        if(data[pageIndex].first != undefined) {
            first.css('background-image', 'url("' + data[pageIndex].first.backgroundURL + '")');
        }
        if(data[pageIndex].second != undefined) {
            second.css('background-image', 'url("' + data[pageIndex].second.backgroundURL + '")');
        }
        if(data[pageIndex].third != undefined) {
            third.css('background-image', 'url("' + data[pageIndex].third.backgroundURL + '")');
        }
        if(data[pageIndex].fourth != undefined) {
            first.css('background-image', 'url("' + data[pageIndex].fourth.backgroundURL + '")');
        }
        if(data[pageIndex].fifth!= undefined) {
            fifth.css('background-image', 'url("' + data[pageIndex].fifth.backgroundURL + '")');
        }
        if(data[pageIndex].sixth != undefined) {
            sixth.css('background-image', 'url("' + data[pageIndex].sixth.backgroundURL + '")');
        }

    }, 'json');
}








