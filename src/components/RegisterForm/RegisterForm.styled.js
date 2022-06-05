import styled from '@emotion/styled';
import backgroundImage from '../../images/mobile/registerBackground.jpg';

const breakpoints = [480, 768, 1280];

export const StyledForm = styled.form`
  background: rgba(9, 30, 63, 0.8);
  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${backgroundImage});
  background-size: cover;

  padding: 32px 0 44px;

  @media screen and (min-width: ${breakpoints[1]}px) and (max-width: ${breakpoints[2]}px) {
    padding: 64px 0;
  }

  ul {
    max-width: 400px;
    margin: 0px auto;
    padding: 0 20px;

    @media screen and (min-width: 480px) and (max-width: ${breakpoints[2]}px) {
      padding: 40px;
    }

    @media screen and (min-width: ${breakpoints[1]}px) and (max-width: ${breakpoints[2]}px) {
      background-color: #ffffff;
      // height: 609px;
    }

    label {
      display: inline-block;
      margin-bottom: 8px;
      // float: left;
    }

    .form__label {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.21;

      text-align: left;

      color: #ffffff;

      @media screen and (min-width: ${breakpoints[1]}px) and (max-width: ${breakpoints[2]}px) {
        color: #898f9f;
      }

      span {
        color: #f25137;
      }
    }

    input {
      // display: block;
      border: none;
      background-image: none;
      background-color: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;

      margin: 0 auto 20px;

      background-color: #f5f7fa;
      box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

      width: 100%;
      // min-width: 280px;
      // max-width: 320px;
      // width: 280px;
      height: 42px;

      @media screen and (min-width: ${breakpoints[0]}px) and (max-width: ${breakpoints[2]}px) {
        width: 320px;
      }
    }
  }

  p {
    // display: inline-block;
    margin: 20px auto 0;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.23;
    /* identical to box height */

    color: #898f9f;
    text-align: center;

    a {
      color: #ff6b08;
    }
  }
`;
