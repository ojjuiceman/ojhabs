import React, {useState} from 'react';
import { Rating } from '@mui/material';

const NewStarating = () => {
    const [value,setValue] = useState(0);
    change
    return (
      
        <Rating 
                name="simp"
                value = {value}
                size = 'small'
                onChange={(event, newValue) => {
                    setValue(newValue);
                }
                }
                 />
               
    );
}