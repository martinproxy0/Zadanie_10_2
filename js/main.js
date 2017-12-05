$(function(){
    changeCSS();
    addButton();
    addEventHandler();
});

function changeCSS() {
    $("span:odd").css('color', 'red');
}

function addButton() {
    $('p').each(function(index, e) {
        var button = '<br><button class="btn" data-tmp="' + index + '">Click me</button>';
        $(e).append(button);
    });
}

function addEventHandler() {
    $("button").click(function(){
        alert($(this).attr("data-tmp"));
    });
}