import { ChakraProvider, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import "./General.css"
import { Routes, Route, Link } from "react-router-dom";
export default function Nav() {
    return (
        <ChakraProvider>

            <Grid color={"white"} minH={"100vh"} placeItems={"center"} placeContent={"center"}>
                <Text color={"white"} textAlign={"center"} fontSize={"6xl"} id='head' fontWeight={"500"} >
                    Welcome Teachers
                </Text>
            
                <Text textAlign={"center"} p={"1vw"} fontSize={"xl"} className='body'>Kindly select your name from the list and see the magic</Text>
                <Text color={"red"} textAlign={"center"} p={"1vw"} fontSize={"xl"} className='body'>This Website is owned by
                <br />
                 -Aryan Rajput 10<sup>th</sup>C
                 </Text>
                <Link to="/ag">
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Aakanksha Gour
                        </Text>
                    </Grid>
                </Link>
                <Link to="/sandhya">
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Sandhya
                        </Text>
                    </Grid>
                </Link>
                <Link to="/pankaj">
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Pankaj
                        </Text>
                    </Grid>
                </Link>
                <Link to={"/at"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Aakanksha Tomar         </Text>
                    </Grid>
                </Link>
                <Link to={"/an"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Anita        </Text>
                    </Grid>
                </Link>
                <Link to={"/ab"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Abhinav         </Text>
                    </Grid>
                </Link>
                <Link to={"/hm"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            HM ma"am         </Text>
                    </Grid>
                </Link>
                <Link to={"/hr"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Harendra        </Text>
                    </Grid>
                </Link>
                <Link to={"/jyo"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Jyoti         </Text>
                    </Grid>
                </Link>
                <Link to={"/moh"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Mohsana        </Text>
                    </Grid>
                </Link>
                <Link to={"/mah"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Mahima         </Text>
                    </Grid>
                </Link>
                <Link to={"/principal"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Principal Ma"am         </Text>
                    </Grid>
                </Link>
                <Link to={"/pri"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Priyanshi         </Text>
                    </Grid>
                </Link>
                <Link to={"/pr"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Priyanka         </Text>
                    </Grid>
                </Link>
                <Link to={"/re"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Rekha        </Text>
                    </Grid>
                </Link>
                <Link to={"/shilpy"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Shilpy        </Text>
                    </Grid>
                </Link>
                <Link to={"/swa"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Swati        </Text>
                    </Grid>
                </Link>


                <Link to={"/var"}>
                    <Grid m={"2vw"} w={"90vw"} placeContent={"center"} borderRadius={"2vw"} bg={"#C78EFF"}>
                        <Text textAlign={"center"} p={"1vw"} fontSize={"2xl"} fontWeight={"700"} className='body'>
                            Vartika         </Text>
                    </Grid>
                </Link>




            </Grid>
        </ChakraProvider>)
}
