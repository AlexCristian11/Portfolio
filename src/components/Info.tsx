import styled from 'styled-components';

interface InfoProps {
    isOpen: boolean;
    onClose: () => void;
}

const Info: React.FC<InfoProps> = ({ isOpen, onClose }) => {
  return (
    <>
        <InfoContainer isOpen={isOpen}>
            <div className="close-button" onClick={onClose}></div>
        </InfoContainer>
    </>
  )
}

const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1000;

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