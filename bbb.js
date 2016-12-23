$(document).ready(function () {      
     
	$('#resultTable tr').click(function (event) {
		$('#cookingMethod').empty();
        var foodName = $(this).attr('id'); 
		var foodPict = $(this).find(".foodPict").html();
		$("#foodDisplay").attr("src",foodPict);
		  
		var cookingSteps = [];  
		
		$(this).find(".foodMethod").each( function( index, element ){				
			cookingSteps.push($(this).html());
		});
		
		$('.foodTitle').text(foodName);		   		

		for(var i=0; i<cookingSteps.length; i++){  
			var txt = $("<p></p>").text( (i+1) +". "+ cookingSteps[i]);
			$("#cookingMethod").append(txt);
		}
	});
	 
});