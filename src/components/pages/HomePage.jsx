import { Box, Button, HStack, Image, Input, VStack } from "@chakra-ui/react";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { tabledata } from "../../constants/Tabledata";
import logo from "../../assets/logo.png";

const HomePage = () => {
  return (
    <Box display={"flex"} bgColor={"rgba(32,32,34,255)"}>
      <VStack
        display={["none", "none", "none", "flex"]}
        alignItems={"left"}
        pt={"10px"}
        bgColor={"rgba(32,32,34,255)"}
        minH={"100vh"}
        px={"10px"}
      >
        <Button
          variant={"outline"}
          color={"white"}
          fontSize={"12px"}
          _hover={{ backgroundColor: "rgba(0,175,80,255)", color: "white" }}
          display={"flex"}
        >
          {" "}
          <AddIcon /> New Chat
        </Button>
        <Button
          variant={"ghost"}
          color={"white"}
          fontSize={"12px"}
          _hover={{ backgroundColor: "rgba(0,175,80,255)", color: "white" }}
        >
          {" "}
          <ChatBubbleOutlineIcon /> Provide a list of House
        </Button>
      </VStack>
      {/* second box */}
      <Box
        // border={"2px solid black"}
        // height={"500px"}
        width={"100%"}
        bgColor={"rgba(235,235,235,255)"}
        borderRadius={"20px"}
        p={["10px", "20px", "30px"]}
      >
        <Box
          //   border={"2px solid black"}
          mb={"15px"}
          display={"flex"}
          alignItems={"center"}
        >
          <AccountCircleIcon
            sx={{ marginRight: "10px", color: "green", fontSize: "30px" }}
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          quaerat doloribus saepe pariatur, sint ipsum quam repellendus ratione
          fugit esse.
        </Box>

        {/* inner box */}

        <Box
          bgColor={"white"}
          display={"flex"}
          flexDirection={["column", "row"]}
          borderRadius={"15px"}
        >
          <Box width={"200px"} height={"120px"} p={"20px"}>
            <Image src={logo} objectFit={"cover"} />
          </Box>
          <Box pt={"20px"} pr={["10px", "15px"]} pl={["10px"]}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              error eaque dolorum ipsam sapiente possimus harum neque. Magnam
              illum molestias nostrum blanditiis repudiandae necessitatibus
              deserunt atque, corporis nihil maxime, ipsum ad! Aperiam numquam
              in ratione accusantium. Dolores sed unde cupiditate molestiae at
              itaque officiis, nesciunt exercitationem delectus, corrupti, ex
              debitis.
            </p>

            <HStack my={4}>
              <Button variant={"outline"} mx={"10px"} px={"30px"}>
                <ThumbUpOutlinedIcon />
              </Button>
              <Button variant={"outline"} mx={"10px"} px={"30px"}>
                <ThumbDownOffAltOutlinedIcon />
              </Button>
            </HStack>

            {/* third sec */}
            <HStack spacing={10} flexWrap={"wrap"}>
              <p>Records 65</p>
              <p>Records 65</p>
              <p>Records 65</p>
              <p>Records 65</p>
              <p>Records 65</p>
            </HStack>

            <Button my={4} variant={"outline"}>
              Show All Columns
            </Button>

            {/* table */}

            <TableContainer borderRadius={"10px"}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th bgColor={"rgba(0,175,80,255)"} color={"white"}>
                      family_id
                    </Th>
                    <Th bgColor={"rgba(0,175,80,255)"} color={"white"}>
                      product
                    </Th>
                    <Th bgColor={"rgba(0,175,80,255)"} color={"white"}>
                      life_event_date
                    </Th>
                    <Th bgColor={"rgba(0,175,80,255)"} color={"white"}>
                      life_event_type
                    </Th>
                    <Th bgColor={"rgba(0,175,80,255)"} color={"white"}>
                      first_name
                    </Th>
                    <Th bgColor={"rgba(0,175,80,255)"} color={"white"}>
                      middle_name
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tabledata.map((item, index) => (
                    <TableBody
                      key={index}
                      id={item.familyid}
                      product={item.product}
                      date={item.date}
                      eventtype={item.evebnttype}
                      firstname={item.name}
                      middlename={item.middlename}
                    />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>

            {/* buttons */}
            <HStack spacing={4} my={4}>
              <Button variant={"outline"}>Show More Rows</Button>
              <Button variant={"ghost"}>Currently Viewing 10 Rows</Button>
            </HStack>

            <HStack flexWrap={"wrap"} spacing={4} mb={"20px"}>
              <InsertDriveFileIcon />
              <InsertDriveFileIcon />
              <InsertDriveFileIcon />
              <Button>Send To Campagin</Button>
              <Button>Save As Business Rule</Button>
              <Button>
                Sql Query <ArrowDropDownIcon />
              </Button>
              <Button>
                Explanations <ArrowDropDownIcon />
              </Button>
            </HStack>
          </Box>
        </Box>

        {/* searchbar */}
        <Box
          display={"flex"}
          alignItems={"center"}
          bgColor={"white"}
          my={4}
          borderRadius={"10px"}
        >
          <Input type="search" placeholder="Ask a Question..." />
          <SearchIcon
            sx={{ position: "absolute", right: "45px", zIndex: "10" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

function TableBody({ id, product, date, eventtype, firstname, middlename }) {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{product}</Td>
      <Td>{date}</Td>
      <Td>{eventtype}</Td>
      <Td>{firstname}</Td>
      <Td>{middlename}</Td>
    </Tr>
  );
}
