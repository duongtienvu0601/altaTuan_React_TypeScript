//định nghĩa kiểu dữ liệu cho một mảng đối tượng
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {/*sử dụng phương thức map() để lặp qua mảng props.names và trả về một đoạn JSX hiển thị 
      thông tin của từng người trong danh sách. 
      "key" ở đây được sử dụng để xác định các phần tử trong danh sách khi chúng ta thay đổi props 
      hoặc thêm/xóa phần tử. */}
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
