const signup = async (e) => {
  e.preventDefault();
  const username = document.querySelector('input[name="username"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const comfirmPassword = document.querySelector('input[name="cfpassword"]').value;
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
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const role = document.querySelector('input[name="role"]:checked').value;

  const user = { username, password, role };
  try {
    const res = await API.post('/users/signin', user);
    localStorage.setItem(STORAGE_TOKEN_KEY, res.data.token);
    localStorage.setItem(USER, JSON.stringify(res.data.user));
    if (res.data.user.role === 1) {
      window.location.href = './index-lecturer.html';
    } else if (res.data.user.role === 0) {
      window.location.href = './index-student.html';
    }
  } catch (error) {
    alert(error?.response?.data?.message || 'Đăng nhập thất bại.');
  }
};
