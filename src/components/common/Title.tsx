import { styled } from 'styled-components';
import { ColorKey, HeadingSize, Theme } from '../../style/theme';

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}

export default function Title({ children, size, color }: Props) {
  return (
    <TitleStyle size={size} color={color}>
      {children}
    </TitleStyle>
  );
}

const TitleStyle = styled.h1<Omit<Props, 'children'>>`
  font-size: ${({ theme, size }) => (theme as Theme).heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? (theme as Theme).color[color] : (theme as Theme).color.primary};
`;
