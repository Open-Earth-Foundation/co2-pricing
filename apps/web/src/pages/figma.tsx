import { Stack } from '@mui/material';
import BaseLayout from 'layouts/BaseLayout';
import type { NextPageWithLayout } from 'types/ui';

import { BigDescriptionBlock, Slider, Counter, BottomDescriptions } from 'ui-components';


const FigmaPage: NextPageWithLayout = () => {
  return (
    <Stack>
      <BigDescriptionBlock key={1} />
      <Slider key={2} />
      <Counter key={3} />
      <BottomDescriptions key={4} items={[{ id: 1 }, { id: 2 }]} />
    </Stack>
  );
};

FigmaPage.getLayout = BaseLayout

export default FigmaPage;
