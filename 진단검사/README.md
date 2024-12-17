# 진단검사 프로그램

## 메인 페이지
> index.jsp

![image](https://github.com/user-attachments/assets/e22bc8b7-7e88-4c62-9fbb-cfd3f3f20074)

## 환자 조회

![image](https://github.com/user-attachments/assets/135a0aa3-b4e7-4072-84ac-de8820a01aa1)


<details>
<summary>patient_list</summary>

## patient_list

> p_birth 값을 substr()를 사용해 각각 년,월,일로 잘라서 출력해주고 연결 연산자 ||을 이용하여 붙여준다.
>
> p_gender는 case문을 사용해 M은 남, F은 여로 출력해준다.
>
> p_tel1, p_tel2, p_tel3 또한 연결 연산자 ||로 연결해주었고
>
> case문을 사용해 p_city는 10은 서울, 20은 경기로  30은 강원 40은 대구로 출력해주었다.


![image](https://github.com/user-attachments/assets/92ea925b-2d44-48ff-b00e-319e5d5690eb)

</details>

## 검사결과입력

![image](https://github.com/user-attachments/assets/a19447f5-8863-4171-9473-7afe65ea1851)

<details>
<summary>result</summary>

### result

> 유효성 체크 함수이다.
>
> p_no이라는 이름을 가진 것의 값이 비어있다면 alert 경고창을 띄우고 입력 커서를 해당 박스로 이동하게 하고 false를 반환한다.

![image](https://github.com/user-attachments/assets/985915ae-0330-4b02-bd28-59bdffffd640)

> 다시쓰기 버튼을 누르면 메세지를 띄우고 내용을 모두 지운다.
>
> alert함수로 메세지를 띄우고 reset 함수로 새로고침을 해주고 true를 반환해준다.

![image](https://github.com/user-attachments/assets/6b21a347-1861-4d84-8939-f348557be111)

</details>

<details>
<summary>result_p</summary>

### result_p


</details>

## 검사결과조회


## 지역별검사건수
