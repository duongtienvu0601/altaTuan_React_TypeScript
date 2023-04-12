{/*định nghĩa một functional component Oscar với một prop duy nhất là children. 
Prop children trong React được sử dụng để truyền nội dung bên trong component thông qua các thẻ mở và đóng*/}
type HeadingProps = {
    children: string  
  };
export const Heading = (props: HeadingProps) => {
    return (
      <div>
        <h2>{props.children}</h2>
      </div>
    );
  };