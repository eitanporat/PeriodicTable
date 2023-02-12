import React from 'react'
import {diseaseColors} from './constants'

function Disease({organ, cellType, diseaseName, row, column, diseaseClass, isActive, mouseClicked, isSelected}) {
    return <div className="disease-square" onClick={mouseClicked}
    style={{
        gridRowStart: row,
        gridRowEnd: row,
        gridColumnStart: column,
        gridColumn: column,
        backgroundColor: isActive ? diseaseColors[diseaseClass] : 'white',
        boxShadow: isSelected ? "0px 0px 0px 2px blue":"0px 0px 0px 1px black",
    }}>
            <div className="disease-organ">{organ}</div>
            <div className="disease-cell-type">{cellType}</div>
            <div className="disease-name">{diseaseName}</div>
        </div>
    
}

export default Disease