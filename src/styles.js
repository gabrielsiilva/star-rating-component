import styled from 'styled-components'

export const EmojiWrapper = styled.div`
  overflow: hidden;
  top: 0;
  height: 100px;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  & > img {
    margin-bottom: 10px;
    filter: grayscale(${props => props.sleeping ? 1 : 0});
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;
    transform: translateY(${props => {
      let rating = '0'.padStart(3, props.rating - 1);
      return `-${rating}px`
    }})
  }
`;