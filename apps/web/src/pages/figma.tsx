import { Container, Stack } from '@mui/material';
import BaseLayout from 'layouts/BaseLayout';
import type { NextPageWithLayout } from 'types/ui';

// import { BigDescriptionBlock, Slider, Counter, BottomDescriptions } from 'ui-components';


const FigmaPage: NextPageWithLayout = () => {
  return (
    <Container maxWidth='lg'>
      <Stack>
        {/* <BigDescriptionBlock />
        <Slider />
        <Counter />
        <BottomDescriptions items={[{ id: 1 }, { id: 2 }]} /> */}
      </Stack>
    </Container>
  );
};

FigmaPage.getLayout = BaseLayout

export default FigmaPage;
