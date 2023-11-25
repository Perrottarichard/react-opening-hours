import React from 'react';
import { ContentCopyOutlined } from '@mui/icons-material';
import { OpeningHoursUnstyled } from './index';
import { IconButton, Tooltip, Typography } from '@mui/material';
import Select from 'react-select';
export default {
  title: 'OpeningHoursUnstyledStory',
};

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    marginRight: 8,
    width: '120px',
    fontFamily: 'monospace',
    border: '1px solid ' + (state.isFocused ? '#606060' : '#3acf62'),
    boxShadow: state.isFocused ? '#000000' : null,
    '&:hover': {
      border: '1px solid #3acf62',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'monospace',
    background: state.isFocused ? '#909090' : state.isSelected ? '#606060' : null,
    color: state.isFocused || state.isSelected ? 'white' : 'black',
  }),
};

const AntDesignButton = ({ id, text, onClick, active }) => {
  const buttonStyleActive = {
    display: 'inline-block',
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    border: '1px solid #3acf62',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#3acf62',
    backgroundColor: '#606060',
    marginRight: 12,
    transition: 'background-color 0.3s, color 0.3s, border 0.3s',
  };

  const buttonStyleInactive = { ...buttonStyleActive, opacity: 0.3 };

  return (
    <button key={id} style={active ? buttonStyleActive : buttonStyleInactive} onClick={onClick}>
      {text}
    </button>
  );
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
    dayButtonContainerStyles={{ marginBottom: 12 }}
    renderDayButton={(props) => <AntDesignButton {...props} />}
    renderCopyButton={({ onClick }) => (
      <Tooltip title="Copy To All">
        <IconButton onClick={onClick} sx={{ position: 'absolute', right: 30, top: 0 }}>
          <ContentCopyOutlined />
        </IconButton>
      </Tooltip>
    )}
    selectContainerStyles={{ width: '140px' }}
    labelContainerStyles={{ width: '90px' }}
    selectType="react-select"
    renderSelect={(props) => <Select styles={customSelectStyles} {...props} />}
    renderLabel={({ id, label, ...other }) => (
      <Typography
        key={id}
        variant="overline"
        {...other}
        sx={{ lineHeight: 3, fontFamily: 'monospace' }}
      >
        {label}
      </Typography>
    )}
  />
);
