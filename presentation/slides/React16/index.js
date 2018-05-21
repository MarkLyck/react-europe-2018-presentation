import React from "react"
import {
  Heading,
  Slide,
  Text,
  Image,
  SlideSet,
  Layout,
  List,
  ListItem,
  Notes,
} from "spectacle";
import r16Image from './r16-features.jpg'
import bgImage from './background.jpg'
import waitingGif from './spanky.gif'
import r163Features from './r16.3-features.jpg'
import why from './why.gif'

const ulStyle = {
  margin: 0,
  listStyle: 'none',
  padding: '0 60px',
  width: '500px',
  boxSizing: 'border-box',
  height: '100%',
}

const liStyle = {
  margin: '30px 0',
  width: '500px',
}

const layoutStyle = { alignItems: 'center', height: '100%' }

export default (
  <SlideSet>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React 16
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        The new Hotness
      </Text>
    </Slide>

    <Slide transition={["fade"]} bgImage={bgImage}>
      <Image
        alt="react16 features"
        src={r16Image}
        height="80%"
        width="80%"
      />
    </Slide>

    <Slide transition={["slide"]} bgColor="tertiary">
      <Notes>
        <h4>Fiber</h4>
        <ol>
          <li>You've probably heard of Fiber</li>
          <li>Granular updates.</li>
          <li>Built to support async rendering</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Fiber
        </Heading>
        <List style={ulStyle}>
          <ListItem style={liStyle}>Rearchitecture of the React reconciler</ListItem>
          <ListItem style={[liStyle, { opacity: 0 }]}>Created to support granular update control</ListItem>
          <ListItem style={[liStyle, { opacity: 0 }]}>Incremental/Async rendering</ListItem>
        </List>
      </Layout>
    </Slide>
    <Slide transition={["none"]} bgColor="tertiary">
      <Notes>
        <h4>Fiber</h4>
        <ol>
          <li>You've probably heard of Fiber</li>
          <li>Granular updates.</li>
          <li>Built to support async rendering</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Fiber
        </Heading>
        <List style={ulStyle}>
          <ListItem style={liStyle}>Rearchitecture of the React reconciler</ListItem>
          <ListItem style={liStyle}>Created to support granular update control</ListItem>
          <ListItem style={[liStyle, { opacity: 0 }]}>Incremental/Async rendering</ListItem>
        </List>
      </Layout>
    </Slide>
    <Slide transition={["none"]} bgColor="tertiary">
      <Notes>
        <h4>Fiber</h4>
        <ol>
          <li>You've probably heard of Fiber</li>
          <li>Granular updates.</li>
          <li>Built to support async rendering</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Fiber
        </Heading>
        <List style={ulStyle}>
          <ListItem style={liStyle}>Rearchitecture of the React reconciler</ListItem>
          <ListItem style={liStyle}>Created to support granular update control</ListItem>
          <ListItem style={liStyle}>Incremental/Async rendering</ListItem>
        </List>
      </Layout>
    </Slide>

    <Slide transition={["fade"]} bgImage={waitingGif}>
      <Notes>
        <h4>However</h4>
        <ol>
          <li>We didn't get to play with it just yet</li>
        </ol>
      </Notes>
    </Slide>

    <Slide transition={["fade"]} bgImage={bgImage}>
      <Notes>
        <h4>However</h4>
        <ol>
          <li>We didn't get to play with it just yet</li>
        </ol>
      </Notes>
      <Image
        alt="react16.3 features"
        src={r163Features}
        height="80%"
        width="80%"
      />
    </Slide>

    <Slide transition={["slide"]} bgColor="tertiary">
      <Notes>
        <h4>Life cycles</h4>
        <ol>
          <li>Still there, but prefaced with UNSAFE</li>
          <li>For async safety, use new ones</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Life Cycles
        </Heading>
        <List style={ulStyle}>
          <ListItem style={[liStyle, { opacity: 0, textDecoration: 'line-through' }]}>ComponentWillMount</ListItem>
          <ListItem style={[liStyle, { opacity: 0, textDecoration: 'line-through' }]}>ComponentWillReceiveProps</ListItem>
          <ListItem style={[liStyle, { opacity: 0, textDecoration: 'line-through' }]}>ComponentWillUpdate</ListItem>
        </List>
      </Layout>
    </Slide>
    <Slide transition={["none"]} bgColor="tertiary">
      <Notes>
        <h4>Life cycles</h4>
        <ol>
          <li>Still there, but prefaced with UNSAFE</li>
          <li>For async safety, use new ones</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Life Cycles
        </Heading>
        <List style={ulStyle}>
          <ListItem style={[liStyle, { textDecoration: 'line-through' }]}>ComponentWillMount</ListItem>
          <ListItem style={[liStyle, { opacity: 0, textDecoration: 'line-through' }]}>ComponentWillReceiveProps</ListItem>
          <ListItem style={[liStyle, { opacity: 0, textDecoration: 'line-through' }]}>ComponentWillUpdate</ListItem>
        </List>
      </Layout>
    </Slide>
    <Slide transition={["none"]} bgColor="tertiary">
      <Notes>
        <h4>Life cycles</h4>
        <ol>
          <li>Still there, but prefaced with UNSAFE</li>
          <li>For async safety, use new ones</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Life Cycles
        </Heading>
        <List style={ulStyle}>
          <ListItem style={[liStyle, { textDecoration: 'line-through' }]}>ComponentWillMount</ListItem>
          <ListItem style={[liStyle, { textDecoration: 'line-through' }]}>ComponentWillReceiveProps</ListItem>
          <ListItem style={[liStyle, { opacity: 0, textDecoration: 'line-through' }]}>ComponentWillUpdate</ListItem>
        </List>
      </Layout>
    </Slide>
    <Slide transition={["none"]} bgColor="tertiary">
      <Notes>
        <h4>Life cycles</h4>
        <ol>
          <li>Still there, but prefaced with UNSAFE</li>
          <li>For async safety, use new ones</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Life Cycles
        </Heading>
        <List style={ulStyle}>
          <ListItem style={[liStyle, { textDecoration: 'line-through' }]}>ComponentWillMount</ListItem>
          <ListItem style={[liStyle, { textDecoration: 'line-through' }]}>ComponentWillReceiveProps</ListItem>
          <ListItem style={[liStyle, { textDecoration: 'line-through' }]}>ComponentWillUpdate</ListItem>
        </List>
      </Layout>
    </Slide>

    <Slide transition={["none"]} bgColor="tertiary">
      <Notes>
        <h4>New Life cycles</h4>
        <ol>
          <li>getDerivedStateFromProps</li>
          <li>getSnapshotBeforeUpdate</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Life Cycles
        </Heading>
        <List style={ulStyle}>
          <ListItem style={[liStyle]}>getDerivedStateFromProps</ListItem>
          <ListItem style={[liStyle, { opacity: 0 }]}>getSnapshotBeforeUpdate</ListItem>
        </List>
      </Layout>
    </Slide>
    <Slide transition={["none"]} bgColor="tertiary">
      <Notes>
        <h4>New Life cycles</h4>
        <ol>
          <li>getDerivedStateFromProps</li>
          <li>getSnapshotBeforeUpdate</li>
        </ol>
      </Notes>
      <Layout style={layoutStyle}>
        <Heading size={2} fill caps lineHeight={1} textColor="white">
          Life Cycles
        </Heading>
        <List style={ulStyle}>
          <ListItem style={[liStyle]}>getDerivedStateFromProps</ListItem>
          <ListItem style={[liStyle]}>getSnapshotBeforeUpdate</ListItem>
        </List>
      </Layout>
    </Slide>

    <Slide transition={["fade"]} bgImage={bgImage}>
      <Notes>
        <h4>New Life Cycles</h4>
        <ol>
          <li>getDerived...(nextProps, prevState) in render phase & is static, replace ComponentWillReceiveProps</li>
          <li>getDerived... in render phase & is static</li>
          <br />
          <li>getSnapshot(prevProps, prevState)... read the current DOM state</li>
          <li>return is passed as 3rd param to componentDidUpdate</li>
        </ol>
      </Notes>
      <Image
        alt="react16.3 features"
        src={r163Features}
        height="80%"
        width="80%"
      />
    </Slide>

    <Slide transition={["fade"]} bgImage={why}>
      <Notes>
        <h4>but why</h4>
        <ol>
          <li>older methods - cause memory leaks</li>
        </ol>
      </Notes>
    </Slide>

  </SlideSet>
)
