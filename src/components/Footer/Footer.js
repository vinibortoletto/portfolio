import React from 'react';

// Icons
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';

// Components
import BottomShape from '../BottomShape/BottomShape';
import PillButton from '../PillButton/PillButton';

// Images
import logo from '../../images/icons/logo.svg';

// Styles
import { Container, Logo, SocialNetworks, Copyright } from './Footer.styles';

// Contexts
import { useData } from '../../contexts/Data';

export default function Footer() {
  const { language, data } = useData();

  return (
    <Container>
      <Logo
        src={logo}
        alt={
          language === 'br'
            ? 'logo de vinicius bortoletto'
            : "vinicius bortoletto's logo"
        }
      />

      <SocialNetworks>
        <li>
          <a href="https://github.com/vinibortoletto/">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vinicius-bortoletto/">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:ovinibortoletto@gmail.com?subject=website contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail />
          </a>
        </li>
      </SocialNetworks>

      <PillButton
        link={data.footer.downloadButton.link}
        icon={<FaFileDownload />}
        text={data.footer.downloadButton.text}
      />

      <Copyright>
        {data.footer.copyright} <span>vini.bortoletto</span>
      </Copyright>
      <BottomShape />
    </Container>
  );
}
