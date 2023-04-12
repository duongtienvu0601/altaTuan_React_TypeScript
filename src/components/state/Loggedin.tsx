import { useState } from "react" //import ussState từ thư viện react
export const Loggined = ()=>{
    {/** sử dụng useState để tạo một biến với giá trị ban đầu là false.
    phần tử isLoggedIn là giá trị hiện tại của state
    phần tử setIsLoggedIn dùng để cập nhật giá trị của state */}
    const[isLoggedIn, setIsLoggedIn] = useState(false)
     {/** Khi nhấn đăng nhập, biến state isLoggedIn sẽ được cập nhật thành true và 
    ngược lại khi nhấn đăng xuất*/} 
    const handleLogin = () =>{
        setIsLoggedIn(true)
    }
    const handleLogout = () =>{
        setIsLoggedIn(false)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>Duong Tien Vu is {isLoggedIn ? 'Login' : 'Logout'}</div>
        </div>
    )
}