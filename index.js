module.exports = {
  "extends": "airbnb",
  "plugins": [
     "jest"
  ],
  "rules": {
    "arrow-body-style": "off",
    "arrow-parens": ["error", "always"],

    // Beware about turning this rule back on. The rule encourages you to create
    // static class methods on React components when they don't use `this`.
    // However, it will not warn you if you access `this` in a static method
    // accidentally (which would most likely be a mistake).
    "class-methods-use-this": "off",

    "comma-dangle": ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],

    // This makes sure imported modules exist.
    "import/no-unresolved": ["error"],

    // This makes sure imported names exist.
    "import/named": ["error"],

    // This will catch accidental default imports when no default is defined.
    "import/default": ["error"],

    // This makes sure `*' imports are dereferenced to real exports.
    "import/namespace": ["error"],

    // This catches any export mistakes.
    "import/export": ["error"],

    // This catches default names that conflict with actual exported names.
    // For example, this was probably a typo:
    //   import foo from 'bar';
    // that should be corrected as:
    //   import { foo } from 'bar';
    "import/no-named-as-default": ["error"],

    // This catches possible typos like trying to access a real export on a
    // default import.
    "import/no-named-as-default-member": ["error"],

    // This prevents exporting a mutable variable.
    "import/no-mutable-exports": ["error"],

    // This makes sure package.json defines dev vs. prod dependencies correctly.
    "import/no-extraneous-dependencies": ["error", {
      // The following are not allowed to be imported. See .eslintrc in other
      // directories (like ./test) for where this gets overidden.
      "devDependencies": false,
      "optionalDependencies": false,
      "peerDependencies": false,
    }],

    // This ensures imports are at the top of the file.
    "import/imports-first": ["error"],

    // This reports when you accidentally import/export an object twice.
    "import/no-duplicates": ["error"],

    // This ensures import statements never provide a file extension in the path.
    "import/extensions": ["error", "never"],

    // This ensures imports are organized by type and that groups are separated
    // by a new line.
    "import/order": ["error", {
      "groups": [
        "builtin", "external", "internal", ["parent", "sibling"], "index"
      ],
      "newlines-between": "always"
    }],

    // Turn of the preference to have a default export.
    "import/prefer-default-export": ["off"],

    // This ensures a new line after all import statements.
    "import/newline-after-import": ["error"],

    // Add jest specific eslint rules.
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",

    // Generally avoid the use of console.
    "no-console": "error",

    // We use import/no-duplicates instead because it supports Flow types.
    "no-duplicate-imports": "off",

    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "space-before-function-paren": ["error", "never"],

    // The airbnb default of this rule mainly encourages `shape` over `object`
    // but there are too many bugs in the linter to use `shape` accurately.
    'react/forbid-prop-types': "off",

    "react/prefer-stateless-function": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".js", ".jsx"],
    }],
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-key": "error",
    "react/no-string-refs": "error",
  }
};