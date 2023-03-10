import { Layout, Row, Col, Button } from "antd";
import Favorites from "./Favorites";
import Register from "./Register";
import Login from "./Login";
import React from "react";
 
const { Header } = Layout;
 
function PageHeader({ loggedIn, signoutOnClick, signinOnSuccess, data }) {
  return (
    <Header>
      <Row justify="space-between">
        <Col>{loggedIn && <Favorites data={data} />}</Col>
        <Col>
          {loggedIn && (
            <Button shape="round" onClick={signoutOnClick}>
              Logout
            </Button>
          )}
          {!loggedIn && (
            <>
              <Login onSuccess={signinOnSuccess} />
              <Register />
            </>
          )}
        </Col>
      </Row>
    </Header>
  );
}
 
export default PageHeader;
