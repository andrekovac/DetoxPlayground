import { Animated } from 'react-native';
import styled from 'styled-components/native';

const Text = styled(Animated.Text)<{ size?: number; fontWeight?: number }>`
  font-size: ${props => (props.size ? `${props.size}px` : '30px')};
  font-weight: 100;
  text-align: center;
  color: black;
`;

export default Text;
