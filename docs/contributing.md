# Requirements

## Scripts: 

    "start": "node index.js",
    "package": "ncc build index.js -o dist",
    "gitAdd": "git add dist/index.js",
    "gen-readme-toc": "markdown-toc -i README.md",
    "lint": "eslint .",
    "lint-fix": "eslint --fix .",
    "test": "npm run lint && jest"

## Dependencies:

    "@actions/core": "^1.2.3",
    "markdown-toc": "^1.2.0",
    "twitter-lite": "^0.9.4"

## DevDependencies: 

    "@zeit/ncc": "^0.22.1",
    "eslint": "^7.1.0",
    "eslint-plugin-jest": "^23.13.2",
    "eslint-plugin-sonarjs": "^0.5.0",
    "jest": "^25.4.0",
    "pre-commit": "^1.2.2"

## Bugs: 

    "url": "https://github.com/m1ner79/twitterGitHubActions/issues"

## License: 

    "MIT"