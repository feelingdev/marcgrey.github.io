function openDepic(clickableObject)
{
    //alert(clickableObject.attr('data-screenimage'));
    createModal();
        
    if($('.depiccontainer').length === 0)
    {
        targetClasses = ['depiccontainer', 'centerx'];
        depicContainer = $(div).clone();
        initElements($(depicContainer), targetClasses, $(modalPopup));
        
        targetClasses = ['depiciframe'];
        depicIframe = $(iframe).clone();
        initElements($(depicIframe), targetClasses, $(depicContainer));
        
        targetClasses = ['modalclosebtn'];
        depicCloseBtn = $(div).clone();
        initElements($(depicCloseBtn), targetClasses, $(depicContainer)); 
        
        setAction($(depicCloseBtn));
        
        targetClasses = ['closebtnicon', 'centerxy', 'fa', 'fa-close'];
        depicCloseBtnIcon = $(div).clone();
        initElements($(depicCloseBtnIcon), targetClasses, $(depicCloseBtn));
    }
    
    $(depicIframe).attr('src',clickableObject.attr('data-depiclink'));
        
    setTimeout(function ()
    {
        $(depicContainer).css('display','block');
        setTimeout(function ()
        {
            $(depicContainer).css(
            {
                'top':'calc(50% - ' + (parseInt($(depicContainer).css('height')) / 2) + 'px)',
                'opacity':'1'
            });
        },500);
    },100);        
}

function closeModal(clickableObject)
{
    clickableObject.unbind('click').on('click',function ()
    {
        clickableObject.parent().css(
        {
            'top':'',
            'opacity':''
        });
        
        setTimeout(function ()
        {
			clickableObject.parent().css('display','');
            clickableObject.parent().parent().css('opacity','');
            setTimeout(function ()
            {
                clickableObject.parent().parent().css('display','');
            },100);
        },500);
    });
}

function openSidePanel(clickableObject)
{
	createModal();
	
	setTimeout(function ()
	{
		$(sidePanel).css(
		{
			'left':'0'
		});
		
		$(modalPopup).unbind('click').on('click',function () {
			$(sidePanel).css(
			{
				'left':''
			});
			setTimeout(function ()
			{
				$(modalPopup).unbind('click');
				$(modalPopup).css('opacity','');
				setTimeout(function ()
				{
					$(modalPopup).css('display','');
				},100);
			},500);
		});
	},250);
}

function sidePanelAccess(clickableObject)
{
	clickableObject.unbind('click').on('click', function ()
	{
		openSidePanel(clickableObject);
	});
}

function featuredItemBtn(clickableObject)
{
    clickableObject.unbind('click').on('click', function ()
	{
		openDepic(clickableObject);
	});
}