import { CopyAllRounded } from '@mui/icons-material';
import { OpeningHoursUnstyled } from './index';
import { Button, IconButton, Tooltip } from '@mui/material';
import Select from 'react-select';
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
    verticalTimePairs
    renderDayButton={({ key, text, onClick }) => (
      <Button
        variant="outlined"
        color="secondary"
        key={key}
        onClick={onClick}
        sx={{ borderRadius: '8px', m: 1 }}
      >
        {text}
      </Button>
    )}
    renderCopyButton={({ onClick }) => (
      <Tooltip title="Copy To All">
        <IconButton onClick={onClick} sx={{ position: 'absolute', right: 20, top: -10 }}>
          <CopyAllRounded />
        </IconButton>
      </Tooltip>
    )}
    renderSelect={(props) => <Select {...props} />}
  />
);
