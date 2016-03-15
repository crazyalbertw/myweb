// ul is existing element, li is potential element
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
// text-decoration is textDecoration
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		// $(this) is $(this).parent()
		$(this).remove();
	});
	event.stopPropagation();
})
// event.stopPropagation() can stop parents performance
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		// after hit enter, clean up the input
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})