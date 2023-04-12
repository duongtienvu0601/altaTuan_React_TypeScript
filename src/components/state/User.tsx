import { useState } from "react";
{
  /**định nghĩa một type AuthUser để mô tả đối tượng người dùng được xác thực (authenticated user)
 với hai thuộc tính là name và email */
}
type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  {
    /**sử dụng useState để khởi tạo một biến state là user với giá trị ban đầu là null 
    và kiểu dữ liệu của nó là AuthUser hoặc null */
  }
  const [user, setUser] = useState<AuthUser | null>({} as AuthUser);
  {
    /**sử dụng để đăng nhập và cập nhật giá trị của biến state user thành một đối tượng AuthUser 
    cụ thể. Tương tự, hàm handleLogout được sử dụng để đăng xuất và cập nhật giá trị của biến
    state user thành null */
  }
  const handleLogin = () => {
    setUser({
      name: "Duong Tien Vu",
      email: "dtvu0601it@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name: {user?.name} </div>
      <div>User email: {user?.email} </div>
    </div>
  );
};
