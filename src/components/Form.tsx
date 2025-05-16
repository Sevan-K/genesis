import React, { FormEvent, useMemo, useState } from 'react';
import { Box, Button, Center, Checkbox, Flex, FormControl, FormLabel, Input, Textarea, useClipboard } from "@chakra-ui/react";
import { buildHtmlSignature } from '../utils/buildHtmlSignature';

const Form = () => {
    const [fullname, setFullame] = useState<string | undefined>(undefined);
    const [job, setJob] = useState<string | undefined>(undefined);
    const [building, setBuilding] = useState<string | undefined>(undefined);
    const [address, setAddress] = useState<string | undefined>(undefined);
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [useAlt, setUseAlt] = useState<boolean>(false);
    const [htmlSignature, setHtmlSIgnature] = useState<string | undefined>(undefined);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`bousin :  ${useAlt}`)
        if (fullname && job && email) {
            setHtmlSIgnature(buildHtmlSignature({ fullname, job, building, address, phoneNumber, email, useAlt }));
        }
    };

    const placeholder = 'text to be copied...'
    const { onCopy, value, setValue, hasCopied } = useClipboard('')


    return (
        <>
            <section>
                <form onSubmit={handleSubmit} >
                    <FormControl isRequired>
                        <FormLabel>Nom Prénom</FormLabel>
                        <Input type='text' value={fullname} onChange={(event) => setFullame(event.target.value)} placeholder='Monkey D. Luffy' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Fonction</FormLabel>
                        <Input type='text' value={job} onChange={(event) => setJob(event.target.value)} placeholder='Capitaine' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Bâtiment</FormLabel>
                        <Input type='text' value={building} onChange={(event) => setBuilding(event.target.value)} placeholder='Proue' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Adresse</FormLabel>
                        <Input type='text' value={address} onChange={(event) => setAddress(event.target.value)} placeholder='Inconnue' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Téléphone</FormLabel>
                        <Input type='tel' value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder='Den den mushi' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Mail</FormLabel>
                        <Input type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='luffy@mugiwara.op' />
                    </FormControl>
                    <Box margin='1rem 0 0 0'>
                        <Checkbox checked={useAlt} onChange={(event) => setUseAlt(!useAlt)} >Avec le logo Cirad</Checkbox>
                    </Box>
                    <Center>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            type='submit'
                        >
                            Générer
                        </Button>
                    </Center>
                </form>
            </section>

            {htmlSignature && <section>
                <Center>
                    <div dangerouslySetInnerHTML={{ __html: htmlSignature }} />
                </Center>
                <Flex mb={2} margin='2rem 0 0 0'>
                    <Textarea
                        value={htmlSignature}
                        placeholder='Here is a sample placeholder'
                        size='sm'
                        height='12rem'
                        colorScheme='teal'
                        mr={2}
                    />
                    <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
                </Flex>
            </section>}
        </>
    );
}

export default Form;