export function normalizeBundleSource(source) {
  return source
    .replace(/^\/\/ (?:\.\.\/)+node_modules\//gmu, '// node_modules/')
    .replace(/[\t ]+$/gmu, '');
}
