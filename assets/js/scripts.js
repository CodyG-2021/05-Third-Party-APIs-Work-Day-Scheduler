var contEl = $('.container');
var timeHr= ['7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM'];

var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));

for (let i = 0; i < timeHr.length; i++) {
	var rowEl = $('<row>');
	var divEl = $('<div>');
	var taEl = $('<textarea>');
	var btnEl = $('<button>');

	rowEl.addClass('row time-block');
	divEl.addClass('col-12 col-md-8 col-xl-2 hour');
	taEl.addClass('col-12 col-md-8 col-xl-8 description');
	btnEl.addClass('col-12 col-md-8 col-xl-2 saveBtn');

	divEl.data('hour', 999);

	divEl.text(`${timeHr[i]}`);
	btnEl.text('💾');

	contEl.append(rowEl);
	rowEl.append(divEl);
	rowEl.append(taEl);
	rowEl.append(btnEl);
};

console.log(divEl.data('hour'));

{/* <div class="container">
<row class="row time-block">

	<div class="col-12 col-md-8 col-xl-2 hour" >9AM</div>

	<textarea class="col-12 col-md-8 col-xl-8 description"></textarea>

	<button class="col-12 col-md-8 col-xl-2 saveBtn">💾</button>

</row>
</div> */}

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