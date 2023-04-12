//định nghĩa kiểu dữ liệu cho một object
{
  /*name: kiểu string, hiển thị tên
  weekCount: kiểu number, hiển thị số tuần
  isLoggedIn: kiểu boolean
  hiển thị trạng thái đăng nhập của người dùng (true nếu đã đăng nhập và false nếu chưa).*/
}
type HomeProps = {
  name: string;
  weekCount?: number;
  isLoggedIn: boolean;
};

export const Home = (props: HomeProps) => {
  const { weekCount = 0 } = props;
  return (
    //nếu giá trị truyền vào là true vào thì sẽ hiển thị dữ liệu {name} và {weekCount},
    //nếu giá trị truyền vào là false thì trả về " Xin chào"
    <div>
      <h2>
        {props.isLoggedIn
          ? `${props.name} - Alta tuần ${weekCount}`
          : "Xin chào"}
      </h2>
    </div>
  );
};
