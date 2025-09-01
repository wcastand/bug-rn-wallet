import { checkWalletAvailability } from "@expensify/react-native-wallet";
import { StripeProvider } from "@stripe/stripe-react-native";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    checkWalletAvailability().then((isAvailable) => {
      console.log("Wallet is available:", isAvailable);
    }).catch((error) => {
      console.error("Error checking wallet availability:", error);
    });
  },[])
  return (
    <StripeProvider
      publishableKey={"your-publishable-key"}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
      {/* Your app code here */}
    </StripeProvider>
  );
}
