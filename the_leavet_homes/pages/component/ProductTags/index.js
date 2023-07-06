import React from "react";
import { Tag, Space } from "antd";

export default function Index(props) {
  return (
    <>
      {props.tags.map((item) => {
        return (
          <Space key={item.id}>
            <Tag color="#313652">{item.name}</Tag>
          </Space>
        );
      })}
    </>
  );
}
