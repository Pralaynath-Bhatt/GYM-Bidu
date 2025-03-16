import React from 'react'
import HomeCard from "./HomeCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fatloss_img from "./image/Fatloss.jpg";
import Recomp_img from "./image/Recomp.jpg";
import Weight_gain_img from "./image/weight_gain.jpg";
import Cardio_img from "./image/Cardio.jpg"
const plans = [{title:"Weight-loss",discription:"",image:Fatloss_img},
  {title:"Weight-gain",discription:"",image:Weight_gain_img},
  {title:"Recomposition",discription:"",image:Recomp_img},
  {title:"Cardio",discription:"",image:Cardio_img}
]
export default function Home() {
  return (
    <div>
      <h1>Welcome to a complete ditness tracker</h1>
      <p>Here we have designed plans for you to get your fitness goals</p>
      <Container>
      <Row>
        <Col><HomeCard title={plans[0].title} text={plans[0].discription} img={plans[0].image}/></Col>
        <Col><HomeCard title={plans[1].title} text={plans[1].discription} img={plans[1].image}/></Col>
      </Row>
      <Row>
        <Col><HomeCard title={plans[2].title} text={plans[2].discription} img={plans[2].image}/></Col>
        <Col><HomeCard title={plans[3].title} text={plans[3].discription} img={plans[3].image}/></Col>
      </Row>
    </Container>
    </div>
  )
}
