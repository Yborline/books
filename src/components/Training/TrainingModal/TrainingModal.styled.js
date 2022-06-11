import styled from '@emotion/styled';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  height: 100vh;
  padding-right: 25px;
  padding-left: 25px;
  background-color: #f6f7fb;
  z-index: 20;
`;

export const ModalWrapper = styled.div`
  padding: 25px 0;
`;

export const GoBack = styled(HiOutlineArrowNarrowLeft)`
  margin-bottom: 25px;
  color: #ff6b08;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
