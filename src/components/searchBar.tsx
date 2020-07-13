import React, { useState } from "react";
import { Form } from "react-bootstrap";
import SearchBarProps from "../interfaces/SearchBarProps";

const SearchBar: React.FC<SearchBarProps> = ({ onFetch }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* <Form style={{ width: "56rem", position: "fixed", top: 450, left: 550 }}> */}
      <Form style={{ width: "68%", height: "2%", position: "fixed", top: "71%", left: "23%" }}>
        {/* <Form style={{ width: "896px", position: "fixed", top: "71%", left: "23%" }}> */}
        <Form.Group>
          <Form.Control
            // onKeyPress = {e => {
            //   if(e.key === 13) {
            //     this.setState({ searchQuery: e.target.value});
            //     this.props.onFetch(e.target.value);
            //     console.log('asdf')
            //   }}
            // }
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onFetch(e.target.value);
            }}
            size="lg"
            type="text"
            placeholder="Country"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
