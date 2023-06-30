import { Button, DatePicker, Form, Row, Col } from "antd";
import Tables from "./tables";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};
const App = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 32,
    }}
    style={{
      maxWidth: "100%",
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    {/* -------- */}
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Row gutter={30}>
        <Col className="gutter-row" span={12}>
          <Form.Item
            label="产品"
            style={{
              marginBottom: 0,
            }}
          >
            <Form.Item
              name="year"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
              }}
            >
              <Button type="primary">选择产品</Button>
            </Form.Item>
            <Form.Item
              name="month"
              rules={[
                {
                  required: true,
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <a style={{ fontSize: "10px" }}>美丸 24粒/盒</a>
            </Form.Item>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item label="协议时效" name="password">
            <DatePicker showTime onChange={onChange} onOk={onOk} />
          </Form.Item>
        </Col>
      </Row>
      <Button>删除</Button>
    </div>
    <Tables default={true} />
    <p></p>
    <Tables default={false} />
  </Form>
);
export default App;
