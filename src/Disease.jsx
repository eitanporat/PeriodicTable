import React from 'react'
import {diseaseColors} from './constants'

function Disease({organ, cellType, diseaseName, row, column, diseaseClass, isActive, mouseClicked, isSelected}) {
    console.log(isSelected);

    return <div className="disease-square" onClick={mouseClicked}
    style={{
        gridRowStart: row,
        gridRowEnd: row,
        gridColumnStart: column,
        gridColumn: column,
        backgroundColor: isActive ? diseaseColors[diseaseClass] : 'white',
        outline: isSelected ? 'blue solid .5vmin' : 'none',
        outlineRadius: '1vmin'
    }}>
            <div className="disease-organ">{organ}</div>
            <div className="disease-cell-type">{cellType}</div>
            <div className="disease-name">{diseaseName}</div>
        </div>
    
}

export default Disease