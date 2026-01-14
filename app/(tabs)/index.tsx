import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import MyQR from "../myqr";
import Register from "../register";

const TOKEN_KEY = "qrToken";

export default function HomeScreen() {
  const [token, setToken] = useState<string | null>(null);
  const [isHydrating, setIsHydrating] = useState(true);

  // ✅ On first render: read stored token
  useEffect(() => {
    (async () => {
      try {
        const stored = await SecureStore.getItemAsync(TOKEN_KEY);
        if (stored) setToken(stored);
      } finally {
        setIsHydrating(false);
      }
    })();
  }, []);

  // Optional: show something while loading storage
  if (isHydrating) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // ✅ Shortcut logic: token exists -> MyQR
  if (token) {
    return (
      <MyQR
        token={token}
        onStartOver={async () => {
          // ✅ remove from storage + clear state
          await SecureStore.deleteItemAsync(TOKEN_KEY);
          setToken(null);
        }}
      />
    );
  }

  // ✅ On successful registration: store token securely + set state
  return (
    <Register
      onRegister={async (newToken) => {
        await SecureStore.setItemAsync(TOKEN_KEY, newToken);
        setToken(newToken);
      }}
    />
  );
}