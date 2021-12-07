import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
      Full-stack web developer with the zeal to create functional and cognitive applications. Passionate in Computer Science, Software Development, and Web Applications, educated with the contemporary skills in full-stack development from Professional and Continuing Education, University of Washington.
      </SectionText>
      <Button onClick = {() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;