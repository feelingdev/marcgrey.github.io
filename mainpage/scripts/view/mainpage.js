var body = $('body');
var main = $('.main');
var sidePanel, sidePanelHeader, sidePanelBody, sidePanelFooter;
var sidePanelHeaderLeft, sidePanelHeaderLogo, sidePanelHeaderRight, sidePanelHeaderAppName;
var sidePanelBodyItem, sidePanelBodyItemName;
var sidePanelFooterNote, sidePanelFooterPayPal, sidePanelFooterPayPalLeft;
var sidePanelFooterPayPalLogo, sidePanelFooterPayPalRight, sidePanelFooterPayPalRightLabel;
var mainView, mainViewHeader, mainViewHeaderSidePanel, mainViewHeaderSidePanelIcon, mainViewBody, mainViewBodyFeatured;
var mainViewBodyFeaturedPhone, mainViewBodyFeaturedPhoneScreen, mainViewBodyFeaturedItem;
var mainViewBodyFeaturedItemOuter, mainViewBodyFeaturedItemDetails, mainViewBodyFeaturedItemDetailsInfo;
var mainViewBodyFeaturedItemDetailsInfoName, mainViewBodyFeaturedItemDetailsInfoAuthor, mainViewBodyFeaturedItemDetailsInfoSection;
var mainViewBodyFeaturedItems, mainViewBodyFeaturedItemsItem;
var mainViewBodyNonFeatured;
var modalPopup, depicContainer, depicIframe, depicCloseBtn, depicCloseBtnIcon;
var addToCydia, addToCydiaLink;

function initElements(targetObject, targetClass, targetElement)
{
	for(var i = 0; i < targetClass.length; i++)
	{
		$(targetObject).addClass(targetClass[i]);
	}
	$(targetObject).appendTo(targetElement);
}

function initSidePanel()
{
	var targetClasses = ['sidepanel'];
	sidePanel = $(div).clone();
	initElements($(sidePanel), targetClasses, $(main));
	
	//Init Side Panel Header
	targetClasses = ['header'];
	sidePanelHeader = $(div).clone();
	initElements($(sidePanelHeader), targetClasses, $(sidePanel));
	
	targetClasses = ['left'];
	sidePanelHeaderLeft = $(div).clone();
	initElements($(sidePanelHeaderLeft), targetClasses, $(sidePanelHeader));
	
	targetClasses = ['fa', 'fa-mobile', 'centerxy', 'logo'];
	sidePanelHeaderLogo = $(div).clone();
	initElements($(sidePanelHeaderLogo), targetClasses, $(sidePanelHeaderLeft));
	
	targetClasses = ['right'];
	sidePanelHeaderRight = $(div).clone();
	initElements($(sidePanelHeaderRight), targetClasses, $(sidePanelHeader));
	
	targetClasses = ['appname','centery'];
	sidePanelHeaderAppName = $(span).clone();
	initElements($(sidePanelHeaderAppName), targetClasses, $(sidePanelHeaderRight));
	$(sidePanelHeaderAppName).text(appName);
	
	//Init Side Panel Body
	targetClasses = ['body', 'scrollable'];
	sidePanelBody = $(div).clone();
	initElements($(sidePanelBody), targetClasses, $(sidePanel));
	
	for(var i =0; i < sideBarItems.length; i++)
	{
		targetClasses = ['sidepanelitem'];
		sidePanelBodyItem = $(div).clone();
		initElements($(sidePanelBodyItem), targetClasses, $(sidePanelBody));
		
		targetClasses = ['itemname', 'centery']
		sidePanelBodyItemName = $(span).clone();
		initElements($(sidePanelBodyItemName), targetClasses, $(sidePanelBodyItem));
		$(sidePanelBodyItemName).text(sideBarItems[i][0]);
		
		if(i == 0)
		{
			$(sidePanelBodyItem).css('background-color','#3F5D6F');
		}
		setAction($(sidePanelBodyItem));
	}
	
	//Initialize Custom Scrollbar
	// $(sidePanelBody).mCustomScrollbar({
		// theme:"dark"
	// });
	
	//Init Side Panel Footer
	targetClasses = ['footer'];
	sidePanelFooter = $(div).clone();
	initElements($(sidePanelFooter), targetClasses, $(sidePanel));
	
	targetClasses = ['footernote']
	sidePanelFooterNote = $(span).clone();
	initElements($(sidePanelFooterNote), targetClasses, $(sidePanelFooter));
	$(sidePanelFooterNote).html(footerNote);
	
	targetClasses = ['paypalbtn'];
	sidePanelFooterPayPal = $(div).clone();
	initElements($(sidePanelFooterPayPal), targetClasses, $(sidePanelFooter));
	setAction($(sidePanelFooterPayPal));
	
	targetClasses = ['left'];
	sidePanelFooterPayPalLeft = $(div).clone();
	initElements($(sidePanelFooterPayPalLeft), targetClasses, $(sidePanelFooterPayPal));
	
	targetClasses = ['fa', 'fa-paypal', 'centerxy', 'logo'];
	sidePanelFooterPayPalLogo = $(div).clone();
	initElements($(sidePanelFooterPayPalLogo), targetClasses, $(sidePanelFooterPayPalLeft));
	
	targetClasses = ['right'];
	sidePanelFooterPayPalRight = $(div).clone();
	initElements($(sidePanelFooterPayPalRight), targetClasses, $(sidePanelFooterPayPal));
	
	targetClasses = ['label','centery'];
	sidePanelFooterPayPalRightLabel = $(span).clone();
	initElements($(sidePanelFooterPayPalRightLabel), targetClasses, $(sidePanelFooterPayPalRight));
	$(sidePanelFooterPayPalRightLabel).text(paypalLabel);
}

function initMainViewPanel()
{
	var targetClasses = ['mainview'];
	mainView = $(div).clone();
	initElements($(mainView), targetClasses, $(main));
	
	//Init Main View Header
	targetClasses = ['header'];
	mainViewHeader = $(div).clone();
	initElements($(mainViewHeader), targetClasses, $(mainView));
	
	targetClasses = ['sidepanelaccess'];
	mainViewHeaderSidePanel = $(div).clone();
	initElements($(mainViewHeaderSidePanel), targetClasses, $(mainViewHeader));
	
	setAction($(mainViewHeaderSidePanel));
	
	targetClasses = ['sidepanelicon', 'fa', 'fa-bars', 'centerxy'];
	mainViewHeaderSidePanelIcon = $(div).clone();
	initElements($(mainViewHeaderSidePanelIcon), targetClasses, $(mainViewHeaderSidePanel));
	
	// targetClasses = ['addtocydia', 'centery'];
	// addToCydia = $(div).clone();
	// initElements($(addToCydia), targetClasses, $(mainViewHeader));
	// $(addToCydia).html('Add Source to Cydia');
	
	targetClasses = ['addtocydia', 'centery'];
	addToCydiaLink = $(a).clone();
	initElements($(addToCydiaLink), targetClasses, $(mainViewHeader));
	$(addToCydiaLink).attr('href', 'cydia://url/https://cydia.saurik.com/api/share#?source=https://marcgrey.github.io/');
	$(addToCydiaLink).html('Add Source to Cydia');
	
	//Init Main View Body
	targetClasses = ['body'];
	mainViewBody = $(div).clone();
	initElements($(mainViewBody), targetClasses, $(mainView));
	
	//Init Featured
	targetClasses = ['featured'];
	mainViewBodyFeatured = $(div).clone();
	initElements($(mainViewBodyFeatured), targetClasses, $(mainViewBody));
	
	setListener($(mainViewBodyFeatured));
	
	targetClasses = ['phone', 'centery'];
	mainViewBodyFeaturedPhone = $(div).clone();
	initElements($(mainViewBodyFeaturedPhone), targetClasses, $(mainViewBodyFeatured));
	
	targetClasses = ['screen', 'centerxy'];
	mainViewBodyFeaturedPhoneScreen = $(div).clone();
	initElements($(mainViewBodyFeaturedPhoneScreen), targetClasses, $(mainViewBodyFeaturedPhone));
	$(mainViewBodyFeaturedPhoneScreen).css('background-image','url("' + featuredItems[0][5] +'")');
	
	targetClasses = ['featuredmainitemouter'];
	mainViewBodyFeaturedItemOuter = $(div).clone();
	initElements($(mainViewBodyFeaturedItemOuter), targetClasses, $(mainViewBodyFeatured));
	
	for(var i =0; i < featuredItems.length; i++)
	{
		targetClasses = ['featuredmainitem'];
		mainViewBodyFeaturedItem = $(div).clone();
		initElements($(mainViewBodyFeaturedItem), targetClasses, $(mainViewBodyFeaturedItemOuter));
		$(mainViewBodyFeaturedItem).attr(
		{
		  'data-screenimage':featuredItems[i][5],
		  'data-depiclink':featuredItems[i][7]
		});
		$(mainViewBodyFeaturedItem).css(
		{
		  'background-image':'url("' + featuredItems[i][4] +'")',
		  'background-color':featuredItems[i][6]
		});
		
		targetClasses = ['details'];
		mainViewBodyFeaturedItemDetails = $(div).clone();
		initElements($(mainViewBodyFeaturedItemDetails), targetClasses, $(mainViewBodyFeaturedItem));
		
		targetClasses = ['info', 'centery'];
		mainViewBodyFeaturedItemDetailsInfo = $(div).clone();
		initElements($(mainViewBodyFeaturedItemDetailsInfo), targetClasses, $(mainViewBodyFeaturedItemDetails));
		
		targetClasses = ['name'];
		mainViewBodyFeaturedItemDetailsInfoName = $(div).clone();
		initElements($(mainViewBodyFeaturedItemDetailsInfoName), targetClasses, $(mainViewBodyFeaturedItemDetailsInfo));
		$(mainViewBodyFeaturedItemDetailsInfoName).text(featuredItems[i][1]);
		
		targetClasses = ['subname'];
		mainViewBodyFeaturedItemDetailsInfoAuthor = $(div).clone();
		initElements($(mainViewBodyFeaturedItemDetailsInfoAuthor), targetClasses, $(mainViewBodyFeaturedItemDetailsInfo));
		$(mainViewBodyFeaturedItemDetailsInfoAuthor).text(featuredItems[i][2]);
		
		targetClasses = ['subname'];
		mainViewBodyFeaturedItemDetailsInfoSection = $(div).clone();
		initElements($(mainViewBodyFeaturedItemDetailsInfoSection), targetClasses, $(mainViewBodyFeaturedItemDetailsInfo));
		$(mainViewBodyFeaturedItemDetailsInfoSection).text(featuredItems[i][3]);
	
		setAction($(mainViewBodyFeaturedItem));
	}
		
	targetClasses = ['featureditems'];
	mainViewBodyFeaturedItems = $(div).clone();
	initElements($(mainViewBodyFeaturedItems), targetClasses, $(mainViewBodyFeatured));
	
	for(var i =0; i < featuredItems.length; i++)
	{	
		targetClasses = ['featureditem'];
		mainViewBodyFeaturedItemsItem = $(div).clone();
		initElements($(mainViewBodyFeaturedItemsItem), targetClasses, $(mainViewBodyFeaturedItems));
		$(mainViewBodyFeaturedItemsItem).attr(
		{
		  'data-screenimage':featuredItems[i][5],
		  'data-depiclink':featuredItems[i][7]
		});
		$(mainViewBodyFeaturedItemsItem).css(
		{
		  'background-image':'url("' + featuredItems[i][4] +'")',
		  'background-color':featuredItems[i][6]
		});
		setAction($(mainViewBodyFeaturedItemsItem));                
	}
	
	animateFeatured();
	
	//Init Non-Featured
	targetClasses = ['nonfeatured'];
	mainViewBodyNonFeatured = $(div).clone();
	initElements($(mainViewBodyNonFeatured), targetClasses, $(mainViewBody));
}

function createModal()
{
    if($('.modalpopup').length === 0)
    {
        targetClasses = ['modalpopup'];
        modalPopup = $(div).clone();
        initElements($(modalPopup), targetClasses, $(main));
    }
    
    $(modalPopup).css('display','block');
    setTimeout(function () 
    {
        $(modalPopup).css('opacity','1');
    }, 100);
}

$(document).ready(function () {
	initSidePanel();
	initMainViewPanel();
});

$(window).resize(function () {
	
});