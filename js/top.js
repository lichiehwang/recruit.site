$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    
    // 添加额外的逻辑来处理 globalMenuSp 的关闭
    $('.globalMenuSp').click(function() {
        // 移除 globalMenuSp 的活动类
        $(this).removeClass('active');
        
        // 同时移除 hamburger 的活动类
        $('.hamburger').removeClass('active');
    });
});
//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});
$(function(){
	$(".slideshow-fade li").css({"position":"relative","overflow":"hidden"});
	$(".slideshow-fade li").hide().css({"position":"absolute","top":0,"left":0});
	$(".slideshow-fade li:first").addClass("fade").show();
	setInterval(function(){
	  var $active = $(".slideshow-fade li.fade");
	  var $next = $active.next("li").length?$active.next("li"):$(".slideshow-fade li:first");
	  $active.fadeOut(1000).removeClass("fade");
	  $next.fadeIn(1000).addClass("fade");
	},3000);
  });
