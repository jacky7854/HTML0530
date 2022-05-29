

// トップページスライドショー
	$('.mainimg').slick({
		autoplay: true,
		dots: true,				//丸いページナビボタンを表示
		arrows: false,			//左右の矢印
		autoplaySpeed: 4000,	//切り替えのスピード。デフォルトは3000。
		//pauseOnHover: false,	//マウスオン時にスライドショーをストップする
    });

// 注目物件スライドショー
	$('.pickup').slick({
		autoplay: true,
		dots: false,			//丸いページナビボタンを非表示
		arrows: true,			//左右の矢印
		prevArrow: '<div class="slick-prev"></div>',	//「前に戻る」矢印のclassを追加
		nextArrow: '<div class="slick-next"></div>',	//「次へ進む」矢印のclassを追加
		autoplaySpeed: 4000,	//切り替えのスピード。デフォルトは3000。
		//pauseOnHover: false,	//マウスオン時にスライドショーをストップする
		slidesToShow: 4,		//画面内に表示させる枚数。
		slidesToScroll: 2,		//１回でスライド移動する枚数。2枚ずつ移動。
		
		//画面幅799px以下の設定
		responsive: [
		{
		breakpoint: 799,	//ブレークポイント
		settings: {
		slidesToShow: 2,	//画面内に表示させる数。2枚。
		}
		}
		]
});
