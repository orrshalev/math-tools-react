import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Dictionary } from "typescript-collections";
import MathNavbar from "../../components/MathNavbar";
import ToolStart from "../../components/ToolStart";

/**
 * Information to fill accordion tabs
 */
type Tab = {
  id: number;
  label: string;
  description: JSX.Element;
};

const tabs: Tab[] = [
  {
    id: 0,
    label: "Learn",
    description: <></>,
  },
  {
    id: 1,
    label: "Examples",
    description: <></>,
  },
];

const title = "Number Base Converter";
const description =
  "This tool will let help you convert numbers from one base to another, for example decimal to binary.";

interface Props {}

type State = {
  input: string;
  output: string;
  startBase: number;
  endBase: number;
};

const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8",
"9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
"Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
   15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const numberTable : Dictionary<string, number> = new Dictionary();

for (let i = 0; i < numbers.length; i++) {
  numberTable.setValue(values[i], numbers[i]);
}

class NumberBaseConverter extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { input: "", output: "", startBase: 10, endBase: 2 };
  }

  convert(input : string) : void {
    this.setState((state, props) => {
    const newexpr : string = parseInt(input, state.startBase).toString(state.endBase);
    return { input, output: newexpr };
    });
  }

  displayOutput() : JSX.Element {
    if (this.state.output === "NaN") {
      return (<></>);
    }
    return (
      <>
        <p>{this.state.output}</p>
      </>
    );
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
              <p>Starting Base</p>
            </Col>
            <Col sm="auto" style={{ maxWidth: "200px", marginLeft: "10px" }}>
              <Form.Select onChange={(e) =>
                this.setState((state, props) => {
                  const startBase = parseInt(e.target.value, 10);
                  this.convert(state.input);
                  return { startBase };
                })}
              >
                <option>2 (binary)</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8 (octal)</option>
                <option>9</option>
                <option>10 (decimal)</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16 (hex)</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="gy-3" style={{ margin: "auto" }}>
            <Col sm="auto" style={{ maxWidth: "60px", marginLeft: "10px" }}>
              <p>Ending Base</p>
            </Col>
            <Col sm="auto" style={{ maxWidth: "200px", marginLeft: "10px" }}>
              <Form.Select onChange={(e) =>
                this.setState((state, props) => {
                  const endBase = parseInt(e.target.value, 10);
                  this.convert(state.input);
                  return { endBase };
                })}
              >
                <option>2 (binary)</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8 (octal)</option>
                <option>9</option>
                <option>10 (decimal)</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16 (hex)</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="gy-3" style={{ margin: "auto" }}>
            <Col sm="auto" style={{ maxWidth: "60px", marginLeft: "10px" }}>
              <p>Input</p>
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
                onChange={(e) => this.convert(e.target.value)}
              />
            </Col>
          </Row>
          <div style={{ height: "30px" }} />
          {this.displayOutput()}
          <div style={{ height: "30px" }} />
        </Container>
      </>
    );
  }
}

export default NumberBaseConverter;
