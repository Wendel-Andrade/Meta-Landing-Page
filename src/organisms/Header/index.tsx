import * as S from './style';
import Logo from '../../molecules/Logo';
import Button from '../../atoms/Button';
import Menu from '../../organisms/Header/Menu';


const Header = () => {
    return (
        <S.Box>
            <Logo />
            <Menu />
            <Button />
        </S.Box>
    );
}

export default Header;