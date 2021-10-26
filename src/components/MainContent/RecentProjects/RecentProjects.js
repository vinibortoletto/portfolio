import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { AiFillGithub } from 'react-icons/ai';
import { useData } from '../../../contexts/Data';
import { Title } from '../../Title/Title.styles';
import PillButton from '../../PillButton/PillButton';
import {
  Container,
  Card,
  CardBg,
  CardLogo,
  CardContent,
  Line,
  ButtonWrapper,
} from './RecentProjects.styles';

export default function RecentProjects() {
  const { data, language } = useData();

  return (
    <Container className="recent-projects">
      <Title>{data.recentProjects.title}</Title>

      <div>
        {data.recentProjects.cards.map((card) => (
          <Card key={card.id} bgImg={card.bg}>
            <CardBg
              src={card.bg}
              alt={
                language === 'br'
                  ? 'background da empresa'
                  : 'company background'
              }
            />
            <CardLogo
              src={card.logo}
              alt={language === 'br' ? 'logo da empresa' : 'company logo'}
            />

            <CardContent>
              <p>{card.description}</p>
              <Line />
              <ButtonWrapper>
                <PillButton
                  link={card.website}
                  icon={<CgWebsite />}
                  text={data.recentProjects.buttonsText.website}
                />
                <PillButton
                  link={card.github}
                  icon={<AiFillGithub />}
                  text={data.recentProjects.buttonsText.github}
                />
              </ButtonWrapper>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
