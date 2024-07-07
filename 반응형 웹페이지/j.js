$(".main-menu > li").mouseover(function(){
	$(this).children(".sub").stop().slideDown();
});
$(".main-menu > li").mouseleave(function() {
	$(this).children(".sub").stop().slideUp();
});

start(); // javascript의 기본 제공 함수

let imgs=5;
let now=0;

function start() { // 함수 재정의
	$(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"}); // 첫번째 이미지의 형제들에 margin 값으로 화면 밖으로 보냄  
	setInterval(function(){slide();}, 2000); // slide 메소드의 실행 간격을 2000(2초)으로 설정함
}

function slide(){
	now = now == imgs?0:now+1;
	$(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
	$(".imgs>img").eq(now).css({"margin-left":"0px"});
}

function winOpen1() {
	let win1 = window.open("login.html", "child1", "toolbar=no, location=no, status=no, menubar=no, resizable=no, scrollbar=no, width=700, height=700");
}

function winOpen2() {
	let win2 = open("join.html", "child2", "toolbar=no, location=no, status=no, menubar=no, resizable=no, scrollbar=no, width=1700, height=1700");
}