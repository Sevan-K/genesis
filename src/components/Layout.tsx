import { Text, Heading, Box, Image, Center } from "@chakra-ui/react";
import logoDsi from '../media/logoDsi.png'
import Form from './Form';
import { FormData } from '@/Types/FormData';
import { buildHtmlSignature } from "../utils/buildHtmlSignature";
import { FormEvent, useCallback, useState } from "react";
import Signature from "./Signature";
import Links from "./Links";


const Layout = () => {
    const [htmlSignature, setHtmlSIgnature] = useState<string | undefined>(undefined);

    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>, formData: FormData) => {
        event.preventDefault();
        if (formData.fullname && formData.job && formData.email) {
            setHtmlSIgnature(buildHtmlSignature(formData));
        }
    }, []
    );

    return (
        <main>
            {/* The Header */}
            <header>
                <Center>
                    <Image src={logoDsi} alt='Logo de la DSI du Cirad' loading="lazy" objectFit="cover" width='40%'
                    />
                </Center>
                <Box margin='1rem 0 0 0'>
                    <Heading as="h1" size="2xl" color='teal'>GENESIS</Heading>
                    <Box margin='0.5rem 0 0 0'>
                        <Text fontSize="lg">GENErate SIgnature with Style 😎</Text>
                    </Box>
                </Box>
            </header>

            {/* The form */}
            <Form handleSubmit={handleSubmit} />

            {/* The HTML Signature if defined */}
            {htmlSignature && <Signature htmlSignature={htmlSignature} />}

            {/* Some helpfull links */}
            <Links />
        </main>
    );
}

export default Layout;