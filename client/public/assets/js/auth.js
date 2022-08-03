const signup = async (e) => {
  e.preventDefault();
  const username = $('input[name="username"]').val();
  const password = $('input[name="password"]').val();
  const comfirmPassword = $('input[name="comfirmPassword"]').val();
  if (password !== comfirmPassword) {
    alert('Mật khẩu không khớp');
    return;
  }

  const user = { email, username, password, comfirmPassword };
  try {
    const res = await API.post('/users/signup', user);
    localStorage.setItem(STORAGE_TOKEN_KEY, res.data.token);
    alert('Đăng ký thành công.');
  } catch (error) {
    alert(error?.response?.data?.message || 'Đăng ký thất bại.');
  }
};

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
