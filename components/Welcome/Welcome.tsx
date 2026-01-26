'use client';

import { TextAnimate } from '@gfazioli/mantine-text-animate';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Anchor, Button, Center, Code, Paper, Text, Title } from '@mantine/core';
import pack from '../../package.json';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title maw="90vw" mx="auto" className={classes.title} ta="center">
        Welcome to
        <TextAnimate
          animate="in"
          by="character"
          inherit
          variant="gradient"
          component="span"
          segmentDelay={0.2}
          duration={2}
          animation="scale"
          animateProps={{
            scaleAmount: 3,
          }}
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          ODude
        </TextAnimate>
      </Title>

      <Text c="dimmed" ta="center" size="xl" maw={680} mx="auto" mt="sm">
        The Only Name You Will Ever Need To Represent All Your Online Identities
      </Text>
      <center>
        <Button
          variant="outline"
          size="lg"
          radius="xl"
          mt="xl"
          component="a"
          href="./docs"
        >
          Read the Docs
        </Button>
      </center>
    </>
  );
}
