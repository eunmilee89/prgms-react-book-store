import styled from 'styled-components';
import Button from '../common/Button';
import { FaList, FaTh } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';
import { useEffect } from 'react';

const viewOptions = [
  {
    value: 'list',
    icon: <FaList />,
  },
  {
    value: 'grid',
    icon: <FaTh />,
  },
];

export type ViewMode = 'grid' | 'list';

export default function BooksViewSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);

    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch('grid');
    }
  }, []);

  return (
    <StyledBooksViewSwitcher>
      {viewOptions.map((option) => (
        <Button
          key={option.value}
          size='medium'
          scheme={
            searchParams.get(QUERYSTRING.VIEW) === option.value
              ? 'primary'
              : 'normal'
          }
          onClick={() => handleSwitch(option.value)}
        >
          {option.icon}
        </Button>
      ))}
    </StyledBooksViewSwitcher>
  );
}

const StyledBooksViewSwitcher = styled.div`
  display: flex;
  gap: 8px;
  svg {
    fill: #fff;
  }
`;
