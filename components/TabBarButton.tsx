import { icons } from '@/components/constants/icon';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/commonjs/src/types';
import { colors } from '@/components/constants/color';

interface IProps {
    onPress: () => void;
    onLongPress: () => void;
    isFocused: boolean;
    routeName: string;
    color: string;
    label: string | ((props: {
        focused: boolean;
        color: string;
        position: LabelPosition;
        children: string;
    }) => React.ReactNode);
    options: BottomTabNavigationOptions;
    routeParams?: Readonly<object | undefined>
}

const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, color, label, routeParams, options }: IProps) => {
    const { buildHref } = useLinkBuilder();
    const scale = useSharedValue(0);

    useEffect(() => {
        const toValue = typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused;
        scale.value = withSpring(Number(toValue), { duration: 350 })
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
        const top = interpolate(scale.value, [0, 1], [0, 9])
        return {
            transform: [
                { scale: scaleValue }
            ],
            top
        }
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return {
            opacity: opacity
        }
    });

    return (
        <PlatformPressable
            key={routeName}
            href={buildHref(routeName, routeParams)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
        >
            <Animated.View style={animatedIconStyle}>
                {icons[routeName]?.({
                    color: color
                })}
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? colors.primary.hover : colors.neutral[80] }, animatedTextStyle]}>
                {typeof label === 'function' ? label({ focused: isFocused, color, position: 'below-icon', children: '' }) : label}
            </Animated.Text>
        </PlatformPressable>
    );
}

export default TabBarButton;

const styles = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3
    }
});
