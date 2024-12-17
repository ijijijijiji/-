# 지역구의원투표 프로그램

## 메인 페이지
> index.jsp

![image](https://github.com/user-attachments/assets/13e4c8b2-9903-473e-b1d1-18970e017ede)

## 투표 페이지

![image](https://github.com/user-attachments/assets/44996272-8df1-4523-9a70-96668e0d788b)

<details>
<summary>vote.jsp</summary>
  
### vote.jsp

> 유효성 체크 함수이다.
>
> 쇼핑몰 웹페이지에서 사용했던 유효성 체크 함수와 동일한 구조를 가지고 있다.

![image](https://github.com/user-attachments/assets/5b3cc8ba-db75-43e0-bd2d-cb13a3ad3c7e)

> 다시쓰기 버튼을 누르면 메세지를 띄운 후 input에 있는 모든 내용을 지우는 함수이다.

![image](https://github.com/user-attachments/assets/b14861c9-86a4-41dc-8499-869193448ada)

</details>

<details>
<summary>vote_p.jsp</summary>

### vote_p.jsp

> 오라클에 한글을 입력했을 때 깨지지 않게 만들어준다.

![image](https://github.com/user-attachments/assets/38844227-1a41-4a83-837c-4349d2b3f5dd)

> tbl_vote_202005 테이블에 데이터를 삽입하기 위한 SQL문이다.


![image](https://github.com/user-attachments/assets/34e89f4f-b221-4193-84a2-a8dee69ca14f)

> setString함수로 값을 넣어준다.

![image](https://github.com/user-attachments/assets/8025ff0b-0bb5-4aab-817c-9575cd11edf8)

</details>

## 후보 조회 

![image](https://github.com/user-attachments/assets/aa0dfa3c-06c3-4106-a7e2-f631517883ee)

<details>
<summary>member_list</summary>

## member_list

> case문을 사용해 `1`은 `고졸`, `2`는 `학사`, `3`은 `석사`, `4`는 `박사`로 변환하여 출력하게 하고
>
> `0000000000000` 형태의 주민번호는 `000000-0000000` 형태로 변환하기 위해서 substr()과 연결연산자 || 를 사용하였다.

![image](https://github.com/user-attachments/assets/afbe1bc6-56e4-4f08-950d-5f43b9aa46af)

</details>

## 투표 검수 조회 

![image](https://github.com/user-attachments/assets/356c7d40-0bb5-4fa1-a580-2d40bc79b436)

<details>
<summary>vote_check_list</summary>

## vote_check_list

> v_jumin를 19YY년 MM월 DD일 형식으로 바꿔주기 위해 substr()과 연결연산자 || 를 사용해 출력해주고
>
> to_date로 변환해서 날짜 형식으로 바꿔준 후 오늘날에서 생일을 빼주는데 month_between로 개월수를 뽑아주고
>
> 뽑은 개월수를 12로 나누어 년도를 구하고 나머지는 정수화해 만 나이를 구해준다.
>
> 성별은 case문을 사용해 구해준다.
>
> substr()과 연결연산자 || 를 사용해 시간을 HH:MM 형식으로 출력해준다.

![image](https://github.com/user-attachments/assets/00818980-7259-4e52-bc14-0eb99e4bd701)

</details>

## 후보자 등수 

![image](https://github.com/user-attachments/assets/102eb7f8-291f-4281-b704-35d8c0c5e4a6)

<details>
<summary>member_rank</summary>

## member_rank

> tbl_vote_202005 테이블과 tbl_member_202005 테이블을 조인하여 사용하였다.
>
> order by를 사용해 총투표건수 항목을 내림차순으로 정렬하여 출력하고
>
> 총득표건수가 같을 경우는 후보번호 올림차순으로 출력한다.

![image](https://github.com/user-attachments/assets/d6760cc9-9ae1-406c-8a75-e08e655699b3)

</details>
