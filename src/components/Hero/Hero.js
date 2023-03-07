import React from 'react';

// Icons
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { FaBirthdayCake } from 'react-icons/fa';

// Images
import avatar from '../../images/illustrations/avatar.svg';

// Contexts
import { useData } from '../../contexts/Data';

// Styles
import { Container, Avatar, Title, Info } from './Hero.styles';

export default function Hero() {
  const { data } = useData();

  return (
    <Container>
      <Avatar>
        <img src={avatar} alt={data.hero.avatarAlt} />
      </Avatar>

      <Title>
        <h1>vini.bortoletto</h1>
        <h2>{data.hero.profession}</h2>
      </Title>

      <Info>
        <ul>
          <li>
            <MdEmail />
            ovinibortoletto@gmail.com
          </li>
          <li>
            <ImLocation />
            {data.hero.location}
          </li>
        </ul>
      </Info>
    </Container>
  );
}
