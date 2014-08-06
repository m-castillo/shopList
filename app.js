$(document).ready(function() {

	$("#button").on("click", function(){
		var item = $("#additem").val();
		var list = "<li>" + item + "</li>";
		$("#add").prepend(list);
		$("#additem").val ("");
	});

	$(document).keypress(function(e){
		if (e.which==13) {
			$("#button").click();
		}
	});

	// 18. User clicks to check off an item

	$("#add").on("click", "li", function(){
		$("#done").append($(this));
	});

	// 24. User clicks to move item back to the to-buy section

	$("#done").on("click", "li", function() {
		$("#add").prepend($(this));
	});

	// 32. User clicks to permanently remove checked items.
	
	$("#remove").click(function() {
		$("#done > li").fadeOut("slow");
	});
	

});	