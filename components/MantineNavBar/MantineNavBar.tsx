'use client';

import { Navbar } from 'nextra-theme-docs';
import { Group, Text, Button } from '@mantine/core';
import { IconBrandX } from '@tabler/icons-react';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { Logo } from '../Logo/Logo';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';
/**
 * You can customize the Nextra NavBar component.
 * Don't forget to use the MantineProvider and MantineNextraThemeObserver components.
 *
 * @since 1.0.0
 *
 */
export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
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
        <>
          <ColorSchemeControl />
          <Button component="a" href="https://name.odude.com" target="_blank">
            Dashboard
          </Button>
        </>
      </Navbar>
    </>
  );
};
