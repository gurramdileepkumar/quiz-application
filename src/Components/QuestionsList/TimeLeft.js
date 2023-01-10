import React from 'react'
import Card from '../UI/Card'
import classes from './TimeLeft.module.css';

const TimeLeft = (props) => {
    const count=props.totalQ.length
  return (
   <Card className={classes.controls}>
        <div className={classes.content}>
            <div className={classes.left}>
                <p>Total Q:{count}</p>
            </div>
            <div className={classes.right}>
               TimeLeft: 30 Sec
            </div>
        </div>
   </Card>
  )
}

export default TimeLeft
