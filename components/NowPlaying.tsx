import useSWR from "swr";
import { Text, Stack, useColorModeValue } from "@chakra-ui/react";

import fetcher from "@lib/fetcher";
import { NowPlayingSong } from "@lib/types";

import { MotionBox } from "./Motion";
import { Link } from "./Link";

export const NowPlaying = () => {
    const { data } = useSWR<NowPlayingSong>("/api/spotify/now-playing", fetcher);
    
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            as={Stack}
            direction='row'
            justify='flex-start'
            align='center'
            color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
            fontSize="0.95rem"
            width="100%"
        >
            {data?.songUrl ? (
                <Text as={Link} isTruncated href={data.songUrl} isExternal color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")} >
                    {data.title}
                </Text>
            ) : (
                <Text color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}>Not Playing</Text>
            )};
            <span> — </span>
            {
                data?.artist ? (
                    <Text isTruncated>{data?.artist}</Text>
                ) : (
                    <Text as={Link}
                        isTruncated
                        href="https://open.spotify.com/user/i9eucduqkvvkrczj7oh0eopga?si=c60f0237b2ca4812"
                        isExternal
                        color={useColorModeValue("blackAlpha.900", "white")}
                    >
                        Spotify
                    </Text>
                )
            }
        </MotionBox>
    )
}