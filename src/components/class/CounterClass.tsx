import { Component } from 'react';
//định nghĩa type 
type Props = {
  name: string;
};

type State = {
  count: number;
};

//khởi tạo state bằng cách thiết lập count thành 0
class CounterClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }
  //hai phương thức handleIncrement và handleDecrement được sử dụng để tăng giảm giá trị
  //của đối tượng count trong state bằng cách gọi setState
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>{this.props.name} Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;
