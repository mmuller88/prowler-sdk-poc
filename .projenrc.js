const { JsiiProject } = require('projen');

// const deps = [
//   '@aws-sdk/client-s3@3.38.0',
//   'typescript@~4.3.5',
//   '@types/node@^12.7.5',
// ];
const deps = [
  'aws-sdk',
  // 'typescript@~4.3.5',
  // '@types/node@^12.7.5',
];

const project = new JsiiProject({
  author: 'Martin Mueller',
  authorAddress: 'damadden88@googlemail.com',
  defaultReleaseBranch: 'main',
  name: 'prowler-sdk-poc',
  repositoryUrl: 'https://github.com/mmuller88/prowler-sdk-poc',

  deps: deps,
  // devDeps: deps,
  // devDeps: [
  //   'jsii-release',
  // ],
  bundledDeps: deps,
  // projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  publishToMaven: {
    javaPackage: 'com.github.mmuller88.prowlerSdkPoc',
    mavenGroupId: 'com.github.mmuller88',
    mavenArtifactId: 'prowler-sdk-poc',
  },
  jestOptions: {
    jestConfig: {
      testTimeout: 500 * 1000,
    },
  },
  publishToNuget: {
    dotNetNamespace: 'com.github.mmuller88',
    packageId: 'com.github.mmuller88.ProwlerSdkPoc',
  },
  publishToPyPi: {
    distName: 'prowler-sdk-poc',
    module: 'prowler_sdk_poc',
  },
  // releaseBranches: ['master'],
  keywords: [
    'prowler',
    'jsii',
    'assessment',
    'sdk',
  ],
});
project.synth();