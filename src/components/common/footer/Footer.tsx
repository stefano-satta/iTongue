import { Flex, Text } from "@chakra-ui/react";

const Footer = (props: unknown) => {

    return (
        <Flex
            as="footer"
            align="center"
            justify="center"
            wrap="wrap"
            padding={6}
            bg="white"
            color="var(--color-base-text)"
            width="100%"
            height={'72px'}
            {...props}>
                <Text>&copy; 2022 Stefano Satta</Text>
        </Flex>
    )
}

export default Footer;