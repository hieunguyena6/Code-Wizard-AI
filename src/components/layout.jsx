import React from "react";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const { Header, Content } = Layout;

const MENU_ITEMS = [
  {
    key: "sql-translator",
    label: <Link href="/sql-translator">SQL Translator</Link>,
  },
  {
    key: "explain-code",
    label: <Link href="/explain-code">Explain JS Code</Link>,
  },
  {
    key: "code-optimization",
    label: <Link href="/code-optimization">Code Optimization</Link>,
  },
  {
    key: "code-conversion",
    label: <Link href="/code-conversion">Code Conversion</Link>,
  },
];

export default function AppLayout({ children }) {
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[router.pathname.replace("/", "") || "sql-translator"]}
          items={MENU_ITEMS}
        />
      </Header>
      <Content className="content-container">
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <div className="page-content">{children}</div>
        </div>
      </Content>
    </Layout>
  );
}
