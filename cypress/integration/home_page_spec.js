describe('The Home Page', () => {
  it('successfully loads', () => {
    // change URL to match your dev URL

    // cy.visit('/'); // cypress.json 파일의 baseUrl을 수정한 경우
    cy.visit('http://localhost:3000/'); // cypress.json 파일 수정 X 경우
  });
});

// 다른 서버와 테스트를 진행할 때
// 해당 서버의 주소를 cypress의 baseUrl로 지정해주면 상대경로로 접근할 수 있다.
// 커밋을 보면 알 수 있지만 이 파일의 경우 localhost:3000으로 baseUrl이 지정되어 있어서
// 상대경로인 '/'(홈) 즉 localhost:3000/ 에 접근하는 TEST를 진행한다.

// cypress.json() cypress설정파일에서
// baseUrl을 안바꾸고 다른 주소를 입력해도 된다.
