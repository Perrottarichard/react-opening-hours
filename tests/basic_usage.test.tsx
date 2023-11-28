import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import { OpeningHoursUnstyled } from '../src';

describe('required props only', () => {
  it('renders without crashing', () => {
    render(
      <OpeningHoursUnstyled
        defaultValues={[
          { id: 'sun_open', time: 'closed', label: 'Sunday' },
          { id: 'sun_close', time: 'closed', label: 'Sunday' },
          { id: 'mon_open', time: '09:00:00', label: 'Monday' },
          { id: 'mon_close', time: '17:00:00', label: 'Monday' },
          { id: 'tue_open', time: '09:00:00', label: 'Tuesday' },
          { id: 'tue_close', time: '17:00:00', label: 'Tuesday' },
          { id: 'wed_open', time: '09:00:00', label: 'Wednesday' },
          { id: 'wed_close', time: '17:00:00', label: 'Wednesday' },
          { id: 'thu_open', time: '09:00:00', label: 'Thursday' },
          { id: 'thu_close', time: '17:00:00', label: 'Thursday' },
          { id: 'fri_open', time: '09:00:00', label: 'Friday' },
          { id: 'fri_close', time: '17:00:00', label: 'Friday' },
          { id: 'sat_open', time: 'closed', label: 'Saturday' },
          { id: 'sat_close', time: 'closed', label: 'Saturday' },
        ]}
        getValues={(values) => console.log(values)}
      />
    );
  });
});
