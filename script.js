var rows = 8;
var columns = 8;
var $row = $("<div />",{
    class: 'row'
});
var $square = $("<div />",{
    class:'square'
});

function clearWrapper(){
    $("#wrapper").remove();
}

$(document).ready(function(){
    for(var i = 0; i<rows;i++){
        $row.append($square.clone());
    }
    for(var i = 0; i<columns; i++){
        $('#wrapper').append($row.clone());
    }
    $(".square").mouseover(function(){
        $(this).css("background-color","black");
    })
});

// var $row = $("<div />", {
//     class: 'row'
// });
// var $square = $("<div />", {
//     class: 'square'
// });

// $(document).ready(function () {
//     //add columns to the the temp row object
//     for (var i = 0; i < columns; i++) {
//         $row.append($square.clone());
//     }
//     //clone the temp row object with the columns to the wrapper
//     for (var i = 0; i < rows; i++) {
//         $("#wrapper").append($row.clone());
//     }
// });