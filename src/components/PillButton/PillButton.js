import React from 'react';
import { Button } from './PillButton.styles';

export default function PillButton({ link, icon, text }) {
  return (
    <Button type="button">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {icon}
        {text}
      </a>
    </Button>
  );
}
