let classList = [];
let currClass = null;

const addClass = async (e) => {
  e.preventDefault();
  const classCode = $('#class-code').val();
  const subjectName = $('#subject-name').val();
  const semester = $('#semester').val();
  const room = $('#room').val();

  if (!classCode || !subjectName || !semester || !room) {
    alert('Vui lòng nhập đầy đủ thông tin!');
    return;
  }

  const data = { classCode, subjectName, semester, room };

  try {
    const {
      data: { message },
    } = await API.post('/class', data);
    alert(message);
    $('#addClassModal').modal('hide');
    fetchClass();
  } catch (error) {
    alert(error.response.data.message);
  }
};

const editClass = (id) => {
  currClass = id;
  const data = classList.find((item) => item.id === id);
  try {
    $('#edit-class-code').val(data.code);
    $('#edit-subject-name').val(data.subjectName);
    $('#edit-semester').val(data.semester);
    $('#edit-room').val(data.room);
  } catch (error) {
    alert(error.response.data.message);
  }
};

const updateClass = async (e, id) => {
  e.preventDefault();
  const oldClass = classList.find((item) => item.id === id);
  const classCode = $('#edit-class-code').val();
  const subjectName = $('#edit-subject-name').val();
  const semester = $('#edit-semester').val();
  const room = $('#edit-room').val();
  const newClass = { ...oldClass, classCode, subjectName, semester, room };
  try {
    await API.put(`/class/${id}`, newClass);
    alert('Cập nhật thành công!');
    $('#editClassModal').modal('hide');
    fetchClass();
  } catch (error) {
    alert(error.response.data.message);
  }
};

const deleteClass = async (id) => {
  const cf = confirm('Bạn có chắc chắn muốn xóa lớp này?');
  if (!cf) return;
  try {
    await API.delete(`/class/${id}`);
    alert('Xóa thành công!');
    fetchClass();
  } catch (error) {
    alert(error.response.data.message);
  }
};

const renderClassList = () => {
  const classListHtml = classList
    .map(
      ({ id, code, room, semester, subjectName }) => `
      <tr>
        <td><a href="class-detail.html?code=${code}">${code}</a></td>
        <td>${subjectName}</td>
        <td>${semester}</td>
        <td>${room}</td>
        <td>
          <button
            class="btn btn-warning"
            data-toggle="modal"
            data-target="#editClassModal"
            onclick="editClass('${id}')"
          >
            <i class="fa fa-fw fa-edit"></i>
          </button>
          <button class="btn btn-danger" onclick="deleteClass('${id}')">
            <i class="fa fa-fw fa-trash"></i>
          </button>
        </td>
      </tr>
    `
    )
    .join('');

  $('#class-list-body').html(classListHtml);
};

const fetchClass = async () => {
  try {
    const { data } = await API.get('/class');
    classList = data ? data : [];
    if (classList.length) {
      $('#no-data').hide();
      $('#class-list').show();
      renderClassList();
    } else {
      $('#no-data').show();
      $('#class-list').hide();
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

fetchClass();
