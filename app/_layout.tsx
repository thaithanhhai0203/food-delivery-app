import { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const router = useRouter();

  useEffect(() => {

    const checkUserState = async () => {
      // Get state from AsyncStorage or API
      const onboarded = false;
      const loggedIn = false;

      if (!onboarded) {
        router.replace("/onboarding");
      } else if (!loggedIn) {
        router.replace("/login");
      }
    };

    checkUserState();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
