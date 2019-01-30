// $('.superheroes').hide()

$('.reset').click(function () {
    location.reload();
})

$('.gauntlet').click(function () {
    $('.characters').fadeToggle(1500);
})

// $(function(){
//     $('.serum').draggable();
//     $('.regularperson').droppable({
//         drop: function(event, ui) {
//             $('.regularperson').hide()
//             $('.serum').hide()
//             $('.captainamerica').show()
//         }
//     });
// });

// $(function(){
//     $('.arcreactor').draggable();
//     $('.regularperson').droppable({
//         drop: function(event, ui) {
//             $('.regularperson').hide()
//             $('.ironman').show()
//         }
//     });
// });

// $(function(){
//     $('.stick').draggable();
//     $('.regularperson').droppable({
//         drop: function(event, ui) {
//             $('.regularperson').hide()
//             $('.thor').show()
//         }
//     });
// });

// $(function(){
//     $('.gamma').draggable();
//     $('.regularperson').droppable({
//         drop: function(event, ui) {
//             $('.regularperson').hide()
//             $('.hulk').show()
//         }
//     });
// });



$('.droppable-power').draggable();
$('.regularperson').droppable({
    drop: function (event, ui) {
        if (ui.draggable[0].classList.contains('serum')) {
            $('.regularperson').hide()
            $('.captainamerica').show()
            $('.serum').hide();
        } else if (ui.draggable[0].classList.contains('arcreactor')) {
            $('.regularperson').hide()
            $('.ironman').show();
            $('.arcreactor').hide();
        } else if (ui.draggable[0].classList.contains('stick')) {
            $('.regularperson').hide()
            $('.thor').show();
            $('.stick').hide();
        } else if (ui.draggable[0].classList.contains('gamma')) {
            $('.regularperson').hide()
            $('.hulk').show();
            $('.gamma').hide();
        } else if (ui.draggable[0].classList.contains('spider')) {
            $('.regularperson').hide()
            $('.spiderman').show();
            $('.spider').hide();
        } else if (ui.draggable[0].classList.contains('dna')) {
            $('.regularperson').hide()
            $('.wolverine').show();
            $('.dna').hide();
        }
    }
});



//$(document).ready(function() {
//});
//$('#city-type').change(function (){
 //   let city = $('#city-type').val()
 //   $('body').removeClass().addClass(city)
//})
