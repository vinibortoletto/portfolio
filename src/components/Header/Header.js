import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import PillButton from '../PillButton/PillButton';
import { useData } from '../../contexts/Data';
import logo from '../../images/icons/logo.svg';
import { Container, Logo, Wrapper, FlagButton } from './Header.styles';

export default function Header() {
  const { data, changeLanguage } = useData();

  return (
    <Container>
      <Logo clasName="logo" src={logo} alt={data.header.logoAlt} />

      <Wrapper>
        <PillButton
          link={data.header.downloadButton.link}
          icon={<FaFileDownload />}
          text={data.header.downloadButton.text}
        />

        <FlagButton type="button" onClick={changeLanguage}>
          <img src={data.header.flag} alt={data.header.flagAlt} />
        </FlagButton>
      </Wrapper>
    </Container>
  );
}
