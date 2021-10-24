const { JsiiProject, python } = require('projen');

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
  // publishToMaven: {
  //   javaPackage: 'com.github.mmuller88.prowlerSdkPoc',
  //   mavenGroupId: 'com.github.mmuller88',
  //   mavenArtifactId: 'prowler-sdk-poc',
  // },
  jestOptions: {
    jestConfig: {
      testTimeout: 500 * 1000,
    },
  },
  publishToNuget: {
    dotNetNamespace: 'com.github.mmuller88',
    packageId: 'com.github.mmuller88.ProwlerSdkPoc',
  },
  python: {
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

// const py = new python.PythonProject({
//   authorEmail: 'damadden88@googlemail.com',
//   authorName: 'Martin Mueller',
//   moduleName: 'prowler_sdk_poc',
//   name: 'prowler_sdk_poc',
//   version: '0.1.0',
//   outdir: 'python',

//   // deps: [],                          /* List of runtime dependencies for this project. */
//   // description: undefined,            /* A short description of the package. */
//   // devDeps: [],                       /* List of dev dependencies for this project. */
//   // pip: true,                         /* Use pip with a requirements.txt file to track project dependencies. */
//   // poetry: false,                     /* Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing. */
//   // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
//   // pytest: true,                      /* Include pytest tests. */
//   // setuptools: undefined,             /* Use setuptools with a setup.py script for packaging and publishing. */
//   // venv: true,                        /* Use venv to manage a virtual environment for installing dependencies inside. */
// });
// py.synth();