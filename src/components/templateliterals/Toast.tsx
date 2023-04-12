/**
 * Vị trí prop có thể nằm ở:
 * left-center | left-top | left-bottom |
 * center | center-top | center-bottom
 * right-center | right-top | right-bottom
 */
//định nghĩa type cho các Position
type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";


type ToastProps = {
  position: 
    //có thể kết hợp bất kì giữa 2 type HorizontalPosition và VerticalPosition ngoại trừ kiểu "center-center"
    Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'> 
}
export const Toast = ({ position }: ToastProps) => {
  return <div>Notification Position - {position}</div>;
};
