import React, { Component } from 'react'
import styled from 'styled-components'
import { bleu, gray, darkBleu } from '../../styles/colors'

import Card from './card'
import SelectBox from '../../components/contact/selectOption'

const StyledSelectBox = styled.div`
    display: none;
    @media (min-width: 32em) and (max-width: 48em) {
      display: block;
      margin: 2rem;
      margin-top: 4rem;
    }
`;


const TabsBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (min-width: 32em) and (max-width: 48em) {
      display: none;
    }

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
    flex-wrap: wrap;
    padding: 3rem;

    @media (min-width: 48.1em) and (max-width: 76.7em) {
      margin-top: -4rem;
    }

    @media (min-width: 32em) and  (max-width: 48em) {
      padding: 2rem 1rem;
      padding-top: 1rem;
      margin-top: -23rem;
    }
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
                <StyledSelectBox>
                    <SelectBox
                        items={[
                            { value: 'See All', id: 1 },
                            { value: 'Papers & Guides', id: 2 },
                            { value: 'Talks & Videos', id: 3 },
                            { value: 'Events', id: 4 }
                        ]}
                    />
                </StyledSelectBox>
                
                <div>
                    {this.state.activeTab === 1 ? (
                        <TabsContent>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                        </TabsContent>) : this.state.activeTab === 2?
                        (<TabsContent>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                            <Card picture={require("../../images/home/graphic-resources-events-servicemeshday.jpg")}
                                type="EVENTS"
                                title="Service Mesh Day Conference"
                                content="Join the first ever industry conference on Service Mesh Technology"/>
                        </TabsContent>):this.state.activeTab === 3?
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
