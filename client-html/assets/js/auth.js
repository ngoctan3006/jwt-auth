const login = async (e) => {
  e.preventDefault();
  const username = $('input[name="username"]').val();
  const password = $('input[name="password"]').val();
  const role = $('input[name="role"]:checked').val();

  const user = { username, password, role };
  try {
    const { data } = await API.post('/users/signin', user);
    localStorage.setItem(STORAGE_TOKEN_KEY, data.token);

    if (data.user.role === 1) {
      window.location.href = './index-lecturer.html';
    } else if (data.user.role === 0) {
      window.location.href = './index-student.html';
    }
  } catch (error) {
    alert(error?.response?.data?.message || 'Đăng nhập thất bại.');
  }
};
