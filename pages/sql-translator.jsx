import React, { useState } from "react";
import { Button, Col, Input, Row, Typography } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import { CopyBlock, dracula } from "react-code-blocks";
import useFetchSQLTranslationData from "app/hooks/useFetchSQLTranslation";

export default function SQLTranslatorPage() {
  const [isHumanToSql, setIsHumanToSql] = useState(true);
  const [textInput, setTextInput] = useState("");
  const [textSubmit, setTextSubmit] = useState("");
  const { data, isLoading } = useFetchSQLTranslationData({
    text: textSubmit,
    isHumanToSql,
  });

  const onChangeInput = event => {
    setTextInput(event?.target?.value);
  };

  const onSwapType = () => {
    setTextInput("");
    setTextSubmit("");
    setIsHumanToSql(!isHumanToSql);
  };

  const onSubmit = () => {
    setTextSubmit(textInput);
  };

  return (
    <div className="page-content">
      <Row
        gutter={[24, 24]}
        align="middle"
        style={{ width: "100%" }}
        justify="center"
      >
        <Col xl={6} xs={24}>
          <Typography.Title level={4}>
            {isHumanToSql ? "Human Language" : "SQL Query"}
          </Typography.Title>
          <Input.TextArea
            rows={6}
            value={textInput}
            onChange={onChangeInput}
            placeholder={
              isHumanToSql
                ? "eg. Show me all the users"
                : "eg. SELECT * from users"
            }
          />
        </Col>
        <Col xl={3} xs={24} align="center">
          <Button
            type="primary"
            shape="round"
            icon={<SwapOutlined />}
            size="large"
            onClick={onSwapType}
          />
        </Col>
        <Col xl={6} xs={24}>
          <Typography.Title level={4}>
            {isHumanToSql ? "SQL Query" : "Human Language"}
          </Typography.Title>
          {data && isHumanToSql ? (
            <CopyBlock
              language="sql"
              text={data}
              codeBlock={true}
              theme={dracula}
              showLineNumbers={true}
            />
          ) : (
            <Typography>{data}</Typography>
          )}
        </Col>
      </Row>
      <br />
      <Button
        type="primary"
        size="large"
        onClick={onSubmit}
        loading={isLoading}
      >
        Convert
      </Button>
    </div>
  );
}
