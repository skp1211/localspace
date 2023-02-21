import { Button, Card, Table, Popconfirm } from "antd";
import React from "react";

const columns = [
  {
    title: "序号",
    key: "id",
    width: 80,
    align: "center",
    render: (txt, record, index) => index + 1,
  },
  {
    title: "姓名",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "价格",
    dataIndex: "price",
    align: "center",
  },
  {
    title: "操作",
    align: "center",
    render: (txt, record, index) => {
      return (
        <div>
          <Button type="primary" size="small">
            修改
          </Button>
          <Popconfirm
            title="确定删除此项?"
            onCancel={() => console.log("取消！")}
            onConfirm={() => console.log("确认删除！")}
            okText="确认"
            cancelText="取消"
          >
            <Button
              style={{ margin: "0 1rem" }}
              type="primary"
              danger
              size="small"
            >
              删除
            </Button>
          </Popconfirm>
        </div>
      );
    },
  },
];

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    price: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    price: 42,
    address: "西湖区湖底公园1号",
  },
];
function List(props) {
  return (
    <Card
      title="商品列表"
      extra={
        <Button
          type="primary"
          size="small"
          onClick={() => {
            props.history.push("/admin/products/edit");
          }}
        >
          新增
        </Button>
      }
    >
      <Table dataSource={dataSource} columns={columns} bordered />
    </Card>
  );
}

export default List;
