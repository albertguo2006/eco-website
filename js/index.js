$(window).scroll(function()
{
    if ($(this).scrollTop() > 450)
    {
        $('.display-none').stop().fadeIn(800);
    }
    else
    {
        $('.display-none').stop().fadeOut(800);
    };
});
