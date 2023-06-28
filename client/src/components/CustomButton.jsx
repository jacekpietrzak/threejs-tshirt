import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color), // we will make it dynamic based on our state file from store
      };
    } else if (type === 'outline') {
      return {
        backgroundColor: '#ffffff4f',
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      //   we will have two button types so we make it dynamic
      style={generateStyle(type)}
      onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomButton;
