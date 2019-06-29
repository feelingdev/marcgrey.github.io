var body = $('body');
var main = $('.main');
var depicHeader, depicHeaderOverlay, depicHeaderOverlayDetails, depicHeaderOverlayDetailsName, depicHeaderOverlayDetailsAuthor;
var depicBody, subjectText, subjectTextInner, screenshotHolder, screenshotText, screenshotItem, supportText;
var depicFooter, depicFooterPayPal, depicFooterPayPalLeft, depicFooterPayPalLogo, depicFooterPayPalRight, depicFooterPayPalRightLabel;

function initElements(targetObject, targetClass, targetElement)
{
	for(var i = 0; i < targetClass.length; i++)
	{
		$(targetObject).addClass(targetClass[i]);
	}
	$(targetObject).appendTo(targetElement);
}

function initHeader()
{
	var targetClasses = ['depicheader'];
	depicHeader = $(div).clone();
	initElements($(depicHeader), targetClasses, $(main));
	
	$(depicHeader).css(
	{
	   'background-color':modelData[0][6],
	   'background-image':'url("../../../' + modelData[0][4] +'")'
	});
	
	targetClasses = ['overlay'];
	depicHeaderOverlay = $(div).clone();
	initElements($(depicHeaderOverlay), targetClasses, $(depicHeader));
	
	targetClasses = ['details'];
	depicHeaderOverlayDetails = $(div).clone();
	initElements($(depicHeaderOverlayDetails), targetClasses, $(depicHeaderOverlay));
	
	targetClasses = ['name'];
	depicHeaderOverlayDetailsName = $(span).clone();
	initElements($(depicHeaderOverlayDetailsName), targetClasses, $(depicHeaderOverlayDetails));
    $(depicHeaderOverlayDetailsName).text(modelData[0][1]);
		
	targetClasses = ['subname'];
	depicHeaderOverlayDetailsAuthor = $(span).clone();
	initElements($(depicHeaderOverlayDetailsAuthor), targetClasses, $(depicHeaderOverlayDetails));
    $(depicHeaderOverlayDetailsAuthor).text(modelData[0][2]);
}

function initBody()
{
	var targetClasses = ['depicbody'];
	depicBody = $(div).clone();
	initElements($(depicBody), targetClasses, $(main));
	
	targetClasses = ['subjecttext'];
	subjectText = $(span).clone();
	initElements($(subjectText), targetClasses, $(depicBody));
	$(subjectText).text('Description');
	
	targetClasses = [''];
	subjectTextInner = $(span).clone();
	initElements($(subjectTextInner), targetClasses, $(depicBody));
	$(subjectTextInner).html(modelData[0][8]);
	
	targetClasses = ['subjecttext'];
	screenshotText = $(span).clone();
	initElements($(screenshotText), targetClasses, $(depicBody));
	$(screenshotText).text('Screenshots');
	
	targetClasses = ['screenshotholder'];
	screenshotHolder = $(div).clone();
	initElements($(screenshotHolder), targetClasses, $(depicBody));
	
	targetClasses = ['screenshotitem'];
	screenshotItem = $(img).clone();
	initElements($(screenshotItem), targetClasses, $(screenshotHolder));
	$(screenshotItem).attr('src', '../../../' + modelData[0][5]);
	
	targetClasses = [''];
	supportText = $(span).clone();
	initElements($(supportText), targetClasses, $(depicBody));
	$(supportText).html('This item is <b>FREE</b>. Please support this repo by donating.');
}

function initFooter()
{
	//Init Side Panel Footer
	targetClasses = ['depicfooter'];
	depicFooter = $(div).clone();
	initElements($(depicFooter), targetClasses, $(main));
	
	targetClasses = ['paypalbtn'];
	depicFooterPayPal = $(div).clone();
	initElements($(depicFooterPayPal), targetClasses, $(depicFooter));
	setAction($(depicFooterPayPal));
	
	targetClasses = ['left'];
	depicFooterPayPalLeft = $(div).clone();
	initElements($(depicFooterPayPalLeft), targetClasses, $(depicFooterPayPal));
	
	targetClasses = ['fa', 'fa-paypal', 'centerxy', 'logo'];
	depicFooterPayPalLogo = $(div).clone();
	initElements($(depicFooterPayPalLogo), targetClasses, $(depicFooterPayPalLeft));
	
	targetClasses = ['right'];
	depicFooterPayPalRight = $(div).clone();
	initElements($(depicFooterPayPalRight), targetClasses, $(depicFooterPayPal));
	
	targetClasses = ['label','centery'];
	depicFooterPayPalRightLabel = $(span).clone();
	initElements($(depicFooterPayPalRightLabel), targetClasses, $(depicFooterPayPalRight));
	$(depicFooterPayPalRightLabel).text(paypalLabel);
}

$(document).ready(function ()
{
    initHeader();
    initBody();
	initFooter();
});