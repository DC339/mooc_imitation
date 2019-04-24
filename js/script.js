$(document).ready(function($){
//     顶部

	//登录窗弹出窗口
	$('.top-dl').click(function(){
		showLayer(this);
	})

	//注册窗弹出窗口
	$('.top-zc').click(function(){
		showLayer(this);

	})

	//menu
	$('.menu').children('.xl').hover(function(event){
		showSublist(event.target,this)
		console.log(this)
		// console.log(event.target)
	}, function(event){
		hideSublist(this)
	})   

// logo区    为什么click没有用？？？？
	//购物车隐藏显示
	$('.shopbox').hover(function(event){
		$('.shoplist').show()
	}, function(event){
		$('.shoplist').hide()
	})
	//logo区输入框
	$('.logo_r input.txt').focus(function(){
		inCheck(this, '灵魂美食一元抢')
		console.log(123)
	})
	$('.logo_r input.txt').blur(function(){
		outCheck(this, '灵魂美食一元抢')
	})

//banner
	$('.banner .navbox1').children('li').hover(function(event){
		navShow(this)
	}, function(event){
		navHide(this)
	})

	//主体产品切换
	$('.right ul li').click(function(){
		//隐藏当前列表
		var dpl = $(this).parents(".right").find(".on").eq(0).data('lb');
		console.log(dpl);
		$(this).parents('.p1').next().find('#' + dpl).css({"display":"none"})
		$(this).parents('.right').find('.on').eq(0).removeClass('on');

		//在当前列表上加上on类
		$(this).addClass('on');

		//显示选中列表
		var lb = $(this).data('lb');
		$(this).parents('.p1').next().find('#' + lb).eq(0).css({
			"display": "block"
		})

		$(this).parents('.p1').find('img').eq(0).css({
			"right": $(this).data('img')
		})
	})


})

//显示弹出层
function showLayer(obj){
	$('.zhez').show();
	$('.tanc').show();
	if(obj.className == 'top-dl' || $(obj).html() == '登录'){
		$('.p2').html($('.loginContent').html());
		$('.p1 ul li').eq(0).addClass('choose')
	}
	if(obj.className == 'top-zc' || $(obj).html() == '注册'){
		$('.p2').html($('.regicontent').html());
		$('.p1 ul li').eq(1).addClass('choose')
	}
	$('.p1 ul li').click(function(event){
		$('.p1 ul li').removeClass('choose');
		$(this).addClass('choose');
		showLayer(event.target)
	})
	$('#close').click(function(){
		hideLayer()
	})


}

function hideLayer(){
	$('.zhez').hide();
	$('.tanc').hide()
}

//menu
function showSublist(a, obj){
	if(a.className == "xl sp"){
		$(obj).css({
			"backgroundColor": "#fff"
		})
	}
	else{
			$(obj).css({
				"backgroundColor": "#fff",
				"border": "1px solid #999",
				"border-bottom": "none"
			})
				.children('.ej').show().css({
					"backgroundColor": "#fff",
					"border": "1px solid #999",
					"border-top": "none"
				})
		}
}

function hideSublist(obj){
	$(obj).css({
		"backgroundColor": "",
		"border": "none"
	})
		.children('.ej').hide()
}
function inCheck(obj, value){
	if($(obj).val() == value && $(obj).css('color') == "rgb(208, 209, 211)"){
		$(obj).val('');
		$(obj).css({
			'color': '#000'
		})
	}
}

function outCheck(obj, value){
	if($(obj).val() == '' ){
		if($(obj).attr('type') == "password"){
			$(obj).attr('type', 'text')
		}
		$(obj).val(value);
		$(obj).css({
			'color': '#d0d1d3'
		})
	}
}

function navShow(obj){
	$(obj).find('.ej').show();
	$(obj).css({
		"backgroundColor": "#fff",
		"color": "#f01414"
	})
	.find('i').eq(0).removeClass('i')
	.addClass('icheck')
}

function navHide(obj){
	$(obj).find('.ej').hide();
	$(obj).css({
		"backgroundColor": "#f01414",
		"color": "#fff"
	})
	.find('i').eq(0).attr('class','i')
}
