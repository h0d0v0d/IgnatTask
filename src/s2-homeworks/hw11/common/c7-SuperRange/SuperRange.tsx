import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            onChange={props.onChange}
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: '#00CC22',
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
