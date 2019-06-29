function setListener(clickableObject)
{
	var elementClass = clickableObject.attr('class');
	switch (elementClass)
	{ 
		case 'featureditem': 
			featuredItemListener(clickableObject);
			break;
		default:
			console.log('Not Found');
			break;
	}
}

function featuredItemListener(clickableObject)
{
    clickableObject.unbind('mousedown').on('mousedown',function () {
        
    }).unbind('mouseup').on('mouseup', function () {
        
    });
    
    clickableObject.unbind('touchstart').on('touchstart',function () {
        
    }).unbind('touchend').on('touchend', function () {
        
    });
}