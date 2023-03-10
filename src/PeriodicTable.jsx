import React from "react";
import diseases from "./data/diseases.json";
import Disease from "./Disease";
import DiseaseClass from "./DiseaseClass";
import { diseaseClasses } from "./constants";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function PeriodicTable() {
  const [diseaseState, setDiseaseState] = useState(
    diseases.map(({ diseaseClass }) => {
      return { diseaseClass, isActive: true, isSelected: false };
    })
  );

  const [selectedIndex, setSelectedIndex] = useState(0);


  const diseaseComponents = diseases.map(
    ({ organ, cellType, diseaseName, row, column, diseaseClass }, index) => {

    function mouseClicked() {
        setDiseaseState(
            diseaseState.map((item, i) => {
                return i == index ? {...item, isSelected: !item.isSelected} : {...item, isSelected: false};
            })
        );

        setSelectedIndex(index);
    }
    
      return (
        <Disease
          key={diseaseName}
          organ={organ}
          cellType={cellType}
          diseaseName={diseaseName}
          row={row}
          column={column}
          diseaseClass={diseaseClass}
          isActive={diseaseState[index].isActive}
          isSelected={diseaseState[index].isSelected}
          mouseClicked={mouseClicked}
          scale={1}
        />
      );
    }
  );

  const diseaseClassComponents = diseaseClasses.map(
    ({ disease, color, row, column }, index) => {
      function mouseHover() {
        setDiseaseState(
          diseaseState.map((item) => {
            if (item.diseaseClass !== disease) {
              return { ...item, isActive: false };
            }
            return { ...item, isActive: true };
          })
        );
      }

      function mouseOut() {
        setDiseaseState(
          diseaseState.map((item) => {
            return { ...item, isActive: true };
          })
        );
      }

      return (
        <DiseaseClass
          key={disease}
          diseaseClass={disease}
          color={color}
          row={row}
          column={column}
          mouseHover={mouseHover}
          mouseOut={mouseOut}
        />
      );
    }
  );

  const {diseaseName, organ, cellType, diseaseClass, row, column} = diseases[selectedIndex];

  return (
    // Flexbox container
    <Container fluid>
        <Row>
        <Col xs={3}>
          <div className="selected-disease">
            <Disease
            key={diseaseName}
            organ={organ}
            cellType={cellType}
            diseaseName={diseaseName}
            row={row}
            column={column}
            diseaseClass={diseaseClass}
            isActive={true}
            isSelected={false}
            scale={2}
            />
        
        </div>
        </Col>
        <Col sm="auto">
        <Container className="periodic-table-container">
            <Row>
            <Col>
                <div className="disease-class-container">{diseaseClassComponents}</div>
            </Col>
            </Row>
            <Row>
                <Col>
                    <div className="periodic-table">{diseaseComponents}</div>
                </Col>
            </Row>
        </Container>
        </Col>
        </Row>

    </Container> 
    );
}

export default PeriodicTable;
