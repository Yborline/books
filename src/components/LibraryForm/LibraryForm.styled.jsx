import styled from '@emotion/styled';


export const  Container = styled.div`
display:flex;
  flex-direction: column;
    justify-content: center;
    margin-top: 32px;
    @media screen and (min-width: 1280px) {
         margin-top: 40px;
    }`;

export const Form = styled.form`
        display: flex;
    flex-direction: row;
  justify-content: center;
    @media screen and (min-width: 768px) {

}`;

export const BasicDiv = styled.div`
display:flex;
justify-content:center;
`


export const Input = styled.input`

    display: flex;
    flex-direction: column;
    box-sizing:border-box;
    height: 42px;
    border: 1px solid #A6ABB9;
    padding: 12px 12px 13px 12px ;
    margin-top:8px;
    margin-bottom: 20px;
    background-color: #F6F7FB;
    min-width: 280px;
                                :list-child{
                         margin-left:32px;
};



        @media screen and (min-width: 768px) {
            min-width: 152px;


        margin-bottom: 24px;
         width: ${props => {
    switch (props.name) {
        case "title":
            return "704px";
        case "author":
            return "336px";
        case "date":
            return "152px";
        case "pages":
            return "152px"
        default:
            break;
    }
}};      }
 @media screen and (min-width: 1280px) {
             min-width: 134px;


      width: ${props => {
    switch (props.name) {
        case "title":
            return "346px";
        case "author":
            return "250px";
        case "date":
            return "134px";
        case "pages":
            return "134px"
        default:
            break;
    }
}};
}
    &:focus{
        background-color: #FFFFFF;
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
       outline:none;
    }`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;

     @media screen and (min-width: 1280px) {
  display: flex;
    flex-direction: row;
    
}`

export const LabelOne = styled.label`
 @media screen and (min-width: 1280px) {
             margin-right:16px ;
 }
      color: #898F9F;
      `
      
export const LabelTwo = styled.label`
            color: #898F9F;
        @media screen and (min-width: 768px) {
    :nth-of-type(1){
    margin-left:32px;
}
    :nth-of-type(2) {
    margin-left:32px;
}
}
 @media screen and (min-width: 1280px) {
       :nth-of-type(1) {
    margin-left:0px;
}:nth-of-type(2) {
    margin-left:16px;
}

      `


export const OtherInput = styled.div`
    @media screen and (min-width: 768px) {
        
        display: flex;
flex-direction: row;
}`


export const NumberDiv = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        
}`
export const ButtonDiv = styled.div`
  
        display: flex;
        justify-content:center;
          @media screen and (min-width: 1280px) {
              margin-top:2px;
              margin-left:34px;
              align-items: center;
          }`