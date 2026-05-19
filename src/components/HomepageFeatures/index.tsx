import { InlineIcon } from '@iconify/react';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    icon: 'mdi:rocket-launch-outline',
    description: (
      <>
        Simply install our VSCode extension and start designing! No manual tool
        installation required.
      </>
    ),
  },
  {
    title: 'Available Everywhere',
    icon: 'mdi:devices',
    description: (
      <>
        Windows, macOS, Linux, in your browser, or anywhere else VSCode runs!
      </>
    ),
  },
  {
    title: 'Full Dev Experience',
    icon: 'boxicons:chip',
    description: (
      <>
        RTL, synthesis, place and route, simulation, programming and more - all in one extension.
      </>
    ),
  },
  {
    title: 'Fully FOSS',
    icon: 'mdi:license',
    description: (
      <>
        EDAcation and all of its subprojects are MIT licensed. No closed-source components, ever. Come help us build!
      </>
    ),
  },
  {
    title: 'Shoulders of Giants',
    icon: 'mdi:tools',
    description: (
      <>
        Our motto: don't reinvent the wheel! We make tools like <a href="https://github.com/YosysHQ/yosys">Yosys</a>,{' '}
        <a href="https://github.com/YosysHQ/nextpnr">Nextpnr</a>,{' '}
        <a href="https://github.com/tilk/digitaljs">DigitalJS</a>, and{' '}
        <a href="https://github.com/steveicarus/iverilog">IVerilog</a> available
        to everyone.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3', styles.featureColumn)}>
      <div className={clsx('text--center padding-horiz--md', styles.featureCard)}>
        <Heading as="h3" className={styles.featureTitle}>
          <InlineIcon className={styles.featureIcon} icon={icon} />
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
