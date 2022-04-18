import * as S from './styles'
import CardActivity from '../../molecules/Logo/CardActivity';
import Meta from '../../assets/meta-main-page.png'
const ProductStats = () => {
    return (
        <S.Container>

        <CardActivity/>
        
          <img src={Meta} alt="Logo da marca Meta, se parece com um o símbolo do infinito" />
  
       </S.Container>
  
    );
}

export default ProductStats;