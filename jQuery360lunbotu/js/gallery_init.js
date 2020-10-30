$(document).ready(function() {
	$('#myRoundabout').roundabout({
		 shape: 'flyaway',
		 minOpacity: 1,
		//  minZ: 100,							// 最小的层级
	  //  maxZ: 280,							// 最大的层级
		//  minOpacity: 0.4,					// 最小透明度
		//  maxOpacity: 1.0,					// 最大透明度
		//  minScale: 0.4,						// 最小缩放值
		//  maxScale: 1.0,						// 最大缩放值
	 	//  duration: 750,						// 运动速度
		//  btnNext: .ban_r_btn,						// 下一个按钮
		//  btnNextCallback: function() {},		// 下一个按钮 回调
		//  btnPrev: .ban_l_btn,						// 上一个按钮
		//  btnPrevCallback: function() {},		// 上一个按钮回调
		//  btnToggleAutoplay: null,			// 按钮点击开启自动播放或关闭
		//  btnStartAutoplay: null,				// 按钮点击开启自动播放
		//  btnStopAutoplay: null,				// 按钮点击关闭自动播放
	  //  easing: "swing",					// 移动的动画效果 swing流畅
		//  clickToFocus: true,					// 点击当前轮播设为焦点
		//  clickToFocusCallback: function() {},// 点击当前轮播设为焦点回调
		//  focusBearing: 0.0,					// 修改焦点的位置 360度的位置
		//  shape: "lazySusan",
		//  debug: false,
		//  childSelector: "li",				// 子元素
		//  startingChild: 1,				// 默认的显示第几张图片
		//  reflect: false,						// 为true时是从左向右移动，为false从右向左移动
		//  floatComparisonThreshold: 0.001,
		//  autoplay: true,					// 自动播放
		//  autoplayDuration: 1000,				// 自动播放的时间
		//  autoplayPauseOnHover: false,		// 鼠标移入元素内是否自动播放，为true不播放，false还自动播
		//  autoplayCallback: function() {},	// 自动轮播的回调
		//  autoplayInitialDelay: 0,			// 从第几秒时，开始自动播放（默认毫秒）开始的第一次管用
		//  enableDrag: false,					// 在移动端可以拖拽播放
		//  dropDuration: 600,					// 拖拽的运动速度
		//  dropEasing: "swing",				// 拖拽的运动动画
		//  dropAnimateTo: "nearest",			// 拖拽的动画方式
		//  dropCallback: function() {},		// 拖拽的回调函数
		//  dragAxis: "x",						// 拖拽的方向x轴方向和y轴方向 切换
		//  dragFactor: 4,
		//  triggerFocusEvents: true,			
		//  triggerBlurEvents: true,
		//  responsive: true,					// 窗口变化响应
	});
});