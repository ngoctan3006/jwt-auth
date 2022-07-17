(async () => {
  if (!localStorage.getItem(STORAGE_TOKEN_KEY)) {
    window.location.href = './login.html';
  }

  try {
    const { data: curr_user } = await API.get('/students/me');
    $('#student-name').text(curr_user.fullname);
    $('#student-id').val(curr_user.code);
    $('#username').val(curr_user.username);
    $('#sidebar-fullname, #fullname').val(curr_user.fullname);
  } catch (error) {
    alert('Phiên đăng nhập của bạn đã hết hạn, vui lòng đăng nhập lại!');
    window.location.href = './login.html';
  }
})();

const logout = () => {
  localStorage.removeItem(STORAGE_TOKEN_KEY);
  window.location.href = './login.html';
};
