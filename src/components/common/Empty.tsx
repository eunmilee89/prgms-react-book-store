import styled from 'styled-components';
import Title from './Title';

interface Props {
  icon?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
}

export default function Empty({ icon, title, description }: Props) {
  return (
    <StyledEmpty>
      {icon && <div className='icon'>{icon}</div>}
      <Title size='large' color='secondary'>
        {title}
      </Title>
      {description && <p>{description}</p>}
    </StyledEmpty>
  );
}

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 120px 0;

  .icon {
    svg {
      font-size: 4rem;
      fill: #ccc;
    }
  }
`;
