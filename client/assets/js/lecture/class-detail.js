const classCode = window.location.search.split('=')[1];
let studentList = [];

const renderStudentList = () => {
  const studentListHtml = studentList.map(
    (item, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${item.fullname}</td>
        <td>${item.code}</td>
        <td>${item.midterm ? item.midterm : 'Chưa nhập'}</td>
        <td>${item.final ? item.final : 'Chưa nhập'}</td>
        <td>
          <button class="btn btn-warning" data-toggle="modal" data-target="#editStudentModal"><i
              class="fa fa-fw fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deleteStudent(this)"><i
              class="fa fa-fw fa-trash"></i></button>
        </td>
      </tr>
    `
  );

  $('#student-list-body').html(studentListHtml);
};

(async () => {
  try {
    const { data: classInfo } = await API.get(`/class/${classCode}`);
    const { data } = await API.get(`/students/student-list/${classCode}`);
    studentList.push(...data);

    $('#title').text(`${classInfo.code} - ${classInfo.subjectName.toUpperCase()}`);

    if (studentList.length) {
      $('#no-data').hide();
      $('#student-list').show();
      renderStudentList();
    } else {
      $('#no-data').show();
      $('#student-list').hide();
    }
  } catch (error) {
    console.log(error.response.data.message);
  }
})();

const addStudent = async (e) => {
  e.preventDefault();
  try {
    await API.post('class/addStudent', {
      classCode,
      studentCode: $('#student-code').val(),
    });
    alert('Thêm sinh viên thành công');
    renderStudentList();
    $('#addStudentModal').modal('hide');
  } catch (error) {
    alert(error.response.data.message);
  }
};
