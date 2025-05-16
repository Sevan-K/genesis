import { Center, useClipboard, Flex, Textarea, Button } from "@chakra-ui/react";
import { useEffect } from "react";


interface SignatureProps {
    htmlSignature: string;
};

const Signature = ({ htmlSignature }: SignatureProps) => {
    const { onCopy, value, setValue, hasCopied } = useClipboard('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { setValue(htmlSignature) }, [htmlSignature])

    return (<section>
        <Center>
            <div dangerouslySetInnerHTML={{ __html: htmlSignature }} />
        </Center>
        <Flex mb={2} margin='2rem 0 0 0'>
            <Textarea
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
                size='sm'
                height='12rem'
                colorScheme='teal'
                mr={2}
            />
            <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy'}</Button>
        </Flex>

    </section>);
}

export default Signature;
