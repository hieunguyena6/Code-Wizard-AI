import React, { useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import dynamic from "next/dynamic";
import useFetchExplainCode from "app/hooks/useFetchExplainCode";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then(mod => mod.default),
  { ssr: false },
);

export default function ExplainCodePage() {
  const [code, setCode] = useState("");
  const [textSubmit, setTextSubmit] = useState("");
  const { data, isLoading } = useFetchExplainCode({
    text: textSubmit,
  });

  const onSubmit = () => {
    setTextSubmit(code);
  };

  return (
    <div className="page-content">
      <Row
        gutter={[24, 24]}
        align="middle"
        style={{ width: "100%" }}
        justify="center"
      >
        <Col xl={12} xs={24}>
          <CodeEditor
            value={code}
            language="js"
            placeholder="e.g. function add(a, b) {\n  return a + b;\n}"
            onChange={evn => setCode(evn.target.value)}
            padding={16}
            style={{
              fontSize: 14,
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              height: "auto",
              minHeight: "200px",
            }}
          />
        </Col>
      </Row>
      <br />
      <Button
        size="large"
        type="primary"
        loading={isLoading}
        onClick={onSubmit}
      >
        Explain
      </Button>
      <br />
      <br />
      <Row align="middle" style={{ width: "100%" }} justify="center">
        <Col xl={12} xs={24}>
          {data && <Typography.Paragraph copyable={true}>{data}</Typography.Paragraph>}
        </Col>
      </Row>
    </div>
  );
}
