function add_css(){
    $('.nestnav.transverse>li')
    .css({
        'float' : 'left'
    })
    .children('ul').css({
        'left': 0
        , 'top': '100%'
    });
    /*
    $('.nestnav.transverse>li ul').css({
        'float' : 'left'
        , 'clear':'both'
        , 'width':'auto' 
, 'background' : 'red'        
    });
    */
    $('.nestnav.transverse>li li').css({
        'float' : 'left'
        , 'clear':'both'
        , 'width':'auto'
        , 'background' : 'red'
        //, 'width' : '100px'
    });  
}

jQuery(function(){
    add_css();
    $('.nestnav li')
    .hover(
        function(){
            $(this).children('ul').css({display:'block'});
            
        }
        , function(){
            $(this).children('ul').css({display:'none'});
        }
    );
});