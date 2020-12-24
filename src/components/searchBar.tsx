import React, { useState } from "react";
import { Form } from "react-bootstrap";
import SearchBarProps from "../interfaces/SearchBarProps";

const SearchBar: React.FC<SearchBarProps> = ({ onFetch }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Form style={{ width: "50%", margin: "5rem auto" }}>
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
