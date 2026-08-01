import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { ProjectCard } from '../../src/components/projects/ProjectCard';
import { Button } from '../../src/components/ui/Button';
import { Screen } from '../../src/components/ui/Screen';
import { SearchBar } from '../../src/components/ui/SearchBar';
import { Text } from '../../src/components/ui/Text';
import { PhosphorIcon } from '../../src/components/icons/PhosphorIcon';
import { projects } from '../../src/data/mock';
import { alpha, colors } from '../../src/theme/colors';
import { fontSizes } from '../../src/theme/typography';
import { radius, sizes, spacing } from '../../src/theme/spacing';

const H_PADDING = spacing['2xl'];

export default function ProjectsScreen() {
  const [query, setQuery] = useState('');

  const filtered = projects.filter((project) => {
    const q = query.trim().toLowerCase();
    return q.length === 0 || project.title.toLowerCase().includes(q);
  });

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text variant="heading" size={fontSizes['4xl']} color={colors.foreground} tracking={-0.5}>
              Projects
            </Text>
            <Text size={fontSizes.sm} color={colors.mutedForeground} style={styles.subtitle}>
              {projects.length} Active Aquascapes
            </Text>
          </View>
          <Button variant="primary" shape="round" icon="plus-bold" onPress={() => {}} />
        </View>

        <View style={styles.searchRow}>
          <SearchBar placeholder="Search projects..." value={query} onChangeText={setQuery} compact style={styles.search} />
          <Pressable style={({ pressed }) => [styles.filterButton, pressed && styles.pressed]}>
            <PhosphorIcon name="sliders-horizontal" size={sizes.iconMd} color={colors.mutedForeground} />
          </Pressable>
        </View>

        <View style={styles.list}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing['8xl'],
  },
  header: {
    paddingHorizontal: H_PADDING,
    paddingTop: spacing['2xl'],
    marginBottom: spacing['3xl'],
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  subtitle: {
    marginTop: spacing.xs,
  },
  searchRow: {
    paddingHorizontal: H_PADDING,
    marginBottom: spacing['3xl'],
    flexDirection: 'row',
    gap: spacing.md,
  },
  search: {
    flex: 1,
  },
  filterButton: {
    width: sizes.button,
    height: sizes.button,
    borderRadius: radius.lg,
    backgroundColor: alpha(colors.card, 0.5),
    borderWidth: 1,
    borderColor: alpha(colors.white, 0.05),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
  list: {
    paddingHorizontal: H_PADDING,
    gap: spacing['2xl'],
  },
});
