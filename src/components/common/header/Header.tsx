import { Box,Stack,Heading,Flex,Text,useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = (props: unknown) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            {...props}>
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Link to="/">iTongue</Link>
                    </Heading>
                </Flex>

                <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                    { isOpen ? <CloseIcon boxSize={'20px'}/>: <HamburgerIcon boxSize={'27px'}/>}
                </Box>
            
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: isOpen ? "block" : "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    justifyContent={{base: "center", md: "end"}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                    as="nav">
                        <Text marginRight={{lg: '20px'}}><Link to="/">Dictionary</Link></Text>
                        <Text><Link to="/translate">Translate</Link></Text>
                </Stack>
            

            {/* <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Button
                variant="outline"
                _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                >
                    go to my site ???
                </Button>
            </Box> */}
        </Flex>
    )
}

export default Header;