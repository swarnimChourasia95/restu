jQuery(document).ready(function($){

	$(window).load(function() {
		new WOW().init();   
	});
/*payment option*/
    
	
	$('.e_slide').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		items : 1,
		autoplay:true,
		margin: 0,
		navText: [ '', '' ],
		navigation : true,
		animateOut: 'fadeOut',
		singleItem : true,   
		slideSpeed : 10000,   
		smartSpeed: 10000, 
		rtl:false,		
	});	
    });
  function myclick()
         {
         	alert("message is sent thank-you very much");
         	}
         
         function my_add()
         {
         var mobileprize=Number(document.getElementById("mon_pri").value);
         var headphoneprize=Number(document.getElementById("mob_hd").value);
         var pendriveprize=Number(document.getElementById("mob_p").value);
         var datacabelprize=Number(document.getElementById("data_c").value);
         var totalbill;
         totalbill= mobileprize+headphoneprize+pendriveprize+datacabelprize;
         document.getElementById("billfinal").value=totalbill;
         
         if(totalbill>12000)
         {
         alert("congratulation for gift press ok for show bill");
         
         }
         else
         alert("have a nice day");
         alert("thankyou for visiting my site");
         }
		 /*payment option*/
         
		 //product page all js
		 $(document).ready(function(){
      	
        $(".p_cli a").click(function(){
          $(".m_inner").slideToggle(2000);
		  $("h5").fadeOut(10000);
        });
		 $(".h_cli a").click(function(){
          $(".my_head").slideToggle(2000);
        });
        $(".pe_cli a").click(function(){
          $(".main_pen").slideToggle(2000);
        });
        $(".d_cli a").click(function(){
          $(".main_data").slideToggle(2000);
        });   
		$(".main_contact h3").fadeOut(3000);
		$(".me_inner h4").slideUp();
		$("m_submit a").hide(1000);
		   });
      
		function myclick()
		{
		alert("please visit all product");
		}
 			//product page all js
         //js for menu
		$(".menu_bars a").click(function(){
			$(".slide_menu").show();
			$(".menu_bars img").hide(500);
		});
});
  //js for menu

 //js for contact
 
 function clicks()
 {
	 alert("form is submiting");
	 }
	 
	 function main()
	 {
		 if(m_msg == "")
	{
		$("#messagealt").text("please fill this box..");
		return false;
		}	
		else
		{
					$("#messagealt").text("");
}
		 }
 


