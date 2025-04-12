// 예시용 학생 데이터 (실제 서비스에선 DB나 API로 대체)
const studentAccounts = [
  { id: '202301', name: '홍길동', googleId: 'hong2023@g.school.kr', password: 'Abc123!' },
  { id: '202302', name: '김민지', googleId: 'kim2023@g.school.kr', password: 'Minji123!' },
  { id: '202303', name: '이준호', googleId: 'lee2023@g.school.kr', password: 'Lee456!' },
];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const studentIdInput = document.getElementById('studentId');
  const studentNameInput = document.getElementById('studentName');
  const resultBox = document.getElementById('accountInfo');
  const googleIdSpan = document.getElementById('googleId');
  const googlePwSpan = document.getElementById('googlePw');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // 폼 제출 막기

    const inputId = studentIdInput.value.trim();
    const inputName = studentNameInput.value.trim();

    // 입력값으로 검색
    const student = studentAccounts.find(
      (s) => s.id === inputId && s.name === inputName
    );

    if (student) {
      // 결과 출력
      googleIdSpan.textContent = student.googleId;
      googlePwSpan.textContent = student.password;
      resultBox.style.display = 'block';
    } else {
      // 찾을 수 없는 경우
      googleIdSpan.textContent = '';
      googlePwSpan.textContent = '';
      resultBox.style.display = 'block';
      resultBox.innerHTML = '<p>해당 정보를 찾을 수 없습니다. 학번과 이름을 다시 확인해주세요.</p>';
    }
  });
});
