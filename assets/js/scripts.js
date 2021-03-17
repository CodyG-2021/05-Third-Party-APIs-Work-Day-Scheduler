var today = moment();
$('#currentDay').text(today.format('MMMM Do YYYY, h:mm:ss a'));

//make a time block container that will contain rows that will contain 3 columns with the middle being wider

// $('.saveBtn').on("click", function (event){
// 	var value = $(this).parent('.time-block').find('.description').val();
// 	var time = $(this).parent().attr('id');
// 	localStorage.setItem(time, value);
// });

// function getHour() {
// 	$('.time-block').each(function (){
// 		var blockHour = $(this).attr('id').split('-')[1];
// 	})
// }