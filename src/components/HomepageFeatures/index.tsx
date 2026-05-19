import clsx from 'clsx';
import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

function PlaceholderSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Feature illustration placeholder"
      {...props}
    >
      <rect x="10" y="10" width="100" height="100" rx="18" fill="none" />
      <path d="M30 60h60" stroke="currentColor" strokeWidth="6" />
      <path d="M60 30v60" stroke="currentColor" strokeWidth="6" />
    </svg>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to use',
    Svg: PlaceholderSvg,
    description: (
      <>
        Simply install our VSCode extension and start designing. No manual tool
        installation required.
      </>
    ),
  },
  {
    title: 'Available everywhere',
    Svg: PlaceholderSvg,
    description: (
      <>
        Windows, macOS, Linux, in your browser, or anywhere else VSCode runs.
      </>
    ),
  },
  {
    title: 'Fully FOSS',
    Svg: PlaceholderSvg,
    description: (
      <>
        EDAcation and all of its subprojects are MIT licensed. We also accept
        contributions.
      </>
    ),
  },
  {
    title: 'Shoulders of giants',
    Svg: PlaceholderSvg,
    description: (
      <>
        We make tools like <a href="https://github.com/YosysHQ/yosys">Yosys</a>,{' '}
        <a href="https://github.com/YosysHQ/nextpnr">Nextpnr</a>,{' '}
        <a href="https://github.com/tilk/digitaljs">DigitalJS</a>, and{' '}
        <a href="https://github.com/steveicarus/iverilog">IVerilog</a> available
        to everyone.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
