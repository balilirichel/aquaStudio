import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { AuthLayout } from '../../src/components/auth/AuthLayout';
import { FormField } from '../../src/components/ui/FormField';
import { Text } from '../../src/components/ui/Text';
import { colors } from '../../src/theme/colors';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthLayout
      title="Create account"
      subtitle="Start building your aquascapes"
      actionLabel="Sign Up"
      onAction={() => {}}
      footer={
        <Link href="/login" asChild>
          <Pressable>
            <Text size={14} color={colors.mutedForeground}>
              Already have an account? <Text color={colors.primary} weight="semiBold">Log in</Text>
            </Text>
          </Pressable>
        </Link>
      }
    >
      <FormField label="Name" placeholder="Alex Vance" value={name} onChangeText={setName} />
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
