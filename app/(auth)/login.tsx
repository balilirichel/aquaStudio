import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { AuthLayout } from '../../src/components/auth/AuthLayout';
import { FormField } from '../../src/components/ui/FormField';
import { Text } from '../../src/components/ui/Text';
import { colors } from '../../src/theme/colors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your aquascape studio"
      actionLabel="Log In"
      onAction={() => {}}
      footer={
        <Link href="/signup" asChild>
          <Pressable>
            <Text size={14} color={colors.mutedForeground}>
              Don't have an account? <Text color={colors.primary} weight="semiBold">Sign up</Text>
            </Text>
          </Pressable>
        </Link>
      }
    >
      <FormField
        label="Email"
        placeholder="you@example.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <FormField label="Password" placeholder="••••••••" value={password} onChangeText={setPassword} secureTextEntry />
    </AuthLayout>
  );
}
