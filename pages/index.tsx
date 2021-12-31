import { useMemo } from 'react'
import type { NextPage } from 'next'

import { Box, Stack, Heading, Text, Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import { NavArrowUp, NavArrowDown, Cart } from 'iconoir-react'
import { useTable, useSortBy } from 'react-table'
const Home: NextPage = () => {
  const categories = useMemo(() => ["Food", "Traveling", "Presents", "Clothes", "Others"] as string[], []);
  const spendings = [
    {
      category: "Food",
      amount: "100",
      date: "2020-01-01",
      description: "Lunch"
    },
    {
      category: "Food",
      amount: "100",
      date: "2020-01-01",
      description: "Lunch"
    },
    {
      category: "Food",
      amount: "100",
      date: "2020-01-01",
      description: "Lunch"
    }
  ]

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }
  return (
    <>
      <Stack
        as='section'
        direction={'row'}
        align={'space-between'}
      >
        <Stack
          w='100%'
          border={'1px'}
          borderColor={'whiteAlpha.200'}
          borderRadius={'3xl'}
          spacing={7}
          p={6}
        >
          <Heading
            as="h3"
            size="md"
            fontWeight={'medium'}
          >
            Total Balance
          </Heading>
          <Flex direction={'column'}>
            <Heading>
              $300
            </Heading>
            <Text fontSize={'xl'}>£250</Text>
          </Flex>
        </Stack>
        <Stack
          w='100%'
          border={'1px'}
          borderColor={'whiteAlpha.200'}
          borderRadius={'3xl'}
          spacing={7}
          p={6}
        ></Stack>
      </Stack>
      <Stack as='section' mt={10}>

        <Heading>History</Heading>
        <Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            color={"whiteAlpha.600"}
          >
            <Text>Today</Text>
            <Text>30.00$</Text>
          </Stack>
          <Stack>
            {
              spendings.map((spending, key) => (
                <Stack
                  key={key}
                  direction={"row"}
                  justifyContent={"space-between"}
                  align={"center"}
                  spacing={6}
                  padding={5}
                  border={'1px'}
                  borderColor={'whiteAlpha.200'}
                  borderRadius={'3xl'}
                >
                  <Flex
                    p={3}
                    bg={'whiteAlpha.50'}
                    border={'1px'}
                    borderColor={'whiteAlpha.200'}
                    borderRadius={'3xl'}
                  >
                    <Icon as={Cart} w={6} h={6} />
                  </Flex>
                  <Flex
                    direction={"column"}
                    flex={1}
                  >
                    <Heading as="h6" size={'md'}>{spending.category}</Heading>
                    <Text>Income</Text>
                  </Flex>
                  <Flex
                    direction={"column"}
                    align={'flex-end'}
                  >
                    <Text>{formatDate(spending.date)}</Text>
                    <Text>{spending.amount}$</Text>
                  </Flex>
                </Stack>
              ))
            }
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Home
