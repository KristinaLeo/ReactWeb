import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typing from 'react-typing-animation';
import { Box, Card, Image, Heading, Text, Flex} from 'rebass'
import avatar from './avatar.png';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, animateScroll as scroll} from 'react-scroll';
import aboutme from './about.png';
import boba from './boba.png';
import disney1 from './disney1.png';
import pet from './pethub.png';
import htmlweb from './htmlweb.png';

function App() {
  return (
    <div className="App">
      <StickyContainer>
      <Sticky>
          {({ style }) => <Flex px={5} color='white' bg='black' alignItems='center' height = {50} style = {style}>
          <Link activeClass = "active" to = "top" spy = {true} smooth = {true} duration = {500} variant='nav' style = {{textDecoration:'none', color: 'white'}}>kristina leo</Link>
        <Box mx='auto' />
        <Link activeClass = "active" to = "aboutme" spy = {true} smooth = {true} duration = {500} variant='nav' style = {{textDecoration:'none', color: 'white', marginLeft: '50px'}}>about</Link>
        <Link activeClass = "active" to = "projects" spy = {true} smooth = {true} duration = {500} variant='nav' style = {{textDecoration:'none', color: 'white', marginLeft: '50px'}}>projects</Link>
        <Link activeClass = "active" to = "contact" spy = {true} smooth = {true} duration = {500} variant='nav' style = {{textDecoration:'none', color: 'white' , marginLeft: '50px'}}>contact</Link>

      </Flex>}
      </Sticky>

      <header className="App-header" id = "top">
      <Typing>
        <span>welcome! i'm kristina.</span>
      </Typing>
      </header>

      <div className = "darkbgd" id = "aboutme">
        <div className = "txtbx1">
          <img className = "avi" src = {avatar} alt = "image of me"  height = "300" style= {{marginTop: '36px', textAlign: 'center'}}></img>
        </div>
          <h3> about me </h3>
          <Box sx={{ maxWidth: 562, mx: 'auto', px: 3, lineHeight: 2, justifyContent: 'center',
          marginBottom: '50'}}>
            Hi! I'm Kristina, a senior at San Jose State University studying Computer Science.
            I'm originally from San Francisco and would love to stay in the Bay Area, but
            also living in Southern California is a dream of mine as well. 
            I have a strong interest towards UI/UX and front-end development. Please feel
            free to look through the site and contact me if you think I'd be a great
            match with your team!
          </Box>
      </div>
      <div className = "lightbgd" id = "projects">
          <h3> projects </h3>
          <Flex mx = {4}>
          <Box width={1/4} px={1}>
            <Flex>
              <Card width={256} height = {400} style = {{backgroundColor : 'white'}}>
              <Image src={boba} />
              <a href = "https://www.figma.com/file/EFKqAoR8g0NgtvEBHXWtx9/Bay-Area-Boba?node-id=0%3A1" target = "_blank" 
              color = "black" style = {{textDecoration : 'none', color: 'black'}}><h3>Bay Area Boba</h3></a>
              <Text>If you know me, you know I like boba. These are some of my favorites in the Bay Area!</Text>
              </Card>
            </Flex>
          </Box>
          <Box width={1/4} px={1}>
            <Flex>
              <Card width={256} height = {400} style = {{backgroundColor : 'white'}}>
              <Image src = {disney1} />
              <a href = "https://xd.adobe.com/view/e30abaf0-14b5-47d0-6e10-943a1fa670b4-953b/?fullscreen&hints=off" target ="_blank"
              color = "black" style = {{textDecoration : 'none', color: 'black'}}><h3> Disneyland Redesign w/ Adobe XD </h3></a>
              <Text>I redesigned Disneyland's website with a for a holiday, minimalist theme.</Text>
              </Card>
            </Flex>
          </Box>
          <Box width={1/4} px={1}>
            <Flex>
              <Card width={256} height = {400} style = {{backgroundColor : 'white'}}>
              <Image src= {pet} />
              <a href = "https://xd.adobe.com/view/3c18e723-ca5d-445e-4c3f-88cb8c78a23a-4a29/?fullscreen&hints=off" target = "_blank"
              color = "black" style = {{textDecoration : 'none', color: 'black'}}><h3>Pet Hub</h3></a>
              <Text>This was a software engineering mockup/wireframe of an app of my own idea. It helped 
                me become familiar with Adobe XD and Adobe CC.
              </Text>
              </Card>
            </Flex>
          </Box>
          <Box width={1/4} px={1}>
            <Card width={256} height = {400} style = {{backgroundColor : 'white'}}>
              <Image src={htmlweb} />
              <h3>html/css/js website</h3>
              <Text>This is the version of my website, but in html/css/js. (This one's with React!)</Text>
            </Card>
          </Box>
        </Flex>
      </div>
      </StickyContainer>
    </div>
  );
}

export default App;
