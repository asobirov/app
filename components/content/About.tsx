import { Box, Flex, Divider, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { TAboutCard } from '@lib/types'
import type { NextPage } from 'next'

const cardsData: TAboutCard[] = [
    {
        heading: "Education",
        children: [
            {
                heading: "Brunel University London",
                data: "Bachelor's degree • Computer Science",
                period: "2021 — Present"
            },
            {
                heading: "INHA University in Tashkent",
                data: "Bachelor's degree • Computer Science",
                period: "2020 — 2021"
            },
            {
                heading: "Academic Lyceum of Westminster International University in Tashkent",
                data: "High School • Exact Sciences",
                period: "2017 — 2020"
            },
        ]
    },
    {
        heading: "Experience",
        children: [
            {
                heading: "Front-end developer",
                data: "Tech Yard Solutions",
                period: "Apr 2021 — Jun 2021"
            },
        ]
    }
]

const About: NextPage = () => {

    return (
        <Stack spacing={5}>
            {cardsData.map((card, key) => <Card key={key} heading={card.heading} children={card.children} />)}
        </Stack>

    )
}

const Card = ({ heading, children }: TAboutCard): JSX.Element => (
    <Stack
        border='1px solid'
        borderColor={useColorModeValue('blackAlpha.600', 'whiteAlpha.300')}
        boxShadow={useColorModeValue('5px 5px 25px -15px rgba(0, 0, 0, 0.1)', '0 2px 15px -2px rgba(0, 0, 0, 0.7)')}
        spacing={{ base: 4, md: 6 }}
        pt={{ base: 6, md: 6 }}
        borderRadius={'2rem'}
        overflow='scroll'
    >
        <Box>
            <Heading
                // size={'lg'}
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight='medium'
                color={useColorModeValue('', 'whiteAlpha.700')}
                px={{ base: 6, md: 8 }}
                // textAlign={{ base: 'center', md: 'left' }}
                // px={{ base: 4, md: 6 }}
                textTransform="capitalize"
            // mx={6}
            >
                {heading}
            </Heading>
        </Box>
        <Stack
            spacing={4}
            divider={<Box
                borderColor={useColorModeValue('blackAlpha.600', 'whiteAlpha.300')}
                sx={{
                    mx: { base: "1.5rem!important", md: "2rem!important" }
                }}
            >
            </Box>}
            direction='column'
            overflow='scroll'
            pb={{ base: 6, md: 8 }}
            sx={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}
        >
            {children.map((data, key) => (
                <Box
                    key={key}
                    w='100%'
                    overflowX='auto'
                    whiteSpace='nowrap'
                    d='flex'
                    flexWrap='wrap'
                    justifyContent='stretch'
                    sx={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        }
                    }}
                >
                    <Stack
                        spacing={{ base: 1, md: 1 }}
                        px={{ base: 6, md: 8 }}
                        flex={1}
                    >
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }}
                            fontWeight='semibold'
                            noOfLines={2}
                            whiteSpace='normal'
                        >
                            {data.heading}
                        </Text>
                        <Flex
                            justify='space-between'
                            color={useColorModeValue('', 'whiteAlpha.600')}
                        >
                            <Text>{data.data}</Text>
                            <Text pl={8}>{data.period}</Text>
                        </Flex>
                    </Stack>
                </Box>
            ))}

        </Stack>
    </Stack >
);


export default About
