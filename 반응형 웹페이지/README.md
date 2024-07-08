## 웹페이지 완성 화면

https://github.com/ijijijijiji/web/assets/129851513/34761f3b-27a9-4492-b445-b1466476d474

## header
    메인 메뉴를 만들기 위해서 ul, li, a 태그를 사용하여 껍데기를 만들고,

    css를 통해 배경색, 텍스트 색, 높이, 넓이, 여백 등을 바꾸었다.

> 코드

![image](https://github.com/ijijijijiji/web/assets/129851513/64639bbe-487c-4788-a56a-ce754d44c458)   ![image](https://github.com/ijijijijiji/web/assets/129851513/b3d9951f-3b6f-451b-a370-638c9ed24f42)

## section
    section는 이미지 슬라이드 부분이고,

    이미지가 슬라이더 부분을 넘는다면 이미지를 숨기도록 overflow: hidden을 적용했다.

    또한 position: absolute를 사용하여 슬라이더 안의 이미지가 겹치지 않고 이동할 수 있게 했다.

    자연스럽게 실행될 수 있도록 transition: all 2s를 사용했다.


> 코드

![image](https://github.com/ijijijijiji/web/assets/129851513/4c3c830f-ff3e-4067-8f51-77894bf7a923)



## Javascript
    사용자의 마우스 움직임에 따라 메뉴의 움직임을 구현한 코드이다.
    
    mouseover는 해당 리스트 아이템에 마우스를 올렸을 때 이벤트를 발생시키는 핸들러를 지정하고, 마우스가 리스트 아이템 위로 이동할 때마다 함수 내부의 코드가 실행된다.

    ~.stop()는 실행 중인 애니메이션이 이벤트를 벗어나면 애니메이션을 종료한다.

    ~~.slideDown()는 선택한 요소를 아래쪽으로 서서히 나타나게 한다.

    mouseleave는 해당 리스트 아이템에서 마우스가 떠날 때 이벤트를 발생시키는 핸들러를 지정하고, 마우스가 리스트 아이템에서 벗어날 때마다 함수 내부의 코드가 실행된다.

    .slideUp()는 선택된 요소(서브 메뉴)를 슬라이드 업 애니메이션을 사용하여 숨긴다.



> 코드


![image](https://github.com/ijijijijiji/web/assets/129851513/1df6c145-6e67-4a05-bcc8-92804a7692e6)


## 소감 
    처음에 반응형 웹페이지를 만들기 시작했었을 때 막상 만들어 보려고 하니 막막해져서 
    
    저번에 만들었던 학교 홈페이지를 사용하여 만들기 시작했다.

    비록 만들어져 있던 학교 홈페이지에서 사진, 글, 색만 바꾸어 완성하였지만 완성하니 조금 뿌듯하다는 생각이 들었다.
