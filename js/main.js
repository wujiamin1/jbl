$(function(){
	//侧边栏弹出
	$(".wap_slide_bar h4").click(function(){
		var i = $(this).index('h4');
		$(this).toggleClass("on");
		$(".wap_slide_bar ul").eq(i).toggle();
	});
	$(".header_wap .wap_menu").click(function(){
		$(this).toggleClass("on");
		$(".wap_slide_bar").toggleClass("show");
	})
	
	//导航菜单弹出
	$('.nav_list li').hover(function(){
		if($(this).index() == 5){
			return;
		}
		$(this).addClass("active").siblings('li').removeClass('active');
		$(this).find("dl").css({height:$(this).find(".pop_menu").height()});
		$(".pop_bg").show();
	},function(){
		$(this).removeClass('active');
		$(".pop_bg").hide();
	});
	
//	$(".pro-detail .pro-des .pro-des-t").click(function(){
//		var i = $(this).index(".pro-des-t");
//		$(this).toggleClass("active");
//		if($(this).hasClass("active")){
//			$(this).find("span").removeClass("glyphicon-plus").addClass('glyphicon-minus');
//		}else{
//			$(this).find("span").removeClass("glyphicon-minus").addClass('glyphicon-plus');
//		}
//		console.log(i)
//		$(".pro-detail .pro-des .pro-des-c").eq(i).slideToggle();
//	});
	
	var bodyWidth = $(window).width();
	setHover(bodyWidth);
	$(window).resize(function(){
		bodyWidth = $(window).width();
		setHover(bodyWidth);
	})
	
	//首页-我要服务
	function setHover(width){
		if(width>1200){
			$(".for_service .fs_li").eq(0).addClass('on');
			$(".for_service .fs_li").hover(function(){
				$(this).addClass('on').siblings('.fs_li').removeClass('on');
			})
		}else{
			$(".for_service .fs_li").removeClass('on').off('mouseenter').unbind('mouseleave');
		}
	}
	
	//工程案例弹出
//	var exmpop,exmurl,exmname,exmtitle,exmp;
//	function setPop(exmurl,exmname,exmtitle,exmp){
//		exmpop = '<div class="exm-pop-con">';
//		exmpop += '<div class="img"><img src="'+exmurl+'"></div>';
//		exmpop += '<div class="txt"><span>'+exmname+'</span>';
//		exmpop += '<h4>'+exmtitle+'</h4>';
//		exmpop += '<p>'+exmp+'</p></div><a class="close"><img src="img/close.png"></a><span class="arrow arrow-left"></span><span class="arrow arrow-right"></span>';
//		return exmpop;
//	}
//	
//	$(".exm-list li").click(function(){
//		var ythis = $(this);
//		var data = $(this).parents(".exm-list").attr('data');
//		var i = $(this).index(".exm-list li");
//		$(".exm-pop-con").remove();
//		$(this).addClass("on").siblings().removeClass("on");
//		exmurl = $(this).attr('exmurl');
//		exmname = $(this).attr('exmname');
//		exmtitle = $(this).attr('exmtitle');
//		exmp = $(this).attr('exmp');
//		exmpop = setPop(exmurl,exmname,exmtitle,exmp);
//		if(bodyWidth>1200){
//			var n = parseInt(i/data)+1;
//			if( $(".exm-list li").eq(data*n-1).after(exmpop).length  == 1){
//			}else{
//				$(".exm-list ul").append(exmpop);
//			}
//		}else{
//			var n = parseInt(i/2)+1;
//			if( $(".exm-list li").eq(2*n-1).after(exmpop).length  == 1){
//				
//			}else{
//				$(".exm-list ul").append(exmpop);
//			}
//		}
//		$(".exm-pop-con .close").on('click',function(){
//			$(".exm-pop-con").remove();
//			$(".exm-list li").removeClass('on')
//		});
//		$(".exm-pop-con .arrow-right").on('click',function(){
//			$(".exm-list li").eq(i+1).click();
//		});
//		$(".exm-pop-con .arrow-left").on('click',function(){
//			if(i == 0) return;
//			$(".exm-list li").eq(i-1).click();
//		})
//	});
})