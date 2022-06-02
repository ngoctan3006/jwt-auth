# Ứng dụng quản lý sinh viên

Project sử dụng [NodeJS](https://nodejs.org/en/), [express](https://expressjs.com/)

Tạo file `.env` ở trong `/server` với nội dung:
```
JWT_SECRET = <mã bảo mật jwt>

DB_HOST = localhost
DB_USER = <username>
DB_PASSWORD = <password>
DB_NAME = <db name>
DB_PORT = <db port> (mặc định: 3306)
```

Sử dụng `cd server` để đi tới thư mục `/server`

Sử dụng `npm i` hoặc `yarn` để cài các dependencies.

Sử dụng `npm run dev` hoặc `yarn run dev` để chạy server trên môi trường development
