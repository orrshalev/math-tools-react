import React from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
import { Dictionary, Stack } from "typescript-collections";
import MathNavbar from "../../components/MathNavbar";
import ToolStart from "../../components/ToolStart";

const tabs = [
  {
    id: 1,
    label: "Before you dive in",
    description: (
      <>
        <p>
          The following articles will be of use to have a fuller understanding
          of this tool:
        </p>
        <ul>
          <li>First order logic</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    label: "Learn",
    description: (
      <>
        <p>
          Boolean algebra is a branch of algebra where the only values that a
          number or variable can have are either 0 (meaning false) or 1 (meaning
          true). These values have operations different from those of standard
          algebra. For example, 1 + 1 = 1 under the rules of Boolean algebra.
          The point of Boolean algebra is to give some mathematical structure to
          the way that we organize and understand logical statements.
        </p>
        <p>
          For boolean algebra, there are three basic logical operations from
          which all other logical operations are derived from. These operations
          are explained below:
        </p>
        <div style={{ height: "10px" }} />
        <Table>
          <thead>
            <tr>
              <th>Logical operation</th>
              <th>Operator</th>
              <th>Logical Notation</th>
              <th>Boolean Notation</th>
              <th>Programming Notation</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conjunction</td>
              <td>AND</td>
              <td>P &and; Q</td>
              <td>P &sdot; Q</td>
              <td>P &amp; Q</td>
              <td>
                P &and; Q = 1 <br />
                if P = 1 and <br />
                Q = 1 <br />P &and; Q = 0 otherwise
              </td>
            </tr>
            <tr>
              <td>Disjunction</td>
              <td>OR</td>
              <td>P &or; Q</td>
              <td>P + Q</td>
              <td>P | Q</td>
              <td>
                P &or; Q = 0 <br />
                if P = 0 and <br />
                Q = 0 <br />P &or; Q = 0 otherwise
              </td>
            </tr>
            <tr>
              <td>Negation</td>
              <td>NOT</td>
              <td>&not; P</td>
              <td>- P</td>
              <td>! P</td>
              <td>
                &not; P = 0 <br />
                if P = 1 and <br />
                &not; P = 1 <br />
                if P = 0
              </td>
            </tr>
          </tbody>
        </Table>
        <div style={{ height: "10px" }} />
        <p>
          In addition to the basic logical operations, certain other operations
          are commonly used:
        </p>
        <div style={{ height: "10px" }} />
        <Table>
          <thead>
            <tr>
              <th>Logical operation</th>
              <th>Operator</th>
              <th>Logical Notation</th>
              <th>Boolean Notation</th>
              <th>Programming Notation</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Exclusive <br /> Disjunction</td>
              <td>XOR</td>
              <td>P &oplus; Q</td>
              <td>(P &sdot; - Q) + (- P &sdot; Q) </td>
              <td>P ^ Q</td>
              <td>
                P &oplus; Q = 0<br />
                if P = Q and <br />
                P &oplus; Q = 1<br />
                if P &ne; Q
              </td>
            </tr>
            <tr>
              <td>Implication</td>
              <td>IF</td>
              <td>P &rarr; Q</td>
              <td>- P + Q</td>
              <td>!P | Q</td>
              <td>
                P &rarr; Q = 0<br />
                if P = 1 and Q = 0 and <br />
                P &rarr; Q = 1<br />
                otherwise
              </td>
            </tr>
            <tr>
              <td>Bicondition</td>
              <td>IFF</td>
              <td>P &harr; Q</td>
              <td>(P &sdot; Q) + <br /> (-P &sdot; -Q)</td>
              <td>(P &amp; Q) | (!P &amp; !Q)</td>
              <td>
                P &harr; Q = 0<br />
                if P = Q and <br />
                P &harr; Q = 1<br />
                if P &ne; Q
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    ),
  },
  {
    id: 3,
    label: "How to use",
    description: (
      <>
        <h5>Summary</h5>
        <p>
          Enter a valid boolean expression with values delimited with spaces to
          generate a truth table.
        </p>
        <h5>Precedence of operators</h5>
        <p>Operators have precedence when being calculated as following:</p>
        <ol>
          <li> ( , ) &emsp;&lt;-- parentheses/precedence</li>
          <li> - &emsp;&lt;-- not/negation</li>
          <li> &amp; &emsp;&lt;-- and/conjunction</li>
          <li> | , ^ &emsp;&lt;-- or/disjunction, xor/exlucsive disjunction</li>
          <li> -&gt; &emsp;&lt;-- if/implication</li>
          <li> &lt;-&gt; &emsp;&lt;-- iff/bicondition</li>
        </ol>
        <h5>Examples of valid input</h5>
        <p>A &amp; B &emsp;&lt;-- A and B</p>
        <p>A | - B &emsp;&lt;-- A or not B</p>
        <p>A ^ B &emsp;&lt;-- A xor B</p>
        <p>A &lt;-&gt; B &emsp;&lt;-- A if and only if B</p>
        <p>A -&gt; B &emsp;&lt;-- A if B</p>
        <p>( A | B ) &amp; C &emsp;&lt;-- A or B and C</p>
        <p>
          A | B &amp; C &emsp;&lt;-- B and C or A (B and C evaluated first
          because of order of operations)
        </p>
        <h5>Examples of invalid input</h5>
        <p>A&amp;B &emsp;&lt;-- put spaces between everything</p>
        <p>(A | B) &emsp;&lt;-- spaces between parentheses too!</p>
      </>
    ),
  },
];

const title = "Boolean Algebra";
const description = "Builds a truth table given a boolean expression";

type InputError = {
  code: "INPUT_ERROR";
  message: string;
};

interface Props {}

interface State {
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
          temp2 = temp[k];
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
    // Check if too many vars
    if (varset.size > 8) {
      error = {
        code: "INPUT_ERROR",
        message: "INPUT ERROR: too many variables (max is 8)",
      };
      return error;
    }
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
    this.state = { bools: new Dictionary() };
  }

  // getExpression(): string {
  //   return this.state.expression;
  // }

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
        return { bools: newbools };
      }
    );
    // Change Q to expression
  }

  getBools(): Dictionary<string, Array<number>> | InputError {
    return this.state.bools;
  }

  displayBoolTable(): JSX.Element {
    const transpose = (m: any): any =>
      m.reduce(
        (prev: any, next: any) =>
          next.map((item: any, i: any) => (prev[i] || []).concat(next[i])),
        []
      );
    const bools = this.getBools();
    if (bools instanceof Dictionary) {
      const tran = transpose(bools.values());
      return (
        <Table responsive>
          <thead>
            <tr key="vars">
              {bools.keys().map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tran.map((row: any) => (
              <tr key={row.toString()}>
                {row.map((val: any) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
    // Otherwise print message
    return <h5>{bools.message}</h5>;
  }

  render(): JSX.Element {
    return (
      <>
        <MathNavbar />
        <ToolStart title={title} description={description} tabs={tabs} />
        <div style={{ height: "30px" }} />
        <Container fluid="md">
          <Row className="gy-3" style={{ margin: "auto" }}>
            <Col sm="auto" style={{ maxWidth: "60px", marginLeft: "10px" }}>
              <p>Boolean Expression:</p>
            </Col>
            <Col
              sm="auto"
              style={{
                maxWidth: "9%",
                marginTop: "10px",
                marginLeft: "30px",
                fontSize: "x-large",
              }}
            />
            <Col lg="auto" style={{ width: "60%", marginTop: "13px" }}>
              <Form.Control
                type="text"
                placeholder="Input Expression"
                onChange={(e) => this.setExpression(e.target.value)}
              />
            </Col>
            <Col
              lg="auto"
              style={{ maxWidth: "9%", marginTop: "10px", fontSize: "x-large" }}
            />
          </Row>
          <div style={{ height: "30px" }} />
          {this.displayBoolTable()}
          <div style={{ height: "40px" }} />
        </Container>
      </>
    );
  }
}

export default BooleanAlgebra;
