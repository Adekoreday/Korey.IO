import React from 'react';
import './index.css';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    if (string) {
      for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
      }
  
      let color = '#';
  
      for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(8)}`.substr(-2);
      }
      return color;
    }
    return 'none';
  }

const Tag = (props) => {
    const {name} = props
    return (
        <div className="tag" style={{ backgroundColor:`${stringToColor(name)}`}}>
            {name}
        </div>
    );
};

export default Tag;