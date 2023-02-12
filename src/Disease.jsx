import React from 'react'
import {diseaseColors} from './constants'

function Disease({organ, cellType, diseaseName, row, column, diseaseClass, isActive, mouseClicked, isSelected, scale}) {
    return <div className="disease-square" onClick={mouseClicked}
    style={{
        gridRowStart: row,
        gridRowEnd: row,
        gridColumnStart: column,
        gridColumn: column,
        borderRadius: scale == 1 ? "0.8vmax": "1.2vmax",
        width: scale == 1 ? "10vmin" : "15vmin",
        height: scale == 1 ? "10vmin" : "15vmin",
        backgroundColor: isActive ? diseaseColors[diseaseClass] : 'white',
        boxShadow: isSelected ? "0px 0px 0px 2px blue":"0px 0px 0px 1px black",
    }}>
            <div className="disease-organ" style={{
                fontSize: scale == 1 ? "1.4vmin" : "2.1vmin"
            }}>{organ}</div>
            <div className="disease-cell-type" style={{
                fontSize: scale == 1 ? "1.2vmin" : "1.8vmin"
            }}>{cellType}</div>
            <div className="disease-name" style={{
                fontSize: scale == 1 ? "1.2vmin" : "1.8vmin"
            }}>{diseaseName}</div>
        </div>
    
}

export default Disease