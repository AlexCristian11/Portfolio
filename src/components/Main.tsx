import { useState } from 'react';
import styled from 'styled-components';
import Info from './Info';

function Main() {

    const [activeContent, setActiveContent] = useState<string | null>(null);

    const openContent = (content: string) => setActiveContent(content);
    const closeContent = () => setActiveContent(null);

  return (
    <>
        <MainComponent>
            <h1>Alexandru-Cristian Popescu</h1>
            <p>Software Engineer</p>
            <ul id="list">
                <li onClick={() => openContent('about')}>About</li>
                <li onClick={() => openContent('projects')}>Projects</li>
                <li onClick={() => openContent('skills')}>Skills</li>
                <li onClick={() => openContent('contact')}>Contact</li>
            </ul>
            {activeContent === 'about' && (
                <InfoContainer>
                    <Info isOpen={true} onClose={closeContent}/>
                </InfoContainer>
            )}
        </MainComponent>
    </>
  )
}

const MainComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 2.75rem;
        margin-top: 1rem;
    }

    p {
        font-size: 1.25rem;
        font-weight: 500;
        font-style: italic;
        margin-top: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }

    li {
        font-size: 2rem;
        margin-top: .75rem;
    }

    #list {
        list-style-type: none;
    }
`;

const InfoContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export default Main;