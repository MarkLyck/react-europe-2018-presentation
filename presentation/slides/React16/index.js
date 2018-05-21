import React from "react"
import {
  Heading,
  Slide,
  Text,
  Image,
  SlideSet
} from "spectacle";
import img from './r16-features.jpg'


export default (
  <SlideSet>
    <Slide transition={["zoom"]} bgColor="primary" key="1">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React 16
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        The new hotness
      </Text>
    </Slide>

    <Slide bgColor="primary" key="2">
      <Image
        alt="react16 features"
        src={img}
        height="80%"
        width="80%"
      />
    </Slide>
  </SlideSet>
)
