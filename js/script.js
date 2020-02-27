$(document).ready( function ()
{
  
	$('#dropdown_selector').change(function()
	{
		
		var option = $(this).find('option:selected').val();
		
		$('#showoption').val(option);
	});
});