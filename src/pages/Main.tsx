import ButtonContact from '../atoms/Button/ButtonContact';
import Frontend from '../templates/Frontend';
import * as S from './styles';
import Meta from '../assets/meta-main-page.png'
import CardActivity from '../molecules/Logo/CardActivity';


function Main() {
  return (
  <Frontend>

    <S.Container>
      
     <div>
       <h1>The future and technology changing the world!</h1>
        <h6>
         We are a company in redesign with the proposal to change your life
        </h6>
        <ButtonContact />
     </div>


     <S.ColumnImage>

      <CardActivity/>
      
        <img src={Meta} alt="Logo da marca Meta, se parece com um o símbolo do infinito" />

     </S.ColumnImage>

    </S.Container>

  </Frontend>
  );
}

export default Main;
