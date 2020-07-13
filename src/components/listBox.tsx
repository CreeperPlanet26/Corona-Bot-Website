/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import ListBoxProps from "../interfaces/ListBoxProps";

const ListBox: React.FC<ListBoxProps> = ({ onFetch, allCountries, colorTheme }) => {
  const [value, setValue] = useState("");

  const CustomToggle = React.forwardRef(
    //@ts-ignore
    ({ children, onClick }, ref) => (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        //@ts-ignore
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
        &#x25bc;
      </a>
    ),
  );

  const CustomMenu = React.forwardRef(
    //@ts-ignore
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [value, setValue] = useState("");

      return (
        <div
          //@ts-ignore
          ref={ref}
          style={colorTheme === "light" ? { ...style, backgroundColor: "#212529" } : style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl style={colorTheme === "light" ? { backgroundColor: "#212529" } : undefined} autoFocus className="mx-3 my-2 w-auto" placeholder="Type to filter..." onChange={(e) => setValue(e.target.value)} value={value} />
          <ul className="list-unstyled" style={colorTheme === "light" ? { backgroundColor: "#212529" } : { backgroundColor: "white" }}>
            {React.Children.toArray(children).filter(
              (child) =>
                //@ts-ignore
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{
          width: "13%",
          height: "8%",
          position: "fixed",
          top: "71%",
          left: "6.5%",
          // top: 450,
          // left: 320,
        }}
        variant="primary"
        id="dropdown-basic"
      >
        Select a Country
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {allCountries.map((e) => (
          <Dropdown.Item
            style={colorTheme === "light" ? { backgroundColor: "#212529", color: "white" } : { backgroundColor: "white", color: "black" }}
            onClick={(i: any) => {
              setValue((s) => (s = i.target.id));
              onFetch(i.target.id);
            }}
            id={e.country}
          >
            {e.country}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ListBox;
