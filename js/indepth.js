var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="";
var disqus_number_c=2;
var disqus_per_page=3;


 function loadDisqus(source, identifier, url) {
	if (window.DISQUS) {
	   jQuery('#disqus_thread').insertAfter(source);
	   /** if Disqus exists, call it's reset method with new parameters **/
	
	    DISQUS.reset({
	  reload: true,
	  config: function () { 
	   this.page.identifier = identifier.toString();    //important to convert it to string
	   this.page.url = url;
	  }
	 });
	} else {
	//insert a wrapper in HTML after the relevant "show comments" link
		source.append('<div id="disqus_thread"></div>');
	   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
	   disqus_identifier = identifier; //set the identifier argument
	   disqus_url = url; //set the permalink argument
	   disqus_per_page=3;
	   //append the Disqus embed script to HTML
	   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
	   jQuery('head').append(dsq);
	}
};

var menu=function(){
	$(document).on("click",".indepth_author_img",function(){
		var ir=$(this).attr("ir");

		var position = $("#"+ir).offset();
				console.log(position);
		$('html, body').animate({
			scrollTop: position.top
		}, 3000, function(){

		});
	})
}

var portadas_auto=function(){
	var size=$(window).width();
		var diferencia=1920-size;
		if(diferencia>0){
			$("#indepth_libros_container img").animate({"margin-left":-diferencia},6000,function(){
				$("#indepth_libros_container img").animate({"margin-left":0},6000)
				}
			);
		}
}

var portadas = function(){
	$('#indepth_libros').waypoint(function(direction) {
		portadas_auto();
	},{offset: '50%'})
	
	$("#indepth_footer").waypoint(function(direction) {
		$("#indepth_libros_container img").stop();
	});
}

$(document).ready(function(){
	//indepth_sizeAdjust(true);
	//indepth_preloadImgs();
	menu();
	portadas();
    var ventana_alto = $(window).height();
	 if(ventana_alto>800){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	}
 
    
    if(navigator.platform == 'iPad'){
	    $("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
		loadDisqus($("#indepth_coments"), "11eb7429-ef84-4c70-be28-1a4c7566b226", "http://juanfutbol.com/indepth/11eb7429-ef84-4c70-be28-1a4c7566b226");
});
$(window).on("resize", function(){
	$("#indepth_libros_container img").stop();
	$("#indepth_libros_container img").css({"margin-left":0});
	portadas_auto();
})