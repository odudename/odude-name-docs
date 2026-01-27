'use client';

import { Navbar, useTheme } from 'nextra-theme-docs';
import { Group, Text, Button, useMantineColorScheme } from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { IconBrandX } from '@tabler/icons-react';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { Logo } from '../Logo/Logo';

/**
 * You can customize the Nextra NavBar component.
 *
 * @since 1.0.0
 *
 */
export const MantineNavBar = () => {
  const { setColorScheme } = useMantineColorScheme();
  const { theme } = useTheme();

  useDidUpdate(() => {
    setColorScheme(theme === 'dark' ? 'dark' : theme === 'system' ? 'auto' : 'light');
  }, [theme]);

  return (
    <Navbar
      logo={
        <Group align="center" gap={4}>
          <Logo />
          <Text size="lg" fw={800} c="blue" visibleFrom="xl">
            Odude Docs
          </Text>
        </Group>
      }
      // Odude X (Twitter)
      chatLink="https://x.com/odudehq"
      chatIcon={<IconBrandX size={18} />}
      projectLink="https://github.com/odudename"
    >
      <ColorSchemeControl key="color-scheme-control" />
      <Button key="dashboard-button" component="a" href="https://name.odude.com" target="_blank">
        Dashboard
      </Button>
    </Navbar>
  );
};
