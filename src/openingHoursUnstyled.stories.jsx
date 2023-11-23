import { OpeningHoursUnstyled } from './index';
export default {
  title: 'OpeningHoursUnstyledStory',
};
export const OpeningHoursUnstyledStory = () => (
  <OpeningHoursUnstyled
    values={{
      sun_open: 'closed',
      sun_close: 'closed',
      mon_open: '09:00:00',
      mon_close: '17:00:00',
      tue_open: '09:00:00',
      tue_close: '17:00:00',
      wed_open: '09:00:00',
      wed_close: '17:00:00',
      thu_open: '09:00:00',
      thu_close: '17:00:00',
      fri_open: '09:00:00',
      fri_close: '17:00:00',
      sat_open: 'closed',
      sat_close: 'closed',
    }}
    getValues={(values) => console.log(values)}
    ampm
    showCopyToAll
  />
);
