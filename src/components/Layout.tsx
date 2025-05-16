import { Text, Heading, Box, Image, Center } from "@chakra-ui/react";
import logoDsi from '../media/logoDsi.png'
import Form from './Form';

const Layout = () => {

    return (<main>
        <header>
            <Center>
                <Image src={logoDsi} alt='Logo de la DSI du Cirad' loading="lazy" objectFit="cover" width='40%'
                />
            </Center>
            <Box margin='1rem 0 0 0'>
                <Heading as="h1" color='teal'>GENESIS</Heading>
                <Text>GENErate SIgnature with Style 😎</Text>
            </Box>
        </header>
        <Form />
    </main>);
}

export default Layout;