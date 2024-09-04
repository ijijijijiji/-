# 쇼핑몰 회원관리 페이지

## index.jsp

    메인 페이지

> 페이지 화면 

![image](https://github.com/user-attachments/assets/6196516e-fadf-446b-b021-c0181a4a84e0)

## join.jsp

    회원등록 페이지

    사용자가 직접 회원정보를 입력하여 회원등록을 할 수 있다.
    
    이 때 회원번호는 sql 쿼리를 사용하여 회원번호를 자동 발생시킨다.

> 페이지 화면

![image](https://github.com/user-attachments/assets/ad2ec725-411b-457f-9697-6379905f6968)

    지시문 형식을 통해 DB연결 자바파일과 SQL 관련 라이브러리를 불러온다.

> 코드

![image](https://github.com/user-attachments/assets/d8ee7fdc-ce2c-4193-b88b-ccd17c8a62a4)

    meber_tbl_02 테이블에서 가장 큰 custno를 조회하는 쿼리문 형식의 문자열을 sql 변수에 저장하고 DB연결 기능을 객체 변수 conn에 저장한다.

    pstmt에 저장된 sql문을 실행하여 결과를 객체변수 rs에 저장한다. rs에 결과값이 저장되는 경우 re.next()를 사용해 마지막 값을 확인하고

    member_tbl_02 테이블의 마지막 회원번호에 1을 더해서 num에 저장한다.

> 코드

![image](https://github.com/user-attachments/assets/fff176fe-407a-4300-a4fa-d042fe66e305)

    데이터 유효성 검사를 위한 함수이다.

    document.date.custname.value를 사용해 custname가 비어있는지 확인한다.

    값이 없을때는 "회원성명이 입력되지 않았습니다." 알림창을 보여주고 date.custname.focus()로 해당 입력 필드에 포커스를 이동시킨다.

    값이 전부 다 있다면 "회원등록이 완료 되었습니다."라는 알림창을 보여준다.

> 코드

![image](https://github.com/user-attachments/assets/3bf4a1ec-162e-42d7-8bab-4c38728cf634)

## join_p.jsp

    데이터 삽입을 위한 sql 쿼리문을 sql 변수에 저장한다. 이 쿼리문은 member_tbl_02 테이블에 7개의 데이터를 삽입하는 역할을 한다.

    conn.prepareStatement(sql)을 통해 PreparedStatement 객체를 생성하고, 이를 pstmt 변수에 저장한다.

    custno 값은 숫자 형식이어야 하므로, request.getParameter("custno")로 가져온 문자열을 Integer.parseInt()로 정수로 변환하여 설정한다. 

    나머지는 pstmt.setString()를 사용하여 사용자 입력 데이터를 해당하는 각 필드에 설정하고 pstmt.executeUpdate()를 사용해 쿼리문을 실행시켜 데이터를 데이터베이스에 삽입한다.

    데이터입력 수행 완료 후 회원목록을 조회할 수 있는 페이지로 이동한다.

> 코드

![image](https://github.com/user-attachments/assets/e75c3426-6677-4dbc-a9a0-14d08e5b397a)

## DBConnect.java

    Class.forName("oracle.jdbc.OracleDriver")를 통해 Oracle Driver 라이브러리를 불러오고,

    conn = DriverManager.getConnection(url, id, pw)는 지정된 URL로 설정한 id와 pw를 넣어서 연결시켜주고 그것을 연결 객체 conn에 넣어준다.

    연결이 성공적으로 이루어지면 DB Connect 라는 메시지를 출력한다.

> 코드

![image](https://github.com/user-attachments/assets/59c6f156-0d07-4822-a238-71b8885544a6)

## member_list.jsp

    회원 목록을 조회할 수 있는 페이지

> 페이지 화면

![image](https://github.com/user-attachments/assets/b3b3cd3d-6fec-403c-8c4c-9ee386a4c8e0)

    member_tbl_02 테이블에서 custno, custname, phone, address, joindate, grade, city을 조회하는 쿼리문이다.
    
    joindate는 'yyyy-mm-dd' 형식으로 조회하고, grade는 CASE 문을 사용하여 'A'는 'VIP', 'B'는 '일반', 그 외에는 '직원'으로 변환하여 조회한다.

> 코드

![image](https://github.com/user-attachments/assets/17dde4cc-c8b1-41d8-b6f1-afc961176fc5)

    rs에는 다수개의 결과가 들어있기에 그 갯수만큼 반복하여 화면에 출력한다.

> 코드

![image](https://github.com/user-attachments/assets/b56a8780-24e9-4a92-86ef-c39a6f6bf909)

## member_search.jsp
    
    회원번호를 입력해 회원 정보를 조회할 수 있는 페이지

> 페이지 화면

![image](https://github.com/user-attachments/assets/5944e38a-69b5-48a4-9c7f-a69a6c182de8)

## member_search_list.jsp

> 입력한 회원번호의 회원 정보가 있을 때의 페이지 화면

![image](https://github.com/user-attachments/assets/cda62eca-9cc0-4f4a-808c-4e338b1b6816)

> 입력한 회원번호의 회원 정보가 없을 때의 페이지 화면

![image](https://github.com/user-attachments/assets/18bd3372-6156-4b39-91eb-292e2cd8f11d)

    request.getParameter("search")를 통해 사용자가 member_search.jsp에서 입력한 회원번호를 가져온다.

    member_tbl_02 테이블에서 custno, custname, phone, address, joindate, grade, city을 조회하는 쿼리문이다.

    grade는 CASE 문을 사용하여 'A'는 'VIP', 'B'는 '일반', 'C'는 '직원'으로 변환하여 조회한다.

    DB와 연결해 쿼리를 전송하고 결과를 받아온다.

> 코드

![image](https://github.com/user-attachments/assets/98083d1f-4524-445b-87f9-deb70226d040)

    if(rs.next()){ DB에 해당하는 회원이 있는 경우 테이블에서 해당 회원의 회원정보를 출력한다. member_list와 동일 형식이다.}
    
    else { 회원번호가 없는 경우 '<%= 변수명>의 회원정보는 없습니다.' 메시지를 출력한다. }

## sales_list.jsp

    회원 매출을 조회하고 매출 총합을 볼 수 있는 페이지

> 페이지 화면

![image](https://github.com/user-attachments/assets/f8eebb0a-caf1-41cd-af2e-1998c9436635)

    내부조인과 group by를 이용하여 회원별 매출을 조회하는 쿼리문이다.

> 코드

![image](https://github.com/user-attachments/assets/3a86d8ea-4545-4e89-80e0-b7e4eeee99d1)

    i라는 변수를 선언하고 회원 매출 정보가 한줄씩 출력될 때마다 i에 price를 누적하여 총합을 구한다.

    while문 밖에서 총합을 출력한다.

> 코드

![image](https://github.com/user-attachments/assets/7af3606b-3022-47e8-8cbf-205304c14337)
