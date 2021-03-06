import React, { useEffect, useRef, FunctionComponent } from 'react';
import { Animated, Easing } from 'react-native';

import Text from '../components/Text';
import StartButton from '../components/StartButton';
import Wrapper from '../components/Wrapper';

import useFadeOutAnimation from '../hooks/useFadeOutAnimation';

type WelcomeScreenProps = {
  onPress: () => void;
  hasPressedButton: boolean;
};

const WelcomeScreen: FunctionComponent<WelcomeScreenProps> = ({
  onPress,
  hasPressedButton,
}) => {
  const introAnim = useRef(new Animated.Value(0)).current;

  const [opacityStyle, startFadeOutAnimation] = useFadeOutAnimation({
    onUnmountCallback: onPress,
  });

  useEffect(() => {
    const bounceIn = () => {
      Animated.timing(introAnim, {
        toValue: 1,
        duration: 1200,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    };

    bounceIn();
    return () => {
      introAnim.setValue(0);
    };
  }, [hasPressedButton, introAnim]);

  return (
    <Wrapper style={opacityStyle} testID="welcome">
      <Text
        style={{
          transform: [
            {
              scale: introAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 2.5],
              }),
            },
            {
              translateY: introAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-300, 0],
              }),
            },
          ],
        }}>
        LeapYear
      </Text>
      <StartButton text={'Start'} onPress={startFadeOutAnimation} />
    </Wrapper>
  );
};

export default WelcomeScreen;
