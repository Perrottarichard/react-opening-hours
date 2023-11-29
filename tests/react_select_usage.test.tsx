import React from 'react';
import { render } from '@testing-library/react';
import { ContentCopyOutlined } from '@mui/icons-material';
import { IconButton, Tooltip, Typography } from '@mui/material';
import Select, { StylesConfig } from 'react-select';

import 'jest-canvas-mock';

import { OpeningHoursUnstyled } from '../src';

interface Option {
  label: string;
  value: string;
}

const customSelectStyles: StylesConfig<Option, false> = {
  control: (provided, state) => ({
    ...provided,
    marginRight: 8,
    width: '120px',
    fontFamily: 'tahoma',
    border: '1px solid ' + (state.isFocused ? '#909090' : '#6be88c'),
    boxShadow: state.isFocused ? '#000000' : undefined,
    '&:hover': {
      border: '1px solid #6be88c',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'tahoma',
    background: state.isFocused ? '#909090' : state.isSelected ? '#606060' : undefined,
    color: state.isFocused || state.isSelected ? 'white' : 'black',
  }),
};

interface AntDesignButtonProps {
  id: string;
  text: string;
  onClick: () => void;
  active: boolean;
}

const AntDesignButton: React.FC<AntDesignButtonProps> = ({ id, text, onClick, active }) => {
  const buttonStyleActive = {
    display: 'inline-block',
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    border: '1px solid #6be88c',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#6be88c',
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

describe('kitchen sink example', () => {
  it('renders without crashing', () => {
    render(
      <OpeningHoursUnstyled
        getValues={(values) => console.log(values)}
        defaultValues={[
          { id: 'dimanche_ouvert', time: 'closed', label: 'Dimanche' },
          { id: 'dimanche_fermé', time: 'closed', label: 'Dimanche' },
          { id: 'lundi_ouvert', time: '09:00:00', label: 'Lundi' },
          { id: 'lundi_fermé', time: '17:00:00', label: 'Lundi' },
          { id: 'mardi_ouvert', time: '09:00:00', label: 'Mardi' },
          { id: 'mardi_fermé', time: '17:00:00', label: 'Mardi' },
          { id: 'mercredi_ouvert', time: '09:00:00', label: 'Mercredi' },
          { id: 'mercredi_fermé', time: '17:00:00', label: 'Mercredi' },
          { id: 'jeudi_ouvert', time: '09:00:00', label: 'Jeudi' },
          { id: 'jeudi_fermé', time: '17:00:00', label: 'Jeudi' },
          { id: 'vendredi_ouvert', time: '09:00:00', label: 'Vendredi' },
          { id: 'vendredi_fermé', time: '17:00:00', label: 'Vendredi' },
          { id: 'samedi_ouvert', time: 'closed', label: 'Samedi' },
          { id: 'samedi_fermé', time: 'closed', label: 'Samedi' },
        ]}
        ampm
        showCopyToAll
        dayButtonContainerStyles={{ marginBottom: 12 }}
        renderDayButton={(props) => <AntDesignButton key={props.id} {...props} />}
        getDayButtonLabelText={(label) => label.slice(0, 3)}
        renderCopyButton={({ onClick }) => (
          <Tooltip title="Copy To All">
            <IconButton onClick={onClick} sx={{ position: 'absolute', right: 30, top: 0 }}>
              <ContentCopyOutlined />
            </IconButton>
          </Tooltip>
        )}
        selectContainerStyles={{ width: '140px' }}
        labelContainerStyles={{ width: '90px' }}
        renderSelect={(props) => <Select styles={customSelectStyles} {...props} />}
        renderLabel={({ id, label, ...other }) => (
          <Typography
            key={id}
            variant="body1"
            {...other}
            sx={{ lineHeight: 3, fontFamily: 'tahoma' }}
          >
            {label}
          </Typography>
        )}
      />
    );
  });
});
