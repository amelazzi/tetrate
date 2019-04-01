import React, { Component } from 'react'
import styled from 'styled-components'
import { bleu } from '../../styles/colors'


const TabsBtn = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 4rem;

    button{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        margin: 0;
        border: none;
        background: none;
        border-right: 1px solid ${bleu};
        color: ${bleu};
        :last-child{
            border: none;
            padding-right: 0;
        }
        padding: 0rem 2rem;
        font-size: 1.6rem;
        font-weight: 200;
        :hover{
            color: white;
            cursor: pointer;
        }
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
                        Apache Skywalking</button>
                    <button onClick={() => this.setState({ activeTab: 2 })}> 
                        GetEnvoy </button>
                    <button onClick={() => this.setState({ activeTab: 3 })}> 
                        Tetrate Istio Cloud Map Operator</button>
                </TabsBtn>
                <div>
                    {this.state.activeTab === 1 ? (
                        <>
                            <h1> tab 1 </h1>
                        </>) : this.state.activeTab === 2?
                        (<>
                            <h1> tab 2 </h1>
                        </>):
                        ( <>
                            <h1> tab 3 </h1>
                        </>)}
                </div>
            </>
        );
    }
}
export default Tabs;
