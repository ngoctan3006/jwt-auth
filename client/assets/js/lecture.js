const curr_user = JSON.parse(localStorage.getItem(USER));

$('#lecture-name').text(curr_user.fullname);
