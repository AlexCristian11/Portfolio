import { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface InfoProps {
    isOpen: boolean;
    onClose: () => void;
}

const slideDown = keyframes`
 from {
    transform: translateY(-100%);
 }
 to {
    transform: translateY(0);
 }
`;

const slideUp = keyframes`
 from {
    transform: translateY(0);
 }
 to {
    transform: translateY(-100%);
 }
`;


const Info: React.FC<InfoProps> = ({ isOpen, onClose }) => {

    useEffect(() => {
        console.log('isOpen:', isOpen);
       }, [isOpen]);

  return (
    <>
        <InfoContainer isOpen={isOpen}>
            <div>
                <h1>Info</h1>
            </div>
            <div className="close-button" onClick={onClose}></div>
        </InfoContainer>
    </>
  )
}

const InfoContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${props => (props.isOpen ? css`${slideDown} 0.7s forwards` : css`${slideUp} 0.7s forwards`)};
    animation-fill-mode: forwards;

    .close-button {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .close-button:before,
    .close-button:after {
        content: "";
        position: absolute;
        height: 30px;
        width: 2px;
        background-color: #fff;
    }

    .close-button:before {
        transform: rotate(45deg);
    }

    .close-button:after {
        transform: rotate(-45deg);
    }
`;

export default Info;