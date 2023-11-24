import { CopyAllRounded } from '@mui/icons-material';
import { OpeningHoursUnstyled } from './index';
import { IconButton, Tooltip, Typography } from '@mui/material';
import Select from 'react-select';
export default {
  title: 'OpeningHoursUnstyledStory',
};

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    marginTop: 8,
    border: '1px solid ' + (state.isFocused ? '#4a90e2' : '#ccc'),
    boxShadow: state.isFocused ? '0 0 5px rgba(74, 144, 226, 0.5)' : null,
    '&:hover': {
      border: '1px solid #4a90e2',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? '#4a90e2' : null,
    color: state.isFocused ? 'white' : 'black',
  }),
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
    dayButtonContainerStyles={{ marginBottom: 12 }}
    renderDayButton={({ key, text, onClick, active }) => (
      <IconButton
        type="button"
        key={key}
        variant="contained"
        size="small"
        sx={(theme) => ({
          opacity: active ? 1 : 0.4,
          px: text === 'M' || text === 'W' ? 1.25 : 1.5,
          mx: 0.75,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.getContrastText(theme.palette.primary.main),
          '&:hover': {
            bgcolor: theme.palette.primary.dark,
            color: theme.palette.getContrastText(theme.palette.primary.dark),
          },
        })}
        onClick={onClick}
      >
        <Typography component={'span'}>{text}</Typography>
      </IconButton>
    )}
    renderCopyButton={({ onClick }) => (
      <Tooltip title="Copy To All">
        <IconButton onClick={onClick} sx={{ position: 'absolute', right: 16, top: 26 }}>
          <CopyAllRounded />
        </IconButton>
      </Tooltip>
    )}
    renderSelect={(props) => <Select styles={customSelectStyles} {...props} />}
    renderLabel={({ label, ...other }) => (
      <Typography variant="caption" {...other}>
        {label}
      </Typography>
    )}
  />
);
