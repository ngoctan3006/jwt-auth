const classCode = window.location.search.split('=')[1];
let studentList = [];
let studentPending = [];

const acceptStudent = async (e, code) => {
  e.preventDefault();
  try {
    await API.put('class/accept-student', {
      classCode,
      studentCode: code,
    });
    alert('Đã thêm sinh viên vào lớp.');
    studentList.push(studentPending.find((item) => item.code === code));
    studentPending = studentPending.filter((item) => item.code !== code);
    renderPending();
    renderStudentList();
  } catch (error) {
    alert(error.response.data.message);
  }
};

const editStudent = (code) => {
  const student = studentList.find((item) => item.code === code);
  $('#edit-student-code').val(student.code);
  $('#student-name').val(student.fullname);
  $('#midterm').val(student.midterm);
  $('#final').val(student.final);
};

const deleteStudent = async (e, code) => {
  e.preventDefault();
  const cf = confirm('Bạn có chắc chắn muốn xóa sinh viên này khỏi lớp?');
  if (cf) {
    try {
      await API.delete('/class/delete-student', {
        classCode,
        studentCode: code,
      });
      alert('Xóa sinh viên thành công');
      renderStudentList();
    } catch (error) {
      alert(error.response.data.message);
    }
  }
};

const renderStudentList = () => {
  const studentListHtml = studentList
    .map(
      (item, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${item.fullname}</td>
        <td>${item.code}</td>
        <td>${item.midterm ? item.midterm : 'Chưa nhập'}</td>
        <td>${item.final ? item.final : 'Chưa nhập'}</td>
        <td>
          <button class="btn btn-warning" data-toggle="modal" onclick="editStudent('${
            item.code
          }')" data-target="#editStudentModal"><i class="fa fa-fw fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deleteStudent(event, '${
            item.code
          }')"><i class="fa fa-fw fa-trash"></i></button>
        </td>
      </tr>
    `
    )
    .join('');

  $('#student-list-body').html(studentListHtml);
};

const renderPending = () => {
  const pendingHtml = studentPending
    .map(
      (item) => `
      <tr>
        <td width="10%">${item.code}</td>
        <td width="25%">${item.fullname}</td>
        <td width="10%">
          <button class="btn btn-success" onclick="acceptStudent(event, '${item.code}')"><i class="fa fa-fw fa-check"></i></button>
          <button class="btn btn-danger"><i class="fa fa-fw fa-xmark"></i></button>
        </td>
      </tr>
    `
    )
    .join('');

  $('#pending-body').html(pendingHtml);
};

(async () => {
  try {
    const { data: classInfo } = await API.get(`/class/${classCode}`);
    const { data: studentInClass } = await API.get(`/students/student-list/${classCode}?status=1`);
    const { data: pending } = await API.get(`/students/student-list/${classCode}?status=0`);
    if (studentInClass?.length) studentList.push(...studentInClass);
    if (pending?.length) studentPending.push(...pending);

    $('#title').text(`${classInfo.code} - ${classInfo.subjectName.toUpperCase()}`);

    if (studentList.length) {
      $('#no-data').hide();
      $('#student-list').show();
      renderStudentList();
    } else {
      $('#no-data').show();
      $('#student-list').hide();
    }

    if (studentPending.length) {
      $('#no-data-pending').hide();
      $('#pending').show();
      renderPending();
    } else {
      $('#no-data-pending').show();
      $('#pending').hide();
    }
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
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

const updateStudentScore = async (e) => {
  e.preventDefault();
  const studentCode = $('#edit-student-code').val();
  const midterm = $('#midterm').val();
  const final = $('#final').val();

  try {
    await API.put('class/input-score', { classCode, studentCode, midterm, final });
    alert('Cập nhật điểm thành công');
    renderStudentList();
    $('#editStudentModal').modal('hide');
  } catch (error) {
    alert(error.response.data.message);
  }
};
