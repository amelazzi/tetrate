import React, { Component } from 'react'
import styled from 'styled-components'
import { bleu, gray, darkBleu } from '../../styles/colors'

import Card from './card'

const TabsBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 4rem 0rem;

    button{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        margin: 0;
        border: none;
        background: none;
        border-right: 1px solid ${bleu};
        :last-child{
            border: none;
        }
        padding: 1rem 4.5rem;
        font-size: 2rem;
        font-weight: 200;
        :hover{
            background: ${gray};
            color: ${darkBleu};
            cursor: pointer;
        }
    }
`;

const IconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
`;

const TabsContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    padding: 3rem;
`;

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabs: []
        };
        this.state.activeTab=1
    }
    render() {
        return (
            <>
                <TabsBtn>
                    <button onClick={() => this.setState({ activeTab: 1 })}> 
                        See All</button>
                    <button onClick={() => this.setState({ activeTab: 2 })}> 
                        <IconContainer></IconContainer>
                        Papers & Guides </button>
                    <button onClick={() => this.setState({ activeTab: 3 })}> 
                        <IconContainer></IconContainer>
                        Talks & Videos</button>
                    <button onClick={() => this.setState({ activeTab: 4 })}> 
                        <IconContainer></IconContainer>
                        Events </button>
                </TabsBtn>
                <div>
                    {this.state.activeTab == 1 ? (
                        <TabsContent>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                        </TabsContent>) : this.state.activeTab == 2?
                        (<TabsContent>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                        </TabsContent>):this.state.activeTab == 3?
                        ( <TabsContent>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                        </TabsContent>):
                        (<TabsContent>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                        </TabsContent>
                        )}
                </div>
            </>
        );
    }
}
export default Tabs;
