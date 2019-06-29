function setAction(clickableObject)
{
	var elementClass = clickableObject.attr('class');
	switch (elementClass)
	{ 
		case 'sidepanelitem': 
			sideBarItemBtn(clickableObject);
			break;
		case 'paypalbtn': 
			paypalBtn(clickableObject);
			break;
		case 'featuredmainitem': 
			featuredItemBtn(clickableObject);
			break;
		case 'featureditem': 
			featuredItemBtn(clickableObject);
			break;
		case 'modalclosebtn':
		    closeModal(clickableObject);
		    break;
		case 'sidepanelaccess':
		    sidePanelAccess(clickableObject);
		    break;
		default:
			console.log('Not Found');
			break;
	}
}

function sideBarItemBtn(clickableObject)
{
	clickableObject.unbind('click').on('click', function ()
	{
		clickableObject.parent().children().css('background-color','');
		$(this).css('background-color','#3f5d6f');
	});
}

function paypalBtn(clickableObject)
{
	clickableObject.unbind('click').on('click', function ()
	{
		window.open(paypalMeLink, '_blank'); 
	});
}
