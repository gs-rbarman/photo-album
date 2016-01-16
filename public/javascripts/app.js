$(document).ready(function(){
	$("ul a").click(function(evt){
		evt.preventDefault();

		var imageNo = $(evt.currentTarget).attr('href');
		var url = window.location.href+"photo/"+imageNo;
		window.location = url;
		console.log(evt.currentTarget);
	})
});
