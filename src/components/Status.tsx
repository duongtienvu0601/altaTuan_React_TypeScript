{
  /*định nghĩa một functional component tên là Status với một prop tên là status và kiểu dữ liệu 
của prop lần lượt là 'loading' | 'success' | 'error' nghĩa là chỉ cho phép prop status nhận 
một trong ba giá trị là "loading", "success", hoặc "error". 
Nếu dữ liệu truyền vào khác ba giá trị trên thì sẽ gây ra lỗi */
}
type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message; //khởi tạo biến để lưu trữ nội dung thông báo
  //điều kiện để xác định giá trị của status
  if (props.status === "loading") {
    message = "Loading...   ";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
