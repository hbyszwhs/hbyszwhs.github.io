$(function () {
  //banner 圆点生成
  var size = $(".banner_img li").length;
  for (var j = 1; j < size; j++) {
      var _html = '<li></li>';
      $(".banner_num").append(_html);
  }
  $(".banner_num li:first-child").addClass("active");
  var i = 0;
  var t = setInterval(move, 4000);
  $(".banner_div").hover(function () {
      clearInterval(t);
  }, function () {
      t = setInterval(move, 4000);
  });
  //圆点点击
  $(".banner_num li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      var index = $(this).index();
      i = index;
      if (i == 0) {
          i = size - 1;
      }
      var left = -i * (100) + "%";
      $(".banner_img").css("marginLeft", left);
  });
  function move() {			//banner移动
      i++;
      if (i == size - 1) {
          show();
          $(".banner_num li").eq(0).addClass("active").siblings().removeClass("active");
      } else if (i == size) {
          $(".banner_img").css("margin-left", "0");
          i = 1;
          show();
      } else {
          show();
      }
  }

  function show() {
      var left = -i * (100) + "%";
      $(".banner_img").animate({marginLeft: left}, 500);
      $(".banner_num li").eq(i).addClass("active").siblings().removeClass("active");
  }
});