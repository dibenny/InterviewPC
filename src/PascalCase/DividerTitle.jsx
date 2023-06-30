import { Divider } from "antd";
const DividerTitle = (props) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Divider dashed>
        <a
          style={{
            fontWeight: "bold",
            color: "#000",
            fontSize: "18px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span
            style={{
              backgroundColor: "skyblue",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              color: "white",
              marginRight: "5px",
            }}
          >
            {props.num}
          </span>
          {props.title}
        </a>
      </Divider>
    </div>
  );
};
export default DividerTitle;
