export default {
    printWidth: 120,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行末分号
    semi: false,
    // 单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 双引号
    jsxSingleQuote: false,
    // 对象、数组等的最后一个元素后添加逗号
    trailingComma: 'all',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    bracketSameLine: false,
    // 箭头函数，只有一个参数的时候，不需要括号
    arrowParens: 'avoid',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 换行符
    endOfLine: 'auto',
}
