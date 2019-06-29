function animateFeatured()
{
	$(mainViewBodyFeaturedItems).children().eq(0).appendTo($(mainViewBodyFeaturedItems));
      
	setInterval(function()
	{
		$(mainViewBodyFeaturedItemOuter).css({
			'transition':'1s',
			'top':(parseInt($(mainViewBodyFeaturedItemOuter).css('top')) - parseInt($(mainViewBodyFeaturedItem).css('height'))  ) + 'px'
		});

		$(mainViewBodyFeaturedItems).css({
			'transition':'1s',
			'top':(parseInt($(mainViewBodyFeaturedItems).css('top')) - (parseInt($(mainViewBodyFeaturedItem).css('height')) / 3)) + 'px'
		});
			
		setTimeout(function()
		{
			$(mainViewBodyFeaturedItemOuter).children().eq(0).appendTo($(mainViewBodyFeaturedItemOuter));

            $(mainViewBodyFeaturedItems).children().eq(0).appendTo($(mainViewBodyFeaturedItems));
           			
			$(mainViewBodyFeaturedItemOuter).css(
			{
				'transition':'0s',
				'top':'0'
			});
                    
			$(mainViewBodyFeaturedItems).css(
			{
				'transition':'0s',
				'top':'0'
			});
			
			$(mainViewBodyFeaturedPhoneScreen).css(
			{
				'background-image':'url("' + $(mainViewBodyFeaturedItemOuter).children().eq(0).attr('data-screenimage') + '")'
			});
		},1000);		
	}, 10000);
}