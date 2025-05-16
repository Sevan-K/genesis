import { Text, Link, ListItem, UnorderedList, Heading, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Links = () => {
    return (<section>
        <Heading as="h2" size='lg' color='teal'>De la doc 📖</Heading>
        <Box margin='0.5rem 0 0 0'>
            <Text>Si tu ne sais pas comment ajouter ta signature HTML voilà quelques lien utiles</Text>
        </Box>
        <UnorderedList>
            <ListItem>
                Thunderbird :&#xA0;
                <Link href='https://addons.thunderbird.net/fr/thunderbird/addon/signature-switch/' isExternal>
                    Module Signature Switch  <ExternalLinkIcon mx='2px' />
                </Link>
            </ListItem>
            <ListItem>
                Outlook :&#xA0;
                <Link
                    href='https://answers.microsoft.com/fr-fr/outlook_com/forum/all/int%C3%A9grer-une-signature-html-dans-outlook-sans/f860124a-9d30-45ee-bc3c-456a1379265d' isExternal
                >
                    Un forum plutôt récent  <ExternalLinkIcon mx='2px' />
                </Link>
            </ListItem>
        </UnorderedList>
    </section>);
}

export default Links;
