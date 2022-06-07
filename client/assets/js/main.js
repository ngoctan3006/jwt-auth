function signup(e) {
  e.preventDefault();
  const username = document.querySelector('input[name="username"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const cfpassword = document.querySelector('input[name="cfpassword"]').value;
  const user = {
    username,
    email,
    password,
    cfpassword,
  };
  const json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert('Đăng ký thành công');
}

function login(e) {
  e.preventDefault();
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const user = localStorage.getItem(username);
  const data = JSON.parse(user);
  if (!user) {
    alert('Vui lòng nhập thông tin');
  } else if (username == data.username && password == data.password) {
    alert('Đăng nhập thành công');
    window.location.href = '';
  } else {
    alert('Thông tin chưa chính xác');
  }
}
