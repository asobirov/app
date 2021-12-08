import { ReactNode } from "react"
import { Container } from "@chakra-ui/react";
import { MotionMain } from "./Motion";
import Navbar from "./Navbar";

type LayoutProps = {
    children?: ReactNode,
    navbarTitle?: string,
    [rest: string]: any;
}

const Layout = ({ children, navbarTitle, ...rest }: LayoutProps): JSX.Element => {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <>
            <Navbar heading={navbarTitle} />
            <MotionMain
                initial="hidden"
                animate="enter"
                variants={variants}
                transition={{ type: 'ease-in' }}
                display="flex"
                flex={1}
            >
                <Container
                    pb={16}
                    {...rest}
                >
                    {children}
                </Container>
            </MotionMain>
        </>
    )
}

export default Layout
