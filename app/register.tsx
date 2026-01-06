import { router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

type Errors = {
  fullName?: string;
  phone?: string;
  email?: string;
};

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const nextErrors: Errors = {};
    if (!fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!phone.trim()) nextErrors.phone = "Phone is required";
    if (!email.trim()) nextErrors.email = "Email is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = () => {
    if (!validate()) return;

    const token = `QR_TEST_${Date.now()}`;

    router.push({
      pathname: "/my-qr" as any,
      params: { token },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Full name</Text>
        <TextInput
          value={fullName}
          onChangeText={(t) => {
            setFullName(t);
            if (errors.fullName) setErrors((e) => ({ ...e, fullName: undefined }));
          }}
          placeholder="Enter your full name"
          style={[styles.input, errors.fullName && styles.inputError]}
        />
        {!!errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={(t) => {
            setPhone(t);
            if (errors.phone) setErrors((e) => ({ ...e, phone: undefined }));
          }}
          placeholder="Enter your phone"
          keyboardType="phone-pad"
          style={[styles.input, errors.phone && styles.inputError]}
        />
        {!!errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(t) => {
            setEmail(t);
            if (errors.email) setErrors((e) => ({ ...e, email: undefined }));
          }}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={[styles.input, errors.email && styles.inputError]}
        />
        {!!errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>

      <Pressable onPress={onSubmit} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 28, fontWeight: "800", marginBottom: 20 },
  field: { marginBottom: 14 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  inputError: { borderColor: "#ef4444" },
  errorText: { color: "#ef4444", marginTop: 6, fontSize: 13 },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#111827",
    alignItems: "center",
  },
  buttonPressed: { opacity: 0.85 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "700" },
});
