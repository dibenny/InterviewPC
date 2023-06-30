import {
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Divider, Button } from "antd";
import { BankOutlined } from "@ant-design/icons";
import { useState } from "react";
import Subject_1 from "../src/page/Subject_1";
import Subject_2 from "../src/page/Subject_2";
import Subject_3 from "../src/page/Subject_3";
import DividerTitle from "./PascalCase/DividerTitle.jsx";
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("功能A", "1", <PieChartOutlined />),
  getItem("功能B", "2", <DesktopOutlined />),
  getItem("功能C", "3", <UserOutlined />),
  getItem("功能D", "3", <TeamOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout
        style={{
          minHeight: "100%",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          direction="vertical"
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <div
            style={{
              width: "100%",
              height: "50px",
              padding: 0,
              background: "#2A3139",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                margin: "0px 16px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <BankOutlined
                style={{
                  fontSize: "24px",
                  marginRight: "10px",
                  color: "#A4A4A6",
                }}
              />
              <span style={{ color: "#A4A4A6" }}>首页</span>
            </div>
            <div
              style={{
                margin: "0px 16px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <BankOutlined
                style={{
                  fontSize: "24px",
                  marginRight: "10px",
                  color: "#A4A4A6",
                }}
              />
              <span style={{ color: "#A4A4A6" }}>主数据</span>
            </div>
            <div
              style={{
                margin: "0px 16px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <BankOutlined
                style={{
                  fontSize: "24px",
                  marginRight: "10px",
                  color: "#A4A4A6",
                }}
              />
              <span style={{ color: "#A4A4A6" }}>辖区管理</span>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              padding: 0,
              background: "#fff",
            }}
          >
            <Breadcrumb style={{ margin: "8px 16px" }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>年度协议管理</Breadcrumb.Item>
              <Breadcrumb.Item>二级商协议</Breadcrumb.Item>
              <Breadcrumb.Item>新增二级商协议</Breadcrumb.Item>
            </Breadcrumb>
            <a style={{ margin: "16px 16px", fontSize: "18px", color: "#000" }}>
              新增二级商协议
            </a>
          </div>
          <DividerTitle num={1} title={"协议主体"} />
          <Content
            style={{
              margin: "0px 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                // minHeight: '100%',
                background: colorBgContainer,
              }}
            >
              <Subject_1 />
            </div>
          </Content>
          {/* 2222222 */}
          <div
            style={{
              width: "100%",
              height: "5%",
              padding: 0,
              background: "#fff",
            }}
          ></div>
          <DividerTitle num={2} title={"产品政策"} />
          <div
            style={{
              margin: "0px 16px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Button type="primary">添加产品</Button>
            <a style={{ margin: "0px 30px" }}>购进总指标(万元): ￥152.65</a>
            <a>
              按指标季度分解: 【Q1】￥152.65, 【Q1】￥152.65, 【Q1】￥152.65,
              【Q1】￥152.65
            </a>
            <a style={{ marginLeft: "30px" }}>纯销总指标(万元): ￥152.65</a>
          </div>
          <Content
            style={{
              margin: "0px 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
              }}
            >
              <Subject_2 />
            </div>
          </Content>
          {/* 333333 */}
          <div
            style={{
              width: "100%",
              height: "5%",
              padding: 0,
              background: "#fff",
            }}
          ></div>
          <DividerTitle num={3} title={"补充协议"} />
          <Content
            style={{
              margin: "0px 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
              }}
            >
              <Subject_3 />
            </div>
          </Content>
        </Layout>
      </Layout>
      {/* ---------------- */}

      {/* -------------------------- */}
    </div>
  );
};
export default App;
