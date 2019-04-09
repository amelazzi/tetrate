import React, { Component } from 'react'
import styled from 'styled-components'
import { bleu, gray, darkBleu } from '../../styles/colors'

import Card from './card'
import SelectBox from '../../components/contact/selectOption'
import Event from '../../components/home/events'

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
    margin-right: 1rem;
    img{
        width: 100%;
        height: auto;
        object-fit: contain;
    }
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

/*----------------------------- Variables -------------------------*/
var paperPic = require("../../images/home/resources-paper-and-guides-graphic.jpg")
var paperType = "PAPERS & GUIDES"
const PapersGuides = [
    {title:"Introducing getEnvoy",
        content: "Tetrate provides certified, tested builds of Envoy proxy" },
    {title:"Case Study: NAV’s Istio Deployment with Tetrate",
        content: "See how Tetrate helps the Norwegian Labour and Welfare Administration (NAV) operationalize Istio." },
    {title:"Istio on EKS",
        content: "Learn how Istio can be installed in a Kubernetes cluster running on AWS using Amazon EKS, and steps to make your applications more resilient." },
    {title:"SkyWalking v6 is Service Mesh ready",
        content: "See the new features in SkyWalking v6, including Istio telemetry data." },
]
const PaperGuide = PapersGuides.map((pg) =>
    <Card key={pg.title}
        picture={paperPic} type={paperType} title={pg.title} content={pg.content}/>
);

var talksPic = require("../../images/home/resources-videos.jpg")
var talksType = "TALKS & VIDEOS"
const TalksVideos = [
    {title:"An Overview of Istio Mesh",
        content: "Istio: Weaving the Service Mesh. By Shriram Rajagopalan & Louis Ryan" },
    {title:"Debugging Istio Networking",
        content: "Liam White explains how to debug Istio to test reliability and functions of Istio components." },
    {title:"Connecting, Managing, Observing, and Securing Services",
        content: "Zack Butcher talks about how a service mesh helps with the transition from monoliths to microservices to empower the organization." },
    {title:"GitOps for Istio",
        content: "Learn how to manage Istio config like managing code. Varun Talwar's Kubecon Europe 2018 talk." },
    {title:"Latency Analysis with Istio & OpenCensus",
        content: "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus." },
    {title:"Istio – The Packet’s-Eye View",
        content: "A practical introduction to the operation of Istio and how it can impact your environment. Kubecon Seattle 2018 talk." },
]
const TalkVideo = TalksVideos.map((tv) =>
    <Card key={tv.title}
        picture={talksPic} type={talksType} title={tv.title} content={tv.content}/>
);


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
                        <IconContainer>
                            <img src={require("../../images/resources/papers-guides.png")} alt="icon" />
                        </IconContainer>
                        Papers & Guides </button>
                    <button onClick={() => this.setState({ activeTab: 3 })}> 
                        <IconContainer>
                            <img src={require("../../images/resources/youtube.png")} alt="icon" />
                        </IconContainer>
                        Talks & Videos</button>
                    <button onClick={() => this.setState({ activeTab: 4 })}> 
                        <IconContainer>
                            <img src={require("../../images/resources/event.png")} alt="icon" />
                        </IconContainer>
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
                            {PaperGuide}
                            {TalkVideo}
                        </TabsContent>) : this.state.activeTab === 2?
                        (<TabsContent>
                            {PaperGuide}
                        </TabsContent>):this.state.activeTab === 3?
                        ( <TabsContent>
                            {TalkVideo}
                        </TabsContent>):
                        (<TabsContent>
                            <Event/>
                        </TabsContent>
                        )}
                </div>
            </>
        );
    }
}
export default Tabs;
