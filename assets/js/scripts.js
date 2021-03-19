var contEl = $('.container');
//Array that contains times for loop
var timeHr= ['7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM'];
var milTime= [7,8,9,10,11,12,13,14,15,16,17];

//Top Time and Date displayed
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));

//Pull in the current hour in 24hr format
var curHour = today.format('H');
console.log(` this is current time: ${curHour}`);

//Create elements for the time blocks.
for (let i = 0; i < timeHr.length; i++) {
	var rowEl = $('<row>');
	var divEl = $('<div>');
	var taEl = $('<textarea>');
	var btnEl = $('<button>');

	rowEl.addClass('row time-block');
	divEl.addClass('col-12 col-md-2 col-xl-2 hour');
	taEl.addClass('col-12 col-md-8 col-xl-8 description');
	btnEl.addClass('col-12 col-md-2 col-xl-2 saveBtn');

	taEl.data('milHour', milTime[i]);
	// console.log(taEl.data('milHour'));

	divEl.text(`${timeHr[i]}`);
	btnEl.text('💾');

	contEl.append(rowEl);
	rowEl.append(divEl);
	rowEl.append(taEl);
	rowEl.append(btnEl);
};


function hourBackground() {
	$('.description').each(function () {
		var mHour = $(this).data('milHour');
		// console.log(mHour);
		if (mHour < +curHour) {
			$(this).addClass('past');
		} else if (+mHour === +curHour) {
			$(this).addClass('present');
		} else {
			$(this).addClass('future');
		};
	})

};

$(document).ready(function () {
	// initPage();
	hourBackground();
});


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

// //how to save the text area
// $('.saveBtn').on("click",function() {
// 	var value = $(this).siblings('.description').val();
// 	var time = $(this).parent().attr('id');
// 	localStorage.setItem(time, value)
// });

// //this is manual

// $('#hour-11 .description').val(localStorage.getItem('hour-11'));

// function updateHours() {
// 	$('.time-block').each(function() {
// 		// parse int makes it an integer
// 		var hour = parsInt($(this).attr('id').split('_')[1]);

// 		//+hour just makes it an int as well
// 		if (+hour < currentHour) {
// 			$(this).addClass('past');
// 		}
// 	})
// }