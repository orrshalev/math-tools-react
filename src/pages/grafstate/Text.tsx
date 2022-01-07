import React from "react";

interface Props {}

interface State {
  num: number;
}

class Text extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { num: 3 };
    this.getNum();
  }

  getNum(): number {
    return this.state.num;
  }

  render(): JSX.Element {
    return <>{this.state.num}</>;
  }
}

export default Text;
