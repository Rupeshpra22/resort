import styled from 'styled-components'
import defaultImg from '../../images/room-1.jpeg'

const StyledHero = styled.header`
    background: url(${props=>props.img ? props.img : defaultImg})  center/cover no-repeat;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default StyledHero