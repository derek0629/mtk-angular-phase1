function doMenu(){

	var isOpen = $('#isMenuOpen').val();
	
	if(isOpen){
    	$('.c-menu-list').css('display','none');
		$('#isMenuOpen').val('');
	}else{
		$('.c-menu-list').css('display','block');
		$('#isMenuOpen').val('1');
	}
}