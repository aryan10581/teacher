import { ChakraProvider, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import MG from "./BG.mp4"
import "./General.css"
export default function AG(props) {
    return (
        <ChakraProvider>
            <Grid placeItems={"center"} minH={"120vh"}>

                <Grid w={"90vw"}  placeContent={"center"} borderRadius={"2vw"} >
                    <video className='Vid' src={MG} muted autoPlay loop></video>
                </Grid>
                <Grid w={"90vw"} borderRadius={"2vw"} bg={"blue"} minH={"20vh"}>
                    <Text color={"white"} fontSize={"xl"} textAlign={"center"} fontWeight={"500"} className={"body"}>
                        “Teaching is a very noble profession that shapes the character, calibre, and future of an individual. If the people remember me as a good teacher that will be the biggest honour for me.” – APJ Abdul Kalam
                    </Text>

                </Grid>
                <Grid w={"90vw"} borderRadius={"2vw"} bg={"#8400ff"} minH={"60vh"}>


                    <Text p={"2vw"} color={"white"} fontSize={"xl"} textAlign={"center"} fontWeight={"500"} className={"body"}>
                        {props.txt}
                    </Text>
                </Grid>
            </Grid>
        </ChakraProvider>)
}
