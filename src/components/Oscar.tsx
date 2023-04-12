{/*định nghĩa một functional component Oscar với một prop duy nhất là children. 
Prop children trong React được sử dụng để truyền nội dung bên trong component thông qua các thẻ mở và đóng 
Kiểu dữ liệu của prop children được xác định bởi React.ReactNode, 
đây là một kiểu dữ liệu đặc biệt trong React để đại diện cho bất kỳ nội dung JSX nào, 
bao gồm các phần tử, các thành phần và cả văn bản đơn giản */}
type OscarProps = {
  children: React.ReactNode;
};
export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
