$(function() {
	var $itemActions = $(".item-actions");

	$(document).on('click',function(e) {
		if (!$(e.target).closest('.item-actions').length) {
			$itemActions.removeClass('active');
		}
	});
	
	$('.item-actions-toggle-btn').on('click',function(e){
		e.preventDefault();

		var $thisActionList = $(this).closest('.item-actions');

		$itemActions.not($thisActionList).removeClass('active');

		$thisActionList.toggleClass('active');	
	});
});