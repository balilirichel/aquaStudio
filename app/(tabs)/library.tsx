import React, { useMemo, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { AddElementCard } from '../../src/components/library/AddElementCard';
import { ItemCard } from '../../src/components/library/ItemCard';
import { Chip } from '../../src/components/ui/Chip';
import { Screen } from '../../src/components/ui/Screen';
import { SearchBar } from '../../src/components/ui/SearchBar';
import { Text } from '../../src/components/ui/Text';
import { libraryCategories, libraryItems } from '../../src/data/mock';
import { colors } from '../../src/theme/colors';
import { fontSizes } from '../../src/theme/typography';
import { spacing } from '../../src/theme/spacing';

import type { LibraryCategory } from '../../src/data/mock';

const GRID_GAP = spacing.lg;
const H_PADDING = spacing['2xl'];

const categoryToItem: Record<string, LibraryCategory | undefined> = {
  'All Items': undefined,
  Plants: 'Plant',
  Hardscape: 'Hardscape',
  Fish: undefined,
  Decor: undefined,
};

export default function LibraryScreen() {
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>(libraryCategories[0]);

  const itemWidth = (width - H_PADDING * 2 - GRID_GAP) / 2;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const targetCategory = categoryToItem[category];
    return libraryItems.filter((item) => {
      const matchesCategory = targetCategory === undefined || item.category === targetCategory;
      const matchesQuery =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <Screen>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard item={item} style={{ width: itemWidth }} />}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text variant="heading" size={fontSizes['4xl']} color={colors.foreground} tracking={-0.5} style={styles.title}>
                Library
              </Text>
              <SearchBar placeholder="Search elements..." value={query} onChangeText={setQuery} />
            </View>
            <View style={styles.chips}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContent}>
                {libraryCategories.map((cat) => (
                  <Chip key={cat} label={cat} active={cat === category} onPress={() => setCategory(cat)} />
                ))}
              </ScrollView>
            </View>
          </View>
        }
        ListFooterComponent={<View style={styles.footer}><AddElementCard /></View>}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text size={fontSizes.sm} color={colors.mutedForeground} center>
              No elements match your search.
            </Text>
          </View>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: H_PADDING,
    paddingBottom: spacing['8xl'],
    gap: GRID_GAP,
  },
  header: {
    marginBottom: spacing['3xl'],
    paddingTop: spacing['2xl'],
  },
  title: {
    marginBottom: spacing['2xl'],
  },
  chips: {
    marginBottom: spacing['3xl'],
    marginHorizontal: -H_PADDING,
  },
  chipsContent: {
    paddingHorizontal: H_PADDING,
    gap: spacing.md,
  },
  column: {
    gap: GRID_GAP,
  },
  footer: {
    marginTop: spacing.sm,
  },
  empty: {
    paddingVertical: spacing['6xl'],
    alignItems: 'center',
  },
});
