import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './index.css';

const BorderLinearProgress = withStyles({
    root: {
      height: 5,
      backgroundColor: '#000000',
    },
    bar: {
      borderRadius: 2,
      backgroundColor: '#FFFFFF',
    },
  })(LinearProgress);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(0),
      width: '100%',
    },
  }));

const Range = (props) => {
    const {pending, proficiency } = props;
    const classes = useStyles();
    return (
        <div className='range'>
        <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={proficiency}
      />
        </div>
    );
};

export default Range;