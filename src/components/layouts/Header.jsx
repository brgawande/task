import {
  Box,
  Button,
  HStack,
  Heading,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack
      bgColor={"rgba(32,32,34,255)"}
      p={["5px"]}
      justifyContent={"space-between"}
    >
      <Heading color={"white"}>Technix</Heading>
      <Button
        onClick={onOpen}
        variant={"ghost"}
        _hover={{ backgroundColor: "rgba(0,175,80,255)", color: "white" }}
        display={["block", "block", "block", "none"]}
      >
        <MenuIcon sx={{ color: "white" }} />
      </Button>
      <DrawerExample isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default Header;

function DrawerExample({ isOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody mt={"30px"}>
            <VStack spacing={4}>
              <Button
                variant={"outline"}
                color={"black"}
                fontSize={"12px"}
                _hover={{
                  backgroundColor: "rgba(0,175,80,255)",
                  color: "white",
                }}
                display={"flex"}
              >
                {" "}
                <AddIcon /> New Chat
              </Button>
              <Button
                variant={"ghost"}
                color={"black"}
                fontSize={"12px"}
                _hover={{
                  backgroundColor: "rgba(0,175,80,255)",
                  color: "white",
                }}
              >
                {" "}
                <ChatBubbleOutlineIcon /> Provide a list of House
              </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
