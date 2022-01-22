import React from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
import { Dictionary, Stack } from "typescript-collections";
import MathNavbar from "../../components/MathNavbar";
import ToolStart from "../../components/ToolStart";

const tabs = [
  {
    id: 1,
    label: "Tab 1",
    description: (
      <>
        <p>Coming soon!</p>
      </>
    ),
  },
  {
    id: 2,
    label: "Tab 2",
    description: (
      <>
        <p>Coming soon!</p>
      </>
    ),
  },
  {
    id: 3,
    label: "Tab 3",
    description: (
      <>
        <p>Coming soon!</p>
      </>
    ),
  },
];

const title = "Boolean Algebra";
const description = "Coming soon!";

type InputError = {
  code: "INPUT_ERROR";
  message: string;
};

interface Props {}

interface State {
  expression: string;
  bools: Dictionary<string, Array<number>> | InputError;
}

class BooleanAlgebra extends React.Component<Props, State> {
  static eval(
    expression: string,
    bools: Dictionary<string, number[]>
  ): Array<number> {
    const doCalc = function (op: string, op1: any, op2: any): number {
      if (op === "^") {
        return op1 ^ op2;
      }
      if (op === "&") {
        return op1 & op2;
      }
      if (op === "|") {
        return op1 | op2;
      }
      if (op === "->") {
        return (!op1 ? 1 : 0) | op2;
      }
      if (op === "<->") {
        return (op1 & op2) | ((!op1 ? 1 : 0) & (!op2 ? 1 : 0));
      }
      // in case of error
      return 2;
    };
    // part 1 vars
    const postFix = BooleanAlgebra.infixToPostfix(expression);
    // typecast bools
    // potential problem if no values
    const boolsLength: number = bools.values()[0].length;
    const postFixBools: Array<number | string | undefined> = [];
    const finalBools: Array<number> = [];
    let temp: Array<number | undefined>;
    let temp2: number | undefined;
    // part 2 vars
    const operandStack: Stack<any> = new Stack<any>();
    let operand1: number | string | undefined;
    let operand2: number | string | undefined;
    let result: number;
    for (let k = 0; k < boolsLength; k++) {
      for (let i = 0; i < postFix.length; i++) {
        if (bools.getValue(postFix[i])) {
          temp = bools.getValue(postFix[i]) ?? [];
          temp2 = temp.at(k);
          postFixBools.push(temp2);
        } else {
          postFixBools.push(postFix[i]);
        }
      }
      for (let i = 0; i < postFixBools.length; i++) {
        if (typeof postFixBools[i] === "string") {
          if (postFixBools[i] === "-") {
            operand1 = operandStack.pop();
            result = !operand1 ? 1 : 0;
            operandStack.push(result);
          } else {
            operand2 = operandStack.pop();
            operand1 = operandStack.pop();
            result = doCalc(postFixBools[i] as string, operand1, operand2);
            operandStack.push(result);
          }
        } else {
          operandStack.push(postFixBools[i]);
        }
      }
      finalBools.push(operandStack.pop());
    }
    return finalBools;
  }

  static unpackVars(
    expression: string
  ): Dictionary<string, Array<number>> | InputError {
    // guard for errors
    let error: InputError;
    // verify validity
    const ops: Array<string> = ["(", "-", "&", "|", "->", "<->", ")", "^"]; // used later too
    const splitexpr: Array<string> = expression.split(/\s+/gm);
    let match: boolean;
    // check if all paranthesis are matching
    for (let i = 0; i < splitexpr.length; i++) {
      if (splitexpr[i] === "(") {
        match = false;
        for (let j = i; j < splitexpr.length; j++) {
          if (splitexpr[j] === ")") {
            splitexpr.splice(i, 1);
            splitexpr.splice(j - 1, 1); // j - 1 because expect post removel index
            match = true;
            break;
          }
        }
        if (!match) {
          error = {
            code: "INPUT_ERROR",
            message: "INPUT ERROR: No closing paranthesis",
          };
          return error;
        }
        i = -1; // reset loop
      } else if (splitexpr[i] === ")") {
        error = {
          code: "INPUT_ERROR",
          message: "INPUT ERROR: No opening paranthesis",
        };
        return error;
      }
    }
    // check for negation (unary operators)
    for (let i = 0; i < splitexpr.length; i++) {
      if (splitexpr[i] === "-") {
        if (i !== splitexpr.length - 1) {
          if (ops.includes(splitexpr[i + 1])) {
            error = {
              code: "INPUT_ERROR",
              message: "INPUT ERROR: operator after -",
            };
            return error;
          }
          // otherwise splice and reset loop
          splitexpr.splice(i, 1);
          i = -1;
        } else {
          error = {
            code: "INPUT_ERROR",
            message: "INPUT ERROR: no operand after -",
          };
          return error;
        }
      }
    }
    // Check for alternating operands and ops
    for (let i = 0; i < splitexpr.length; i++) {
      if (i % 2 === 0) {
        if (ops.includes(splitexpr[i])) {
          error = {
            code: "INPUT_ERROR",
            message: "INPUT ERROR: operators next to each other",
          };
          return error;
        }
      } else if (!ops.includes(splitexpr[i])) {
        error = {
          code: "INPUT_ERROR",
          message: "INPUT ERROR: operands next to each other",
        };
        return error;
      } else if (i === splitexpr.length - 1) {
        error = {
          code: "INPUT_ERROR",
          message: "INPUT ERROR: no operators last",
        };
        return error;
      }
    }
    // Check for trailing spaces
    if (splitexpr[0] === "" || splitexpr[splitexpr.length - 1] === "") {
      error = {
        code: "INPUT_ERROR",
        message: "INPUT ERROR: trailing spaces",
      };
      return error;
    }
    // Unpack
    const varset: Set<string> = new Set(expression.split(/\s+/gm));
    ops.forEach((op) => varset.delete(op));
    const newVars: Array<string> = Array.from(varset);
    const allVarVals: Dictionary<string, Array<number>> = new Dictionary<
      string,
      Array<number>
    >();
    let varVals: Array<number>;
    let mask: number;
    for (let i = 0; i < newVars.length; i++) {
      varVals = [];
      mask = 1 << i;
      for (let j = 0; j < 2 ** newVars.length; j++) {
        mask & j ? varVals.push(1) : varVals.push(0);
      }
      allVarVals.setValue(newVars[i], varVals);
    }
    return allVarVals;
  }

  static infixToPostfix(expr: string): Array<string> {
    // order of ops in array matters :)
    const ops: Array<string> = ["(", "<->", "->", "|", "&", "-", "^"];
    const precedence: Dictionary<string | undefined, number> = new Dictionary<
      string | undefined,
      number
    >();
    let p = 1;
    ops.forEach((op) => precedence.setValue(op, p++));
    precedence.setValue("^", 3);
    const opStack: Stack<string> = new Stack<string>();
    const exprList = expr.split(/\s+/gm);
    const postFixList: Array<string> = [];

    for (let i = 0; i < exprList.length; i++) {
      if (exprList[i] === "(") {
        opStack.push(exprList[i]);
      } else if (exprList[i] === ")") {
        while (opStack?.peek() !== "(") {
          postFixList.push(opStack.pop() ?? "ERROR10");
        }
        opStack.pop();
      } else if (ops.includes(exprList[i])) {
        // ?? should lead to while loop end
        while (
          (precedence.getValue(opStack.peek()) ?? -1) >=
          (precedence.getValue(exprList[i]) ?? 10)
        ) {
          postFixList.push(opStack.pop() ?? "ERROR3");
        }
        opStack.push(exprList[i]);
      } else {
        postFixList.push(exprList[i]);
      }
    }

    while (!opStack.isEmpty()) {
      postFixList.push(opStack.pop() ?? "ERROR4");
    }

    return postFixList;
  }

  constructor(props: Props) {
    super(props);
    this.state = { expression: "", bools: new Dictionary() };
  }

  getExpression(): string {
    return this.state.expression;
  }

  // Change Q to expression
  setExpression(expression: string): void {
    this.setState(
      // { expression, bools: BooleanAlgebra.unpackVars(expression) },
      (state, props) => {
        const newbools = BooleanAlgebra.unpackVars(expression);
        if (newbools instanceof Dictionary) {
          newbools.setValue(
            expression,
            BooleanAlgebra.eval(expression, newbools)
          );
          // this.setState({ bools: newbools });
        }
        return { expression, bools: newbools };
      }
    );
    // Change Q to expression
  }

  getBools(): Dictionary<string, Array<number>> | InputError {
    return this.state.bools;
  }

  render(): JSX.Element {
    return (
      <>
        <MathNavbar />
        <ToolStart title={title} description={description} tabs={tabs} />
        <div style={{ height: "30px" }} />
        <Container fluid="md">
          <Row className="gy-3" style={{ margin: "auto" }}>
            <Col sm="auto" style={{ maxWidth: "50px", marginLeft: "10px" }}>
              <p>Set:</p>
            </Col>
            <Col
              sm="auto"
              style={{
                maxWidth: "9%",
                marginTop: "10px",
                marginLeft: "30px",
                fontSize: "x-large",
              }}
            >
              <p>&#123;</p>
            </Col>
            <Col lg="auto" style={{ width: "40%", marginTop: "13px" }}>
              <Form.Control
                type="text"
                placeholder="Input Set"
                onChange={(e) => this.setExpression(e.target.value)}
              />
            </Col>
            <Col
              lg="auto"
              style={{ maxWidth: "9%", marginTop: "10px", fontSize: "x-large" }}
            >
              <p>&#125;</p>
            </Col>
          </Row>
          <p>{this.getExpression()}</p>
          <p>{this.getBools().toString()}</p>
        </Container>
      </>
    );
  }
}

export default BooleanAlgebra;
