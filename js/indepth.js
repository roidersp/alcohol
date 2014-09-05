var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="9825dd4c-2f92-4719-9285-fe9c322e8ff4";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var size;
var size_h;
var pos=0;

$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top
		}, 2000);
	});

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
	size=$(window).width();
	size_h=$(window).height();
	
	if(size==360){
		tamaño_total=2139;
	}
	
	if(size_h<=360){
		tamaño_total=1270;
	}
	
		var diferencia=tamaño_total-size;
		if(diferencia>0){
			$("#indepth_libros_container img").animate({"margin-left":-diferencia},6000,function(){
				$("#indepth_libros_container img").animate({"margin-left":0},6000)
				}
			);
		}
}

var portadas = function(){
	$('#indepth_libros').waypoint(function(direction) {
		if(direction=="down"){
			$("#indepth_libros_container img").stop();
			portadas_auto();
		}
		
	},{offset: '50%'})
	
	
	$("#indepth_libros_left").on({
		mouseenter:function(){
			var diferencia=tamaño_total-size;
			console.log($("#indepth_libros_container img").css("margin-left"));
			var lon=$("#indepth_libros_container img").css("margin-left");
			var c = parseInt(lon,10);
			var time=(-c/diferencia)*4000;
			$("#indepth_libros_container img").stop();
			$("#indepth_libros_container img").animate({"margin-left":0},time);
			
		}, mouseleave:function(){
			$("#indepth_libros_container img").stop();
		}
	});
	
	$("#indepth_libros_r").on({
		mouseenter:function(){
			var diferencia=tamaño_total-size;
			var lon=$("#indepth_libros_container img").css("margin-left");
			var c = parseInt(lon,10);
			if(c<=1 && c>=1 ){
				var time=(-c/diferencia)*4000;
			}else{
				time=4000;
			}
			$("#indepth_libros_container img").stop();
			$("#indepth_libros_container img").animate({"margin-left":-diferencia},time);
		}, mouseleave:function(){
			$("#indepth_libros_container img").stop();
		}
	});
	var dist;
	$("#indepth_libros_container").swipe({
		  swipeLeft:function(event) {
		  var diferencia=tamaño_total-size;
		  $("#indepth_libros_container img").stop();
		  //	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
		  var lon=$("#indepth_libros_container img").css("margin-left");
			   	var c = -(parseInt(lon,10));
		  if(size <=360){
			  if(size==360){
			   	dist=[0,380,757,1105,1449,1778];
			   		
			   	}else if(size<360){
					dist=[0, 346, 681, 995, 1300,1605];
				}
				
					if(c > dist[0] && c<dist[1]){
						pos=0;
					}else if(c>dist[1] && c<dist[2]){
						pos =1;
					}else if(c>dist[2] && c<dist[3]){
						pos=2;
					}else if(c>dist[3] && c<dist[4]){
						pos=3;
					}else if(c>dist[4] && c<dist[5]){
						pos=4;
					}else if(c>dist[5] && c < 1980){
						pos=5;
					}
					if(pos<5){
						pos++;
					}
					var time=1000;
					$("#indepth_libros_container img").animate({"margin-left":-(dist[pos])},time);
		  }else{
		  	dist=[0, 346, 681, 995];
		  	
		  		if(c > dist[0] && c<dist[1]){
						pos=0;
					}else if(c>dist[1] && c<dist[2]){
						pos =1;
					}else if(c>dist[2] && c<dist[3]){
						pos=2;
					}else if(c>dist[3] && c < 1280){
						pos=3;
					}
					if(pos<3){
						pos++;
					}
					var time=1000;
					$("#indepth_libros_container img").animate({"margin-left":-(dist[pos])},time);


			  
			  
		  }
			   
				
					  },
		  swipeRight:function(event){
		  var diferencia=tamaño_total-size;
		  $("#indepth_libros_container img").stop();
		  var lon=$("#indepth_libros_container img").css("margin-left");
			   		var c = -(parseInt(lon,10));
					var dist=[0, -346, -681, -995, -1300,-1605];
					if(c>=0 && c < 346){
						pos=0;
					}else if(c > 346 && c<681 ){
						pos =1;
					}else if(c>681 && c<995){
						pos=2;
					}else if(c>995 && c<1300){
						pos=3;
					}else if(c>1300 && c<1605){
						pos=4;
					}else if(c>1605 && c < 1980){
						pos=5;
					}
					
					if(pos>0){
						pos--;
					}
					var time=1000;
					$("#indepth_libros_container img").animate({"margin-left":dist[pos]},time);
		  }
		  
		});
	
}

$(document).ready(function(){

	$('#div-gpt-ad-1409780195277-0').html("<script type='text/javascript'>googletag.cmd.push(function() {googletag.defineSlot('/270045723/Ads_indepth', [1920, 800], 'div-gpt-ad-1409780195277-0').addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});googletag.cmd.push(function() { googletag.display('div-gpt-ad-1409780195277-0'); });</script>");
	
	//indepth_sizeAdjust(true);
	//indepth_preloadImgs();
	menu();
	portadas();
    var ventana_alto = $(window).height();
	 if(ventana_alto>800){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	
	 	}
	 	console.log(navigator.platform)
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
	    {   	
				 $(".indepth_parallax_back").css("background-attachment", "scroll");				 
				 $("#indepth_libros_controles").css("display","none");
	    }
    
    if(navigator.platform == 'iPad'){
	    $("#indepth_parallax_back").css("background-size", "100%");
	    $(".indepth_parallax_back").css("background-attachment", "scroll");
    }
		loadDisqus($("#indepth_coments"), disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});
$(window).on("resize", function(){
	$("#indepth_libros_container img").stop();
	$("#indepth_libros_container img").css({"margin-left":0});

		
		portadas_auto();
	
})