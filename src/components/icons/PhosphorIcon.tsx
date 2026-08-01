import React from 'react';
import {
  ArrowUUpLeftIcon,
  ArrowUUpRightIcon,
  BellIcon,
  BooksIcon,
  CalendarIcon,
  CameraPlusIcon,
  CaretDownIcon,
  CaretRightIcon,
  CheckIcon,
  DotsThreeVerticalIcon,
  DropIcon,
  FloppyDiskIcon,
  FolderIcon,
  GearSixIcon,
  HouseIcon,
  IntersectIcon,
  LeafIcon,
  MagnifyingGlassIcon,
  MountainsIcon,
  PencilSimpleIcon,
  PlusIcon,
  SignOutIcon,
  SlidersHorizontalIcon,
  SunIcon,
  UserIcon,
  type IconProps,
} from 'phosphor-react-native';
import { colors } from '../../theme/colors';

export type IconName =
  | 'arrow-u-up-left-bold'
  | 'arrow-u-up-right-bold'
  | 'bell-fill'
  | 'books'
  | 'books-fill'
  | 'calendar'
  | 'camera-plus-fill'
  | 'caret-down-bold'
  | 'caret-right-bold'
  | 'check-bold'
  | 'dots-three-vertical-bold'
  | 'drop-fill'
  | 'floppy-disk-fill'
  | 'folder'
  | 'folder-fill'
  | 'gear-six-bold'
  | 'house'
  | 'house-fill'
  | 'intersect'
  | 'leaf-fill'
  | 'magnifying-glass'
  | 'mountains-fill'
  | 'pencil-simple-bold'
  | 'plus-bold'
  | 'sign-out-bold'
  | 'sliders-horizontal'
  | 'sun-fill'
  | 'user'
  | 'user-fill';

const registry: Record<IconName, { Component: React.ComponentType<IconProps>; weight: IconProps['weight'] }> = {
  'arrow-u-up-left-bold': { Component: ArrowUUpLeftIcon, weight: 'bold' },
  'arrow-u-up-right-bold': { Component: ArrowUUpRightIcon, weight: 'bold' },
  'bell-fill': { Component: BellIcon, weight: 'fill' },
  books: { Component: BooksIcon, weight: 'regular' },
  'books-fill': { Component: BooksIcon, weight: 'fill' },
  calendar: { Component: CalendarIcon, weight: 'regular' },
  'camera-plus-fill': { Component: CameraPlusIcon, weight: 'fill' },
  'caret-down-bold': { Component: CaretDownIcon, weight: 'bold' },
  'caret-right-bold': { Component: CaretRightIcon, weight: 'bold' },
  'check-bold': { Component: CheckIcon, weight: 'bold' },
  'dots-three-vertical-bold': { Component: DotsThreeVerticalIcon, weight: 'bold' },
  'drop-fill': { Component: DropIcon, weight: 'fill' },
  'floppy-disk-fill': { Component: FloppyDiskIcon, weight: 'fill' },
  folder: { Component: FolderIcon, weight: 'regular' },
  'folder-fill': { Component: FolderIcon, weight: 'fill' },
  'gear-six-bold': { Component: GearSixIcon, weight: 'bold' },
  house: { Component: HouseIcon, weight: 'regular' },
  'house-fill': { Component: HouseIcon, weight: 'fill' },
  intersect: { Component: IntersectIcon, weight: 'regular' },
  'leaf-fill': { Component: LeafIcon, weight: 'fill' },
  'magnifying-glass': { Component: MagnifyingGlassIcon, weight: 'regular' },
  'mountains-fill': { Component: MountainsIcon, weight: 'fill' },
  'pencil-simple-bold': { Component: PencilSimpleIcon, weight: 'bold' },
  'plus-bold': { Component: PlusIcon, weight: 'bold' },
  'sign-out-bold': { Component: SignOutIcon, weight: 'bold' },
  'sliders-horizontal': { Component: SlidersHorizontalIcon, weight: 'regular' },
  'sun-fill': { Component: SunIcon, weight: 'fill' },
  user: { Component: UserIcon, weight: 'regular' },
  'user-fill': { Component: UserIcon, weight: 'fill' },
};

type PhosphorIconProps = Omit<IconProps, 'color'> & {
  name: IconName;
  color?: string;
  size?: number;
};

export function PhosphorIcon({ name, size = 24, color = colors.foreground, weight, ...rest }: PhosphorIconProps) {
  const { Component, weight: defaultWeight } = registry[name];
  return <Component size={size} color={color} weight={weight ?? defaultWeight} {...rest} />;
}
