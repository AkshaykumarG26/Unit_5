import { Button, Center, Flex} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { token, handleToken } = useContext(AuthContext);

  return (
    <>
      <Flex h={"80px"} >
        
        <Center>
          <Button mr={20} colorScheme={"green"}>
            <Link to={"/"}>Home</Link>
          </Button>
          <Button mr={20} colorScheme={"green"}>
            <Link to={"/dashboard"}>Dashboard</Link>
          </Button>
          <Link to={"/login"}>
            <Button
              onClick={
                !token
                  ? () => {
                      handleToken("");
                    }
                  : undefined
              }
              mr={4}
              colorScheme={"green"}
            >
              {!token ? "Login" : "Logout"}
            </Button>
          </Link>
        </Center>
      </Flex>
    </>
  );
};




/*

{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

*/