import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,

  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Nav from './Assets/Nav';
import { Routes, Route, Link } from "react-router-dom";
import AG from './Assets/AG';
import CopyRight from './Assets/CopyRight';
function App() {
  return (
    <ChakraProvider >
      <Grid minH={"100vh"} bg={"#02006A"}>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/ag" element={<AG txt={"Thankyou ma'am for being our Class Teacher and a mentor and inspiration for me, I have spent one of the best moments in your class. Since April you are teaching us and in this timespan you guided us whenever we were on wrong path and for all the thing you have done for us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us.I dont have words to explain what you have done for us.I wish you have a Long life. We are blessed to have you as our class teacher.. ThankYou Maam "} />} />
          <Route path="/at" element={<AG txt={"Thankyou ma'am for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/an" element={<AG txt={"Thankyou ma'am for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for taking us to games whenever you were free. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/hr" element={<AG txt={"Thankyou sir for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for taking us to games whenever you were free. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Sir "} />} />
          <Route path="/pr" element={<AG txt={"Thankyou ma'am for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/ab" element={<AG txt={"Thankyou Sir for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for Telling Us Different Methods in Maths Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Sir "} />} />
          <Route path="/hm" element={<AG txt={"Thankyou Maam for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for guiding  me all the way and Sorry for that I did for furniture change. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/principal" element={<AG txt={"Thankyou Maam for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for guiding  me all the way. Thankyou for being our principal. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/moh" element={<AG txt={"Thankyou Maam for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for guiding  me all the way. Thankyou for teaching us English and guiding us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/mah" element={<AG txt={"Thankyou Maam for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for guiding  me all the way. Thankyou for teaching us Computer and guiding us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Sir "} />} />
          <Route path="/pri" element={<AG txt={"Thankyou ma'am for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for taking us to games whenever you were free. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam"} />} />
          <Route path="/jyo" element={<AG txt={"Thankyou ma'am for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for taking us to games whenever you were free. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam"} />} />
          <Route path="/re" element={<AG txt={"हमारे गुरु और मेरे लिए प्रेरणा होने के लिए धन्यवाद महोदया, मैंने आपकी कक्षा में सबसे अच्छे क्षणों में से एक बिताया है। जब भी हम गलत रास्ते पर थे और आपने हमारे लिए जो कुछ किया है, उसके लिए आपने हमेशा हमारा मार्गदर्शन किया है। हमें हिंदी सिखाने के लिए धन्यवाद और हमने जो कुछ भी किया है उसके लिए खेद है। हमारे जीवन को आकार देने और हम सभी का मार्गदर्शन करने के लिए धन्यवाद। तेरी डांट हमारे लिए प्यार थी। धन्यवाद मोहतरमा"} />} />
          <Route path="/shilpy" element={<AG txt={"Thankyou Maam for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for guiding  me all the way. Thankyou for teaching us English and guiding us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/swa" element={<AG txt={"Thankyou Maam for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for guiding  me all the way. Thankyou for teaching us Science and guiding us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/var" element={<AG txt={"Thankyou ma'am for being our Class Teacher and a mentor and inspiration for me, I have spent one of the best moments in your class. In this timespan you guided us whenever we were on wrong path and for all the thing you have done for us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us.I dont have words to explain what you have done for us.I wish you have a Long life. We are blessed to have you as our class teacher.. ThankYou Maam "} />} />
          <Route path="/pankaj" element={<AG txt={"Thankyou Maam for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for Telling Us Different Methods in Maths Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
          <Route path="/sandhya" element={<AG txt={"Thankyou Maam for being our  mentor and inspiration for me, I have spent one of the best moments in your class. You have always guided us whenever we were on wrong path and for all the thing you have done for us.Thankyou for guiding  me all the way. Thankyou for teaching us Science and guiding us. Thankyou for shaping our lives and guiding us all through out. Your Scoldings were love for us. ThankYou Maam "} />} />
        </Routes>
        <CopyRight/>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
