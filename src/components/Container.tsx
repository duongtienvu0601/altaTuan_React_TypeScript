/*định nghĩa kiểu dữ liệu cho Container
Prop styles có kiểu dữ liệu là React.CSSProperties, 
có nghĩa là nó phải là một đối tượng chứa các thuộc tính CSS và giá trị tương ứng*/
type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Duong Tien Vu</div>;
};
