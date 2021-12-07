import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Full-stack web developer with the zeal to create functional and cognitive applications. Passionate in Computer Science, Software Development, and Web Applications, educated with the contemporary skills in full-stack development from Professional and Continuing Education, University of Washington. Ardent problem solver with innate qualities such as hard work, focus, innovation, never give up attitude. Love to create web-based applications as my pet projects in free time using full-stack knowledge such as HTML 5, CSS, Bootstrap, Javascript, Jquery, Handlebars, Node Js, React Js, Express, MySQL, MongoDB
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            React.js <br/>
            Angular.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Node <br/>
            Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size = "3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma<br/>
            Angular.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
