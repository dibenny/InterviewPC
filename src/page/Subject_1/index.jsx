import {
  Button,
  DatePicker,
  Select,
  Form,
  Input,
  Row,
  Col,
  Space,
  Table,
  Tag,
} from "antd";
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
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};
const columns = [
  {
    title: "指定渠道编码",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "指定渠道名称",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "所在省",
    dataIndex: "address",
    key: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
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
      maxWidth: 800,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <Form.Item
          label="协议客户"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={12}>
        <Form.Item label="协议状态" name="password">
          <Input.Password />
        </Form.Item>
      </Col>
    </Row>
    {/* -------- */}
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <Form.Item
          label="购进指标"
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
            <Select
              defaultValue="金额"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "金额",
                  label: "金额",
                },
              ]}
            />
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
            <Input placeholder="输入金额" />
          </Form.Item>
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={12}>
        <Form.Item
          label="纯销指标"
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
            <Select
              defaultValue="金额"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "金额",
                  label: "金额",
                },
              ]}
            />
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
            <Input placeholder="输入金额" />
          </Form.Item>
        </Form.Item>
      </Col>
    </Row>
    {/* -------- */}
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <Form.Item
          label="销售区域"
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
            <Button type="primary">选择区域</Button>
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
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={["a10"]}
              onChange={handleChange}
              options={options}
            />
          </Form.Item>
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={12}>
        <Form.Item label="签订时间" name="password">
          <DatePicker showTime onChange={onChange} onOk={onOk} />
        </Form.Item>
      </Col>
    </Row>
    {/* -------- */}
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <Form.Item
          label="纯销指标"
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
            <Select
              defaultValue="指定渠道"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "指定渠道",
                  label: "指定渠道",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="month"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Button>请选择渠道</Button>
          </Form.Item>
        </Form.Item>
      </Col>
    </Row>
    <Table columns={columns} dataSource={data} pagination={false} />
  </Form>
);
export default App;
