import Heading from '@theme/Heading';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to use',
    description: (
      <>
        Simply install our VSCode extension and start designing! No manual tool
        installation required.
      </>
    ),
  },
  {
    title: 'Available everywhere',
    description: (
      <>
        Windows, macOS, Linux, in your browser, or anywhere else VSCode runs!
      </>
    ),
  },
  {
    title: 'Fully FOSS',
    description: (
      <>
        EDAcation and all of its subprojects are MIT licensed. We also accept
        contributions!
      </>
    ),
  },
  {
    title: 'Shoulders of giants',
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

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center padding-horiz--md', styles.featureCard)}>
        <Heading as="h3">
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
