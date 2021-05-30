import React from 'react'
import './calculator.css'

import Display from './../Display/Display.js'
import Clear from './../Clear/Clear.js'
import Actions from './../Actions/Actions.js'
import Digits from './../Digits/Digits.js'


function Calculator() {
    return (
        <div id="calc">
            <div className="display-c"><Display /></div>
            <div className="clear-c">
                <Clear />
                <div className="digits-c"><Digits /></div>
            </div>
            <div className="action-c"><Actions /></div>
            

        </div>
    )
}

export default Calculator
