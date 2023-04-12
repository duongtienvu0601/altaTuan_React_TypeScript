import { useRef, useEffect } from "react";

export const DomRef = () =>{
    //tạo một tham chiếu đến một phần tử input trên form
    const inputRef = useRef<HTMLInputElement>(null!)
    

    useEffect(()=>{
        //sử dụng phương thức focus() của phần tử input để đưa con trỏ vào phần tử input
        inputRef.current.focus()
        //truy cập các thuộc tính của phần tử DOM, chúng ta có thể sử dụng thuộc tính current
        inputRef.current.value = 'Duong Tien Vu';
    },[])

    return(
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}