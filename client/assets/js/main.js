function signup(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = {
    username: username,
    email: email,
    password: password,
  };
  const json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert('Đăng ký thành công');
}

function login(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const user = localStorage.getItem(username);
  const data = JSON.parse(user);
  if (!user) {
    alert('Vui lòng nhập thông tin');
  } else if (username == data.username && email == data.email && password == data.password) {
    alert('Đăng nhập thành công');
    window.location.href = '';
  } else {
    alert('Thông tin chưa chính xác');
  }
}
