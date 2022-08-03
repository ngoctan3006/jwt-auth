const classCode = window.location.search.split('=')[1];

const getScore = async () => {
  try {
    const { data } = await API.get(`/students/score/${classCode}`);
    $('#title').text(`${data.code} - ${data.subjectName.toUpperCase()}`);
    $('#midterm').text(data.midterm || 'Chưa nhập');
    $('#final').text(data.final || 'Chưa nhập');
  } catch (error) {
    alert(error.response.data.message);
  }
};

getScore();

const outClass = async () => {
  const cf = confirm('Bạn có chắc chắn muốn rời lớp này?');
  if (!cf) return;
  try {
    await API.post('class/out-class', { classCode });
    alert('Bạn đã hủy đăng ký lớp thành công!');
    window.location.href = './classlist-student.html';
  } catch (error) {
    alert(error.response.data.message);
  }
};
