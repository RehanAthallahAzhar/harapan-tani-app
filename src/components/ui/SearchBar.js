import React, { ReactElement, ReactNode } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="sm" w={300}>
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494"  />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
