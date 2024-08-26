# 쇼핑몰 회원관리 페이지

> index.jsp 

![image](https://github.com/user-attachments/assets/6196516e-fadf-446b-b021-c0181a4a84e0)

> join.jsp

![image](https://github.com/user-attachments/assets/ad2ec725-411b-457f-9697-6379905f6968)

## join.jsp

    지시문 형식을 통해 DB연결 자바파일과 SQL 관련 라이브러리를 불러온다.

> 코드

![image](https://github.com/user-attachments/assets/d8ee7fdc-ce2c-4193-b88b-ccd17c8a62a4)

    meber_tbl_02 테이블에서 가장 큰 custno를 조회하는 쿼리문 형식의 문자열을 sql 변수에 저장하고 DB연결 기능을 객체 변수 conn에 저장한다.

    pstmt에 저장된 sql문을 실행하여 결과를 객체변수 rs에 저장한다. rs에 결과값이 저장되는 경우 re.next()를 사용해 마지막 값을 확인하고

    member_tbl_02 테이블의 마지막 회원번호에 1을 더해서 num에 저장한다.

> 코드

![image](https://github.com/user-attachments/assets/fff176fe-407a-4300-a4fa-d042fe66e305)

    데이터 유호성 검사를 위한 함수이다.

    document.date.custname.value를 사용해 custname가 비어있는지 확인한다.

    값이 없다면 "회원성명이 입력되지 않았습니다." 출력하고 date.custname.focus()로 해당 입력 필드에 포커스를 이동시킨다.

    전부 다 입력된 경우, "회원등록이 완료 되었습니다."라는 메시지를 출력한다.

> 코드

![image](https://github.com/user-attachments/assets/9f961e7c-099b-4075-98f2-b25d23e72217)

## join_p.jsp

    데이터 삽입을 위한 sql 쿼리문을 sql 변수에 저장한다. 이 쿼리문은 member_tbl_02 테이블에 7개의 데이터를 삽입하는 역할을 한다.

    conn.prepareStatement(sql)을 통해 PreparedStatement 객체를 생성하고, 이를 pstmt 변수에 저장한다.

    custno 값은 숫자 형식이어야 하므로, request.getParameter("custno")로 가져온 문자열을 Integer.parseInt()로 정수로 변환하여 설정한다. 

    나머지는 pstmt.setString()를 사용하여 사용자 입력 데이터를 해당하는 각 필드에 설정하고 pstmt.executeUpdate()를 사용해 쿼리문을 실행시켜 데이터를 데이터베이스에 삽입한다.

    데이터입력 수행 완료 후 회원목록을 조회할 수 있는 페이지로 이동한다.

> 코드

![image](https://github.com/user-attachments/assets/e75c3426-6677-4dbc-a9a0-14d08e5b397a)

## DBConnect.java

    Connection 객체를 선언 후 url, id, pw 변수를 선언한다.

    Class.forName("oracle.jdbc.OracleDriver")를 통해 Oracle Driver 라이브러리를 불러오고,

    conn = DriverManager.getConnection(url, id, pw)는 지정된 URL로 설정한 id와 pw를 넣어서 연결시켜주고 그것을 연결 객체 conn에 넣어준다.

    연결이 성공적으로 이루어지면 DB Connect 라는 메시지를 출력한다.

> 코드

![image](https://github.com/user-attachments/assets/59c6f156-0d07-4822-a238-71b8885544a6)
