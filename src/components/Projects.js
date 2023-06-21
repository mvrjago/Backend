import {Col, Container, Row, Tab} from "react-bootstrap";
import projImg1 from '../assets/img/alfath.jpeg'
import projImg2 from '../assets/img/mario.jpeg'
import projImg3 from '../assets/img/alvaro.jpeg'
import {ProjectCard} from "./ProjectCard";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: 'Alfath Fachrezy', description: 'Frontend Developer', imgUrl: projImg1
        }, {
            title: 'Mario Vicky', description: 'Fullstack Developer', imgUrl: projImg2
        }, {
            title: 'Reyhan Alvaro', description: 'Backend Developer', imgUrl: projImg3
        }, 
        ];

    return (
        <section className={'project'} id={'projects'}>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated  animate__fadeIn" : ""}>
                                    <h2>Our Teams</h2>
                                    <Tab.Container id={"projects-tabs"} defaultActiveKey={"first"}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey={"first"}>
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard key={index}
                                                                         {...project}/>
                                                        )
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey={"second"}>
                                                Lorem Ipsum
                                            </Tab.Pane>
                                            <Tab.Pane eventKey={"third"}>
                                                Lorem Ipsum
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}