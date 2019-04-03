import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from '../components/head'
import { bleu, darkBleu } from "../styles/colors";

const Content = styled.div`
    padding: 4rem 14rem;
    p{
        color: black;
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 2.8rem;
    }
    @media (max-width: 35em) {
		padding: 4rem 2rem;
    }
`;

const StyledH1 = styled.h1`
    margin: 0;
    font-size: 4rem;
    font-weight: 500;
`;

const Section = styled.div`
    margin-top: 4rem;
    p{
        margin-top: 0;
    }
    span{
        color: ${bleu};
        :hover{
            color: ${darkBleu};
            cursor: pointer;
        }
    }
`;

const StyledH2 = styled.h2`
    margin: 0;
    margin-top: 4rem;
    font-size: 2.4rem;
    font-weight: 400;
`;

const TermsOfUse = () => (
  <Layout>
    <SEO title="Resources" />
    <Head background={require("../images/terms-of-use-bg.jpg")}
        title='Terms of Use'/>
    <Content> 
        <StyledH1> Agreement between User and www.tetrate.io </StyledH1>
        <p> Welcome to www.tetrate.io. The www.tetrate.io website (the “Site”) is comprised of various web pages operated by Tetrate.io, Inc (“Tetrate”). www.tetrate.io is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the “Terms”). Your use of www.tetrate.io constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.</p>
        <p> www.tetrate.io is a Software Product and Services Site.</p>
        <p> Tetrate is an enterprise service mesh company helping customers in smooth transition to microservices and cloud via their tools, products and services. </p>
        <Section>
            <StyledH2> Electronic Communications </StyledH2>
            <p> Visiting www.tetrate.io or sending emails to Tetrate constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing. </p>
        </Section>
        <Section>
            <StyledH2>Children Under Thirteen</StyledH2>
            <p> Tetrate does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use www.tetrate.io only with permission of a parent or guardian. </p>
        </Section>
        <Section>
            <StyledH2>Links to Third Party Sites/Third Party Services</StyledH2>
            <p> www.tetrate.io may contain links to other websites (“Linked Sites”). The Linked Sites are not under the control of Tetrate and Tetrate is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Tetrate is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Tetrate of the site or any association with its operators. </p>
            <p> Certain services made available via www.tetrate.io are delivered by third party sites and organizations. By using any product, service or functionality originating from the www.tetrate.io domain, you hereby acknowledge and consent that Tetrate may share such information and data with any third party with whom Tetrate has a contractual relationship to provide the requested product, service or functionality on behalf of www.tetrate.io users and customers. </p>
        </Section>
        <Section>
            <StyledH2>No Unlawful or Prohibited Use/Intellectual Property</StyledH2>
            <p> You are granted a non-exclusive, non-transferable, revocable license to access and use www.tetrate.io strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Tetrate that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party’s use and enjoyment of the Site.</p>
            <p> You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site.</p>
            <p> All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Tetrate or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto </p>
            <p> You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Tetrate content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of Tetrate and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Tetrate or our licensors except as expressly authorized by these Terms. </p>
        </Section>
        <Section>
            <StyledH2> International Users </StyledH2>
            <p> The Service is controlled, operated and administered by Tetrate from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Tetrate Content accessed through www.tetrate.io in any country or in any manner prohibited by any applicable laws, restrictions or regulations. </p>
        </Section>
        <Section>
            <StyledH2> Indemnification </StyledH2>
            <p> You agree to indemnify, defend and hold harmless Tetrate, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney’s fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Tetrate reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Tetrate in asserting any available defenses.</p>
        </Section>
        <Section>
            <StyledH2> Class Action Waiver </StyledH2>
            <p> Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH’S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Tetrate agree otherwise, the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a representative or class proceeding.</p>
        </Section>
        <Section>
            <StyledH2> Liability Disclaimer </StyledH2>
            <p> THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. TETRATE.IO, INC AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.</p>
            <p> TETRATE.IO, INC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. TETRATE.IO, INC AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. </p>
            <p> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TETRATE.IO, INC AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF TETRATE.IO, INC OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE. </p>
        </Section>
        <Section>
            <StyledH2> Termination/Access Restriction </StyledH2>
            <p> Tetrate reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of California and you hereby consent to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.</p>
            <p> You agree that no joint venture, partnership, employment, or agency relationship exists between you and Tetrate as a result of this agreement or use of the Site. Tetrate’s performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Tetrate’s right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by Tetrate with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.</p>
            <p> Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Tetrate with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Tetrate with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.</p>
        </Section>
        <Section>
            <StyledH2> Changes to Terms </StyledH2>
            <p> Tetrate reserves the right, in its sole discretion, to change the Terms under which www.tetrate.io is offered. The most current version of the Terms will supersede all previous versions. Tetrate encourages you to periodically review the Terms to stay informed of our updates. </p>
        </Section>
        <Section>
            <StyledH2> Contact Us </StyledH2>
            <p> Tetrate welcomes your questions or comments regarding the Terms: 
                <br/> Tetrate.io, Inc
                <br/> 2, Embarcadero Center, 8th Floor
                <br/> San Francisco, California 94111
                <br/> Email Address:  <span> info@tetrate.io </span> 
                <br/> Telephone number: 415-341-7352
                <br/> Effective as of March 01, 2019
            </p>
        </Section>
    </Content>
  </Layout>
)

export default TermsOfUse
