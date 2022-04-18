import ButtonContact from '../../atoms/Button/ButtonContact';

import * as S from  './styles'

const ProductInformation = () => {
    return (
        <S.Container>
        <h1>The future and technology changing the world!</h1>
         <h6>
          We are a company in redesign with the proposal to change your life
         </h6>
         <ButtonContact />
      </S.Container>
    );
}

export default ProductInformation;