import React from "react";
import Navbar from "../../components/MathNavbar";

interface Props {}

interface State {
  num: number;
  name: string;
}

class Text extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { num: 10, name: "Jimmy" };
    this.getNum();
    this.getName();
  }

  getNum(): number {
    return this.state.num;
  }

  getName(): string {
    return this.state.name;
  }

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.num}</div>
        <div>{this.state.name}</div>
      </>
    );
  }
}

export default Text;
