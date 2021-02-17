import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    { title: 'Title1', duration: '4:05' },
    { title: 'Title2', duration: '2:30' },
    { title: 'Title3', duration: '3:27' },
    { title: 'Title4', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});