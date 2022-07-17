const changePassword = async (e) => {
  e.preventDefault();
  const oldPassword = $('#old-pass').val();
  const password = $('#new-pass').val();
  const confirmPassword = $('#cf-pass').val();
  const pw_change = {
    oldPassword,
    password,
    confirmPassword,
  };
  try {
    await API.put('/users/change-password', pw_change);
    alert('Đổi mật khẩu thành công. Vui lòng đăng nhập lại.');
    localStorage.removeItem(STORAGE_TOKEN_KEY);
    window.location.href = './login.html';
  } catch (error) {
    alert(error?.response?.data?.message || 'Đổi mật khẩu thất bại.');
  }
};
