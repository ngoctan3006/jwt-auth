export const removeAccents = (str) => {
  const AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ];
  for (let i = 0; i < AccentsMap.length; i++) {
    const re = new RegExp(`[${AccentsMap[i].substring(1)}]`, 'g', 'g');
    const char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
};

export const generateUsername = ({ name, code }) => {
  name = removeAccents(name.toLowerCase()).split(' ');
  const len = name.length;
  let username = name[len - 1] + '.';
  name = name.slice(0, len - 1);
  if (code.length >= 8) {
    username += name.map((el) => el[0]).join('');
    username += code.slice(2);
  } else {
    username += name.join('');
  }
  return username;
};
