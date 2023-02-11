import React from 'react'

function DiseaseClass({diseaseClass, color, row, column, mouseHover, mouseOut}) {
    return <div className="disease-class-rectangle" style={{
        gridRowStart: row,
        gridRowEnd: row,
        gridColumnStart: column,
        gridColumn: column,
    }} onMouseOver={mouseHover} onMouseOut={mouseOut}>
        <div className="disease-class-color" style={{
        backgroundColor: color
    }}></div>
        <span className="disease-class-text">{diseaseClass}</span>
    </div>
}

export default DiseaseClass