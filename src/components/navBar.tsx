import React, { useState } from "react";
import { Navbar, Form, Button, Modal } from "react-bootstrap";
import { ControlOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { NavBarProps } from "../interfaces/navBarProps";

const NavBar: React.FC<NavBarProps> = ({ onThemeChange, colorTheme }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        bg={colorTheme === "dark" ? "light" : "dark"}
        variant={colorTheme === "dark" ? "light" : "dark"}
      >
        <Navbar.Brand> Corona Bot</Navbar.Brand>

        <Form inline>
          <Button variant="primary" onClick={handleShow}>
            Help
          </Button>
          <ControlOutlined
            style={
              colorTheme === "dark"
                ? {
                    color: "black",
                    fontSize: "2.5rem",
                    position: "fixed",
                    right: 235,
                  }
                : {
                    color: "white",
                    fontSize: "2.5rem",
                    position: "fixed",
                    right: 235,
                  }
            }
          />
          <Switch
            defaultChecked
            checkedChildren="Dark"
            unCheckedChildren="Light"
            style={{
              height: "1.5rem",
              position: "fixed",
              right: 175,
            }}
            onChange={(on) => {
              if (on) onThemeChange("dark");
              if (!on) onThemeChange("light");
            }}
          />
          <Modal
            style={{
              width: "40rem",
              height: "40rem",
              position: "fixed",
              top: 200,
              left: 645,
            }}
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>How To Use</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Use the search bar to enter a country name or you can use the
              Country button dropdown to select a country from the list.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Navbar>
    </>
  );
};

export default NavBar;
