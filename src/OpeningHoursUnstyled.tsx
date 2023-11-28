import React, { ReactNode } from 'react';
import { useEffect, useState } from 'react';

type TimeValue =
  | '00:00:00'
  | '00:30:00'
  | '01:00:00'
  | '01:30:00'
  | '02:00:00'
  | '02:30:00'
  | '03:00:00'
  | '03:30:00'
  | '04:00:00'
  | '04:30:00'
  | '05:00:00'
  | '05:30:00'
  | '06:00:00'
  | '06:30:00'
  | '07:00:00'
  | '07:30:00'
  | '08:00:00'
  | '08:30:00'
  | '09:00:00'
  | '09:30:00'
  | '10:00:00'
  | '10:30:00'
  | '11:00:00'
  | '11:30:00'
  | '12:00:00'
  | '12:30:00'
  | '13:00:00'
  | '13:30:00'
  | '14:00:00'
  | '14:30:00'
  | '15:00:00'
  | '15:30:00'
  | '16:00:00'
  | '16:30:00'
  | '17:00:00'
  | '17:30:00'
  | '18:00:00'
  | '18:30:00'
  | '19:00:00'
  | '19:30:00'
  | '20:00:00'
  | '20:30:00'
  | '21:00:00'
  | '21:30:00'
  | '22:00:00'
  | '22:30:00'
  | '23:00:00'
  | '23:30:00'
  | 'closed';
type TimeOption = { value: TimeValue; label: string };

const timeOptions12: TimeOption[] = [
  {
    value: '00:00:00',
    label: '12:00am',
  },
  {
    value: '00:30:00',
    label: '12:30am',
  },
  {
    value: '01:00:00',
    label: '1:00am',
  },
  {
    value: '01:30:00',
    label: '1:30am',
  },
  {
    value: '02:00:00',
    label: '2:00am',
  },
  {
    value: '02:30:00',
    label: '2:30am',
  },
  {
    value: '03:00:00',
    label: '3:00am',
  },
  {
    value: '03:30:00',
    label: '3:30am',
  },
  {
    value: '04:00:00',
    label: '4:00am',
  },
  {
    value: '04:30:00',
    label: '4:30am',
  },
  {
    value: '05:00:00',
    label: '5:00am',
  },
  {
    value: '05:30:00',
    label: '5:30am',
  },
  {
    value: '06:00:00',
    label: '6:00am',
  },
  {
    value: '06:30:00',
    label: '6:30am',
  },
  {
    value: '07:00:00',
    label: '7:00am',
  },
  {
    value: '07:30:00',
    label: '7:30am',
  },
  {
    value: '08:00:00',
    label: '8:00am',
  },
  {
    value: '08:30:00',
    label: '8:30am',
  },
  {
    value: '09:00:00',
    label: '9:00am',
  },
  {
    value: '09:30:00',
    label: '9:30am',
  },
  {
    value: '10:00:00',
    label: '10:00am',
  },
  {
    value: '10:30:00',
    label: '10:30am',
  },
  {
    value: '11:00:00',
    label: '11:00am',
  },
  {
    value: '11:30:00',
    label: '11:30am',
  },
  {
    value: '12:00:00',
    label: '12:00pm',
  },
  {
    value: '12:30:00',
    label: '12:30pm',
  },
  {
    value: '13:00:00',
    label: '1:00pm',
  },
  {
    value: '13:30:00',
    label: '1:30pm',
  },
  {
    value: '14:00:00',
    label: '2:00pm',
  },
  {
    value: '14:30:00',
    label: '2:30pm',
  },
  {
    value: '15:00:00',
    label: '3:00pm',
  },
  {
    value: '15:30:00',
    label: '3:30pm',
  },
  {
    value: '16:00:00',
    label: '4:00pm',
  },
  {
    value: '16:30:00',
    label: '4:30pm',
  },
  {
    value: '17:00:00',
    label: '5:00pm',
  },
  {
    value: '17:30:00',
    label: '5:30pm',
  },
  {
    value: '18:00:00',
    label: '6:00pm',
  },
  {
    value: '18:30:00',
    label: '6:30pm',
  },
  {
    value: '19:00:00',
    label: '7:00pm',
  },
  {
    value: '19:30:00',
    label: '7:30pm',
  },
  {
    value: '20:00:00',
    label: '8:00pm',
  },
  {
    value: '20:30:00',
    label: '8:30pm',
  },
  {
    value: '21:00:00',
    label: '9:00pm',
  },
  {
    value: '21:30:00',
    label: '9:30pm',
  },
  {
    value: '22:00:00',
    label: '10:00pm',
  },
  {
    value: '22:30:00',
    label: '10:30pm',
  },
  {
    value: '23:00:00',
    label: '11:00pm',
  },
  {
    value: '23:30:00',
    label: '11:30pm',
  },
];

type DefaultDay = { id: string; time: string; label: string };
type Day = { id: string; time: string; label: string; seq: number };

const timeOptions24: TimeOption[] = timeOptions12.map((t) => {
  return { ...t, label: t.value };
});

interface OpeningHoursProps {
  getValues: (formValues: Day[]) => void;
  defaultValues: DefaultDay[];
  ampm?: boolean;
  verticalTimePairs?: boolean;
  rootContainerStyles?: React.CSSProperties;
  rootContainerClassName?: string;
  renderDayButton?: (buttonProps: {
    id: string;
    text: string;
    onClick: () => void;
    active: boolean;
  }) => ReactNode;
  getDayButtonLabelText?: (label: string) => string;
  dayButtonContainerStyles?: React.CSSProperties;
  dayButtonContainerClassName?: string;
  dayButtonActiveElementStyles?: React.CSSProperties;
  dayButtonInactiveElementStyles?: React.CSSProperties;
  dayButtonActiveElementClassName?: string;
  dayButtonInactiveElementClassName?: string;
  renderLabel?: (labelProps: { id: string; htmlFor: string; label: string }) => ReactNode;
  labelContainerStyles?: React.CSSProperties;
  labelContainerClassName?: string;
  labelElementStyles?: React.CSSProperties;
  labelElementClassName?: string;
  renderCopyButton?: (buttonProps: { onClick: () => void }) => ReactNode;
  copyButtonContainerStyles?: React.CSSProperties;
  copyButtonContainerClassName?: string;
  copyButtonElementStyles?: React.CSSProperties;
  copyButtonElementClassName?: string;
  selectType?: 'react-select' | 'native';
  renderSelect?: (selectProps: {
    id: string;
    options: TimeOption[];
    value: TimeOption | undefined;
    onChange: (event: any) => void;
  }) => ReactNode;
  selectContainerStyles?: React.CSSProperties;
  selectContainerClassName?: string;
  selectElementStyles?: React.CSSProperties;
  selectElementClassName?: string;
  showCopyToAll?: boolean;
}

const getMatchingDayPair = (day: Day, daysConf: Day[]) => {
  const dayGroup = [];
  if (day.seq % 2 === 0) {
    dayGroup[0] = day;
    const closeDay: Day = daysConf[day.seq + 1];
    dayGroup[1] = closeDay;
  } else {
    const openDay: Day = daysConf[day.seq - 1];
    dayGroup[0] = openDay;
    dayGroup[1] = day;
  }
  return dayGroup;
};

const shouldShowDayAsOpen = (day: Day, daysConf: Day[]) => {
  const openTime = getMatchingDayPair(day, daysConf)[0].time;
  const closeTime = getMatchingDayPair(day, daysConf)[1].time;
  return !!(openTime !== 'closed' && closeTime !== 'closed');
};

const shouldShowDayAsClosed = (day: Day, daysConf: Day[]) => {
  const openTime = getMatchingDayPair(day, daysConf)[0].time;
  const closeTime = getMatchingDayPair(day, daysConf)[1].time;
  return !!(openTime === 'closed' && closeTime === 'closed');
};

const shouldRenderInput = (day: Day, daysConf: Day[]) => {
  return shouldShowDayAsOpen(day, daysConf);
};

const shouldDisableTimeOption = (timeOption: TimeOption, day: Day, daysConf: Day[]) => {
  const openTime = getMatchingDayPair(day, daysConf)[0].time;
  const closeTime = getMatchingDayPair(day, daysConf)[1].time;
  const baseDate = new Date('1970-01-01');
  const dateTimeOpen = new Date(`${baseDate.toDateString()} ${openTime}`);
  const dateTimeClose = new Date(`${baseDate.toDateString()} ${closeTime}`);
  const dateTimeWithTimeOption = new Date(`${baseDate.toDateString()} ${timeOption.value}`);
  if (day.seq % 2 === 0) {
    return dateTimeWithTimeOption >= dateTimeClose;
  }
  return dateTimeWithTimeOption <= dateTimeOpen;
};

const OpeningHoursUnstyled: React.FC<OpeningHoursProps> = (props) => {
  const {
    getValues,
    defaultValues,
    ampm,
    verticalTimePairs,
    rootContainerStyles,
    rootContainerClassName,
    renderDayButton,
    getDayButtonLabelText,
    dayButtonContainerStyles,
    dayButtonContainerClassName,
    dayButtonActiveElementStyles,
    dayButtonInactiveElementStyles,
    dayButtonActiveElementClassName,
    dayButtonInactiveElementClassName,
    renderLabel,
    labelContainerStyles,
    labelContainerClassName,
    labelElementStyles,
    labelElementClassName,
    renderCopyButton,
    copyButtonContainerStyles,
    copyButtonContainerClassName,
    copyButtonElementStyles,
    copyButtonElementClassName,
    selectType,
    renderSelect,
    selectContainerStyles,
    selectContainerClassName,
    selectElementStyles,
    selectElementClassName,
    showCopyToAll,
  } = props;
  const timeOptions = ampm ? timeOptions12 : timeOptions24;

  const [daysConfig, setDaysConfig] = useState([
    { id: 'sun_open', time: 'closed', label: 'Sunday', seq: 0 },
    { id: 'sun_close', time: 'closed', label: 'Sunday', seq: 0 },
    { id: 'mon_open', time: 'closed', label: 'Monday', seq: 1 },
    { id: 'mon_close', time: 'closed', label: 'Monday', seq: 1 },
    { id: 'tue_open', time: 'closed', label: 'Tuesday', seq: 2 },
    { id: 'tue_close', time: 'closed', label: 'Tuesday', seq: 2 },
    { id: 'wed_open', time: 'closed', label: 'Wednesday', seq: 3 },
    { id: 'wed_close', time: 'closed', label: 'Wednesday', seq: 3 },
    { id: 'thu_open', time: 'closed', label: 'Thursday', seq: 4 },
    { id: 'thu_close', time: 'closed', label: 'Thursday', seq: 4 },
    { id: 'fri_open', time: 'closed', label: 'Friday', seq: 5 },
    { id: 'fri_close', time: 'closed', label: 'Friday', seq: 5 },
    { id: 'sat_open', time: 'closed', label: 'Saturday', seq: 6 },
    { id: 'sat_close', time: 'closed', label: 'Saturday', seq: 6 },
  ]);

  useEffect(() => {
    if (Array.isArray(defaultValues) && defaultValues.length) {
      const withSequences: Day[] = [];
      for (let i = 0; i < defaultValues.length; i++) {
        withSequences.push({ ...defaultValues[i], seq: i });
      }
      setDaysConfig(withSequences);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hideDayToggle = (dayToHide: Day) => {
    const [openDay, closeDay] = getMatchingDayPair(dayToHide, daysConfig);
    const newDaysConfig = daysConfig.map((day) => {
      if (day.id === openDay?.id) {
        return { ...openDay, time: 'closed' };
      } else if (day.id === closeDay?.id) {
        return { ...closeDay, time: 'closed' };
      } else {
        return day;
      }
    });
    setDaysConfig(newDaysConfig);
  };

  const showDayToggle = (dayToShow: Day) => {
    const [openDay, closeDay] = getMatchingDayPair(dayToShow, daysConfig);
    const newDaysConfig = daysConfig.map((day) => {
      if (day.id === openDay?.id) {
        return { ...openDay, time: '09:00:00' };
      } else if (day.id === closeDay?.id) {
        return { ...closeDay, time: '17:00:00' };
      } else {
        return day;
      }
    });
    setDaysConfig(newDaysConfig);
  };

  const handleChangeTime = (dayToChange: Day, newTime: TimeValue) => {
    const oldDay: Day = daysConfig.find((x) => x.id === dayToChange.id)!;
    const newDaysConfig = daysConfig.map((day) => {
      if (day.id === dayToChange.id) {
        return { ...oldDay, time: newTime };
      } else {
        return day;
      }
    });
    setDaysConfig(newDaysConfig);
  };

  const copyAll = (dayToCopy: Day) => {
    const [openDay, closeDay] = getMatchingDayPair(dayToCopy, daysConfig);
    const newDaysConfig = daysConfig.map((day, i, arr) => {
      if (day.seq % 2 === 0 && shouldShowDayAsOpen(day, arr) && day.id !== openDay.id) {
        return { ...day, time: openDay.time };
      } else if (day.seq % 2 === 1 && shouldShowDayAsOpen(day, arr) && day.id !== closeDay.id) {
        return { ...day, time: closeDay.time };
      } else {
        return day;
      }
    });
    setDaysConfig(newDaysConfig);
  };

  //pass values up to parent
  useEffect(() => {
    getValues(daysConfig);
  }, [getValues, daysConfig]);

  return (
    <div
      className={rootContainerClassName}
      style={
        rootContainerStyles
          ? rootContainerStyles
          : !rootContainerClassName
            ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
              }
            : undefined
      }
    >
      <div className={dayButtonContainerClassName} style={dayButtonContainerStyles}>
        {daysConfig &&
          daysConfig.map((day, i, arr) => {
            if (shouldShowDayAsOpen(day, arr) && day.seq % 2 === 0) {
              if (typeof renderDayButton === 'function') {
                return renderDayButton({
                  id: `${day.id}${i}-btn`,
                  text: getDayButtonLabelText ? getDayButtonLabelText(day.label) : day.label[0],
                  onClick: () => hideDayToggle(day),
                  active: true,
                });
              }
              return (
                <button
                  type="button"
                  style={dayButtonActiveElementStyles}
                  key={`${day.id}${i}-btn`}
                  onClick={() => hideDayToggle(day)}
                  className={dayButtonActiveElementClassName}
                >
                  <span>
                    {getDayButtonLabelText ? getDayButtonLabelText(day.label) : day.label[0]}
                  </span>
                </button>
              );
            } else if (shouldShowDayAsClosed(day, arr) && day.seq % 2 === 0) {
              if (typeof renderDayButton === 'function') {
                return renderDayButton({
                  id: `${day.id}${i}-btn`,
                  text: getDayButtonLabelText ? getDayButtonLabelText(day.label) : day.label[0],
                  onClick: () => showDayToggle(day),
                  active: false,
                });
              }
              return (
                <button
                  type="button"
                  key={`${day.id}${i}-btn`}
                  style={
                    dayButtonInactiveElementStyles
                      ? dayButtonInactiveElementStyles
                      : dayButtonActiveElementClassName
                        ? undefined
                        : {
                            opacity: 0.3,
                          }
                  }
                  onClick={() => showDayToggle(day)}
                  className={dayButtonInactiveElementClassName}
                >
                  {getDayButtonLabelText ? getDayButtonLabelText(day.label) : day.label[0]}
                </button>
              );
            } else {
              return null;
            }
          })}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {daysConfig &&
            daysConfig.map((day, i, arr) => {
              const [open, close] = getMatchingDayPair(day, arr);
              if (shouldRenderInput(day, arr) && i % 2 === 0) {
                return (
                  <div
                    key={`${day.id}-${i}-itemContainerDiv`}
                    id={`${day.id}-${i}-itemContainerDiv`}
                    style={
                      verticalTimePairs
                        ? {
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: '260px',
                            marginTop: 4,
                            marginBottom: 4,
                            position: 'relative',
                          }
                        : {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 4,
                            marginBottom: 4,
                            position: 'relative',
                          }
                    }
                  >
                    <div
                      key={`${day.id}-${i}-labelDiv`}
                      className={labelContainerClassName}
                      style={labelContainerStyles}
                    >
                      {typeof renderLabel === 'function' ? (
                        renderLabel({
                          id: `${day.id}-${i}-label`,
                          htmlFor: `${day.id}-label`,
                          label: day.label,
                        })
                      ) : (
                        <label
                          key={`${day.id}-${i}-label`}
                          htmlFor={`${day.id}-label`}
                          className={labelElementClassName}
                          style={labelElementStyles}
                        >
                          {day.label}
                        </label>
                      )}
                    </div>
                    <div
                      key={`${open.id}-${i}-selectOpenDiv`}
                      className={selectContainerClassName}
                      style={selectContainerStyles}
                    >
                      {typeof renderSelect === 'function' ? (
                        renderSelect({
                          id: `${open.id}${i}-select`,
                          options: timeOptions.filter(
                            (t) => !shouldDisableTimeOption(t, open, arr)
                          ),
                          value: timeOptions.find((t) => t.value === open.time),
                          onChange: (event: any) => {
                            switch (selectType) {
                              case 'react-select':
                                handleChangeTime(open, event.value);
                                break;

                              case 'native':
                                handleChangeTime(open, event.target.value);
                                break;

                              default:
                                console.log('Unknown select type');
                            }
                          },
                        })
                      ) : (
                        <select
                          key={`${open.id}-select`}
                          value={open.time}
                          onChange={(event: any) => {
                            handleChangeTime(open, event.target.value);
                          }}
                          style={selectElementStyles}
                          className={selectElementClassName}
                        >
                          {timeOptions.map((t) => (
                            <option
                              key={t.value}
                              value={t.value}
                              disabled={shouldDisableTimeOption(t, open, arr)}
                            >
                              {t.label}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div
                      key={`${close.id}-${i}-selectCloseDiv`}
                      className={selectContainerClassName}
                      style={selectContainerStyles}
                    >
                      {typeof renderSelect === 'function' ? (
                        renderSelect({
                          id: `${close.id}${i}-select`,
                          options: timeOptions.filter(
                            (t) => !shouldDisableTimeOption(t, close, arr)
                          ),
                          value: timeOptions.find((t) => t.value === close.time),
                          onChange: (event: any) => {
                            switch (selectType) {
                              case 'react-select':
                                handleChangeTime(close, event.value);
                                break;

                              case 'native':
                                handleChangeTime(close, event.target.value);
                                break;

                              default:
                                console.log('Unknown select type');
                            }
                          },
                        })
                      ) : (
                        <select
                          key={`${close.id}-select`}
                          value={close.time}
                          onChange={(event: any) => {
                            handleChangeTime(close, event.target.value);
                          }}
                          style={selectElementStyles}
                          className={selectElementClassName}
                        >
                          {timeOptions.map((t) => (
                            <option
                              key={t.value}
                              value={t.value}
                              disabled={shouldDisableTimeOption(t, close, arr)}
                            >
                              {t.label}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    {showCopyToAll &&
                    arr
                      .filter((x, i, r) => shouldRenderInput(x, r))
                      .sort((a, b) => a.seq - b.seq)[1]?.id === close.id ? (
                      <div
                        key={`${close.id}-${i}-div-copy`}
                        style={
                          copyButtonContainerStyles ?? {
                            position: 'absolute',
                            right: -60,
                            top: 0,
                          }
                        }
                        className={copyButtonContainerClassName}
                      >
                        <div>
                          {typeof renderCopyButton === 'function' ? (
                            renderCopyButton({ onClick: () => copyAll(day) })
                          ) : (
                            <button
                              key={`${close.id}-${i}-button`}
                              type="button"
                              onClick={() => copyAll(day)}
                              className={copyButtonElementClassName}
                              style={copyButtonElementStyles}
                            >
                              Copy
                            </button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default OpeningHoursUnstyled;
