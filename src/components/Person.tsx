//định nghĩa kiểu dữ liệu cho một object
type PersonProps = {
  name: {
    first: string; 
    last: string;
  };
};
{
  /*Component Person sử dụng destructuring để trích xuất object name từ đối số props,
  sau đó render ra các giá trị first và last trong một phần tử <div> 
  bằng cách truy cập chúng thông qua props.name.first và props.name.last. */
}
export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
