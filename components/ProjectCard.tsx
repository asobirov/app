import Image from "next/image";
import { Box, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react"

import { TProjectCard } from "@lib/types"

const ProjectCard = ({ image, title, description }: TProjectCard) => {
    return (
        <Stack
            justify={'space-between'}
            px={{ base: 3, md: 5 }}
            pt={{ base: 3, md: 5 }}
            pb={{ base: 4, sm: 5, md: 7 }}
            // bg={useColorModeValue("white", "none")}
            border='1px'
            borderColor={useColorModeValue('blackAlpha.600', 'whiteAlpha.300')}
            borderRadius={{ base: '3xl', md: '2rem' }}
            boxShadow={useColorModeValue('5px 5px 25px -15px rgba(0, 0, 0, 0.1)', '0 2px 15px -2px rgba(0, 0, 0, 0.7)')}
            spacing={{ base: 3, sm: 4, md: 6 }}
            transition='all 0.3s ease-in-out'
            _hover={{
                boxShadow: useColorModeValue('3px 3px 35px 3px rgba(0, 0, 0, 0.1)', '0 2px 15px 2px rgba(0, 0, 0, 0.6)'),
                transform: 'translate(1px, -3px)',
            }}
            minH={'200px'}
        >

            <Box
                overflow='hidden'
                borderRadius={{ base: '2xl', md: '1.25rem' }}
                bg={'gray.900'}
                h={image ? undefined : '100%'}
            >
                {image && (
                    <Image
                        alt="alt"
                        src={image}
                        layout='responsive'
                        objectFit="cover"
                        priority={true}
                        placeholder='blur'
                    />
                )}
            </Box>
            <Stack px={{ base: 2, md: 3 }} spacing={1}>
                <Heading
                    lineHeight='1'
                    fontSize={{ base: 'xl', md: '2xl' }}
                    fontWeight={{ base: 'semibold', md: 'bold' }}
                >
                    {title}
                </Heading>
                <Text isTruncated>
                    {description}
                </Text>
            </Stack>
        </Stack >
    )
}

export default ProjectCard
