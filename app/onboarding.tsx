import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import onboarding1 from "@/assets/images/onboarding/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding/onboarding3.png";
import { color } from "@/components/constants/color";
import { icon } from "@/components/constants/icon";
import React, { useState } from "react";

interface ISlide {
  id: number;
  img: any;
  title: string;
  des: string;
}

const OnBoardingScreen = () => {
  const router = useRouter();
  const [slide, setSide] = useState(0);
  const [isCompleteOnboarding, setCompleteOnboarding] = useState(false);

  const slides: Array<ISlide> = [
    {
      id: 1,
      img: onboarding1,
      title: "We serve incomparable delicacies 1",
      des: "All the best restaurants with their top menu waiting for you, they cant't wait for your order!!",
    },
    {
      id: 2,
      img: onboarding2,
      title: "We serve incomparable delicacies 2",
      des: "All the best restaurants with their top menu waiting for you, they cant't wait for your order!!",
    },
    {
      id: 3,
      img: onboarding3,
      title: "We serve incomparable delicacies 3",
      des: "All the best restaurants with their top menu waiting for you, they cant't wait for your order!!",
    },
  ];

  const handleNext = (slide: number) => {
    if (slide < slides.length - 1) {
      setSide(slide);
    } else {
      setSide(slide);
      setCompleteOnboarding(true);
    }
  };

  const handleSkip = () => {
    setCompleteOnboarding(true);
  };

  const handleCompleteOnboarding = () => {
    // Save Onboarding state
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={slides[slide].img}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.introduce}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{slides[slide].title}</Text>
            <Text style={styles.des}>{slides[slide].des}</Text>

            <View style={styles.dashContainer}>
              {slides.map((item, index) => (
                <View key={index}>
                  {icon.dash({
                    color: index === slide ? "#999" : color.neutral[10],
                    size: 60,
                    marginHorizontal: 5,
                  })}
                </View>
              ))}
            </View>
          </View>

          {!isCompleteOnboarding ? (
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={handleSkip}>
                <Text style={styles.btnText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleNext(slide + 1);
                }}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text style={styles.btnText}>Next</Text>
                {icon.next({ color: color.neutral[10] })}
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={{
                  marginHorizontal: "auto",
                  padding: 10,
                  backgroundColor: color.primary.main,
                  borderColor: color.neutral[10],
                  borderTopWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth: 2,
                  borderRadius: 50,
                }}
                onPress={handleCompleteOnboarding}
              >
                <Text style={styles.btnIcon}>
                  {icon.next({ color: color.primary.main, size: 40 })}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  introduce: {
    width: "90%",
    height: 430,
    marginTop: "85%",
    marginHorizontal: "auto",
    alignItems: "center",
    backgroundColor: color.primary.main,
    paddingVertical: 30,
    borderRadius: 40,
    justifyContent: "space-between",
  },
  textContainer: {
    width: 300,
  },
  title: {
    color: color.neutral[10],
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  des: {
    color: color.neutral[10],
    fontSize: 18,
    textAlign: "center",
  },
  dashContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dash: {
    marginHorizontal: 5,
  },
  btnContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnText: {
    color: color.neutral[10],
    fontSize: 18,
    marginRight: 5,
  },
  btnIcon: {
    width: 80,
    height: 80,
    backgroundColor: color.neutral[10],
    textAlign: "center",
    lineHeight: 80,
    borderRadius: 50,
  },
});
