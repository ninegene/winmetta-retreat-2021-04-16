module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'riot',
    'html'
  ],
  settings: {
    "html/html-extensions": [".html", ".riot"],  // consider .html and .riot files as HTML
  },
  rules: {
  }
}
