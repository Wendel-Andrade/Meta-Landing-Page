import {HiArrowSmUp} from 'react-icons/hi'
import * as S from './styles'

const CardActivity = () => ( 
<S.Container>
   <small>Activity</small>
   <div>
    <span>18</span>
    <HiArrowSmUp size={25} color={'#fff'} />
   </div>
   <i className='circle1'></i>
   <i className='circle2'></i>
   <i className='circle3'></i>
</S.Container> );


export default CardActivity;