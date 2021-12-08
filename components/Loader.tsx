import { MotionBox } from "./Motion";

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2
        }
    },
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const loadingCircleVariants = {
    start: {
        y: "50%"
    },
    end: {
        y: "150%"
    }
};

const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    ease: "easeInOut"
};

export const Loader = (): JSX.Element => {
    return (
        <MotionBox
            d='flex'
            justifyContent='space-around'
            pos='fixed'
            right='3rem'
            bottom='3rem'
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
        >
            <LoadingCirlce />
            <LoadingCirlce />
            <LoadingCirlce />
        </MotionBox>
    );
}

const LoadingCirlce = (props: any): JSX.Element => {
    return (
        <MotionBox
            w={2}
            h={2}
            ml={1}
            bg='white'
            borderRadius='full'
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
        />
    )
}