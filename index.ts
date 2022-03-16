import calcWeather from './functions/calcWeatherSingle';

// INTERNAL STATE
let GLOBAL_STATE_CURRENT_WATCH = 0;
let GLOBAL_STATE_CURRENT_DAY = 1;
let GLOBAL_STATE_CURRENT_MONTH = 0;

// UI STATE
let GLOBAL_STATE_CURRENT_WEATHER = '';
let GLOBAL_STATE_CURRENT_DATE = '';

const updateInternalState = () => {
  if (GLOBAL_STATE_CURRENT_WATCH < 5) {
    GLOBAL_STATE_CURRENT_WATCH += 1;
  } else {
    GLOBAL_STATE_CURRENT_WATCH = 0;
  }

  if (GLOBAL_STATE_CURRENT_DAY < 31) {
    GLOBAL_STATE_CURRENT_DAY += 1;
  } else {
    GLOBAL_STATE_CURRENT_DAY = 0;
  }

  if (GLOBAL_STATE_CURRENT_MONTH < 11) {
    GLOBAL_STATE_CURRENT_MONTH += 1;
  } else {
    GLOBAL_STATE_CURRENT_MONTH = 0;
  }
};

const generateCurrentWeather = async () => {
  const { date, weather } = await calcWeather(GLOBAL_STATE_CURRENT_WATCH, GLOBAL_STATE_CURRENT_DAY, GLOBAL_STATE_CURRENT_MONTH);
  GLOBAL_STATE_CURRENT_DATE = date;
  GLOBAL_STATE_CURRENT_WEATHER = weather;
};

const nextTick = () => {
  generateCurrentWeather();
  updateInternalState();
  console.log(GLOBAL_STATE_CURRENT_DATE);
  console.log(GLOBAL_STATE_CURRENT_WEATHER);
};

nextTick();