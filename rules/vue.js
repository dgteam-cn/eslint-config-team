/**
 * 本文件的规则由 eslint-plugin-vue 提供，使用 vue-eslint-parser 作为 parser
 * 需要将 eslint-plugin-vue 和 vue-eslint-parser 安装为项目依赖
 */

module.exports = {
    parser: 'vue-eslint-parser',
    plugins: ['vue'],
    rules: {
        /**
         * @name eslint-plugin-vue
         * @description Vue ^2.0 文件格式化配置
         */

        // => LEVEL 1
        "vue/custom-event-name-casing": "warn", // 事件传递中，禁用驼峰命名法 (建议用中划线或其他符号分割) userName => user-name
        "vue/no-arrow-functions-in-watch": "error", // 禁止在 watch 中使用箭头函数
        "vue/no-async-in-computed-properties": "error", // 在 computed 中返回非同步的方法
        "vue/no-custom-modifiers-on-v-model": "warn", // 在 v-model 中使用多个修饰符
        "vue/no-dupe-keys": "error", // 在 data props computed methods... 中定义了相同的属性或方法
        "vue/no-dupe-v-else-if": "error", // 在 if 中使用了相同的判断条件
        "vue/no-duplicate-attributes": "error", // 在 vdom 中设置了相同的属性
        "vue/no-multiple-template-root": "error", // 不允许向模板添加多个根节点
        "vue/no-mutating-props": "error", // 组件 props 中的参数仅为只读数据
        "vue/no-parsing-error": "error", //	在 <template> 禁用错误分析
        "vue/no-reserved-keys": "error", //	禁止使用保留字创建属性或方法
        "vue/no-shared-component-data": "error", // component's data 必须能是返回返回对象分方法 🔧
        "vue/no-side-effects-in-computed-properties": "warn", // 禁止在 computed 去改变 data 属性
        "vue/no-template-key": "warn", // 禁止在 <template> 添加属性
        "vue/no-textarea-mustache": "off", // 禁止直接在 <textarea> 标签内打印数据
        "vue/no-unused-components": "warn", // 声明的组件必须要使用
        "vue/no-unused-vars": "error", // 不允许v-for指令或作用域属性的未使用变量定义
        "vue/no-use-v-if-with-v-for": ["warn", {allowUsingIterationVar: true}], // 禁止 v-for 与 v-if 同时使用; allowUsingIterationVar 允许迭代变量
        "vue/no-v-for-template-key": "error", // 禁止在 <template v-for>	中设置属性
        "vue/no-v-model-argument": "warn", // 禁止在自定义组件的 v-model 中添加修饰符
        "vue/require-component-is": "warn", // 自定义组件的 is 必须是动态变量，静态变量的 is 请使用单一组件而不是动态 component
        "vue/require-prop-type-constructor": "error", // 要求 prop 的 type 必须是构造器函数	🔧
        "vue/require-render-return": "error", // 强制 render 函数必须要有返回值
        "vue/require-v-for-key": "warn", // 强制 v-for 控制中必须指定组件 key
        "vue/require-valid-default-prop": "warn", // 检验 props 中 default 必须是个有效值（object 必须 return）
        "vue/return-in-computed-property": "warn", // computed 中必须有 return 语句
        "vue/use-v-on-exact": "warn", // 当有另一个带有修饰符的 v-on 时，此规则强制对 v-on 使用精确修饰符。
        "vue/valid-template-root": "warn", // 检查每个模板根是否有效
        "vue/valid-v-bind-sync": "warn", //此规则检查v-bind指令上的每个.sync修饰符是否有效
        "vue/valid-v-bind": "warn", // enforce valid v-bind directives
        "vue/valid-v-cloak": "warn", // enforce valid v-cloak directives
        "vue/valid-v-else-if": "warn", // enforce valid v-else-if directives
        "vue/valid-v-else": "warn", // enforce valid v-else directives
        "vue/valid-v-for": "warn", // enforce valid v-for directives
        "vue/valid-v-html": "warn", // enforce valid v-html directives
        "vue/valid-v-if": "warn", // enforce valid v-if directives
        "vue/valid-v-model": "warn", // enforce valid v-model directives
        "vue/valid-v-on": "warn", // enforce valid v-on directives
        "vue/valid-v-once": "warn", // enforce valid v-once directives
        "vue/valid-v-pre": "warn", // enforce valid v-pre directives
        "vue/valid-v-show": "warn", // enforce valid v-show directives
        "vue/valid-v-slot": "warn", // enforce valid v-slot directives
        "vue/valid-v-text": "warn", // enforce valid v-text directives

        // => LEVEL 2
        "vue/attribute-hyphenation": "error", // 组件属性中禁止使用驼峰命名法，推荐使用分隔符 🔧
        "vue/component-definition-name-casing": "error", // 注册组件强制要求使用驼峰命名法 🔧
        "vue/html-closing-bracket-newline": "warn", // 组件内换行符必须符合规范 🔧
        "vue/html-closing-bracket-spacing": "error", //	检查标签的末尾符格式 🔧
        "vue/html-end-tags": "error", //	标签强制要求有末尾符 🔧
        "vue/html-indent": ["warn", 4, {"attribute": 1, "baseIndent": 1, "closeBracket": 0, "alignAttributesVertically": true}], // enforce consistent indentation in <template> 🔧
        "vue/html-quotes": "error", // 强制 HTML 属性的引号样式 🔧
        "vue/html-self-closing": "error", // 无内容标签自动闭合 🔧
        "vue/max-attributes-per-line": ["error", {singleline: 9, multiline: {max: 5, allowFirstLine: true}}], // 限制每行属性的最大数量 🔧
        "vue/multiline-html-element-content-newline": ["off", {ignores: ['pre', 'textarea']}], // 多行元素的内容前后强制执行换行符 🔧
        "vue/mustache-interpolation-spacing": "error", // 组件内部的数据插槽需要有空格分隔符 🔧
        "vue/no-multi-spaces": ["error", {ignoreProperties: true}], // 多个空格; ignoreProperties 忽略属性 🔧
        "vue/no-spaces-around-equal-signs-in-attribute": "error", // 属性中不允许使用等号 🔧
        "vue/no-template-shadow": "warn", // 消除v-for指令或作用域属性的隐藏变量声明
        "vue/one-component-per-file": "warn", // 检查每个文件是否只有一个组件
        "vue/prop-name-casing": "warn", //	props 中 name 必须是驼峰命名法
        "vue/require-default-prop": "off", // 要求 props 中的型配置完全
        "vue/require-prop-types": "off", //要 求 props 中的型配置 type
        "vue/singleline-html-element-content-newline": "off", // 在单行元素的内容前后强制执行换行符 🔧
        "vue/v-bind-style": "error", //	enforce v-bind directive style 🔧
        "vue/v-on-style": "error", //	enforce v-on directive style 🔧
        "vue/v-slot-style": "error", //	enforce v-slot directive style

        // LEVEL other
        "vue/attributes-order": ["error", {
            // 组件属性排序 🔧
            order: [
                "DEFINITION", // 定义 is
                "LIST_RENDERING", // 列表渲染 v-for
                "CONDITIONALS", // 条件句 v-if v-show
                "RENDER_MODIFIERS", // 渲染修改器 v-once
                "GLOBAL", // 全局属性 id
                "UNIQUE", // 独一无二 ref
                "TWO_WAY_BINDING", // 条件绑定 v-model
                "OTHER_DIRECTIVES", // 其他自定义指令
                "OTHER_ATTR", // 其他自定义属性
                "EVENTS", // 事件 @click
                "CONTENT" // 内容 v-text
            ],
            alphabetical: false
        }],
        "vue/component-tags-order": "off", // 顶级标签排序；默认：{ "order": [ [ "script", "template" ], "style" ] }
        // "vue/no-lone-template": "error",
        // "no-multiple-slot-args": "warn", // 不允许向作用域插槽传递多个参数
        "vue/no-v-html": "warn", // 禁止使用 v-html
        "vue/order-in-components": ["error", {
            // 组件属性排序 🔧
            order: [
                "name", "el", "key", "parent", "layout", "head", "functional", "setup", // 声明层
                "mixins", "middleware", "validate",  "transition", "loading", ["provide", "inject"], "inheritAttrs",  "model", "emits", // 数据混合
                "fetch", "asyncData", "data", ["props", "propsData"], "computed", "watch", // 数据层
                ["delimiters", "comments"], ["directives", "filters"], "extends",
                "methods", // 方法
                "components", // 组件
                ["template", "render"], // 模板
                "renderError",
                "scrollToTop", "onPageScroll", "onResize", // UNIAPP 窗口尺寸变化
                "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onNavigationBarButtonTap", "onBackPress", // UNIAPP 页面交互事件
                "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onShareTimeline", "onAddToFavorites", // UNIAPP 导航栏事件
                "onUniNViewMessage", "onUnhandledRejection", "onPageNotFound", "onThemeChange", // UNIAPP 路由事件
                "onShow", "onHide", "onLaunch", "onUnload", "onError", // UNIAPP 生命周期
                "LIFECYCLE_HOOKS" // 生命周期
            ]
        }],

        "vue/block-tag-newline": "warn", // 在打开和关闭块级标记之前强制换行 🔧
        "vue/component-name-in-template-casing": ["warn", "kebab-case", {"registeredComponentsOnly": true}], // 在模板中强制组件命名样式的特定大小写 🔧
        "vue/html-comment-content-newline": "off", // 在HTML注释中强制统一行制动 🔧
        "vue/html-comment-content-spacing": "off", // 在HTML注释中强制统一间距 🔧
        "vue/html-comment-indent": "off", // 在HTML注释中强制一致缩进 🔧
        "vue/match-component-file-name": "off", // 要求组件名属性与其文件名匹配
        "vue/no-bare-strings-in-template": "off", // disallow the use of bare strings in <template>
        "vue/no-boolean-defaul": "off", // 布尔型参数禁止有默认值 🔧
        "vue/no-duplicate-attr-inheritance": "off", // 使用 v-bind="$attrs" 时强制将 inheritAttrs 设置为 false
        "vue/no-empty-component-block": "off", // 不允许 <template> <script> <style> 块为空
        "vue/no-multiple-objects-in-class": "warn", // 不允许将多个对象传入数组到类
        "vue/no-potential-component-option-typo": "off", // 不允许在您的组件配置中输入潜在错误（ 不兼容 uniapp ）
        "vue/no-reserved-component-names": "warn", // 不允许在组件定义中使用保留名称
        "vue/no-restricted-component-options": "off", // 不允许特定组件选项
        "vue/no-restricted-static-attribute": "off", // 不允许特定属性
        "vue/no-restricted-v-bind": "off", // 在 v-bind 中不允许特定参数
        "vue/no-static-inline-styles": "off", // 不允许静态内联样式属性
        "vue/no-template-target-blank": "off", // 不允许 target=“_blank” 属性不带 rel=“noopener noreferrer”
        "vue/no-unregistered-components": "off", //禁止使用模板中未注册的组件
        "vue/no-unsupported-features": "off", // 不允许不支持Vue.js版指定版本的语法 🔧
        "vue/no-unused-properties": "off", // 不允许未使用的属性
        "vue/no-useless-mustaches": "warn", // 不允许不必要的插值 🔧
        "vue/no-useless-v-bind": "warn", // 不允许不必要的 v-bind 指令 🔧
        "vue/padding-line-between-blocks": "off", // 要求或不允许块之间的填充线 🔧
        "vue/require-direct-export": "warn", // 要求直接导出组件
        "vue/require-name-property": "off", // 需要 Vue 组件中的 name 属性
        "vue/script-indent": ["warn", 4, {switchCase: 1}], // 在 <script> 中强制一致缩进 🔧
        "vue/sort-keys": "off", // 以与组件中的顺序兼容的方式强制排序键
        "vue/static-class-names-order": "off", // 强制 class 的名顺序 🔧
        "vue/v-for-delimiter-style": "warn", // 强制 v-for 指令的分隔符样式 🔧
        "vue/v-on-function-call": "off", // 在 v-on 指令中不带参数的方法调用后强制或禁止括号

        "vue/array-bracket-newline": "warn", // 在数组括号开始后和结束之前强制换行 🔧
        "vue/array-bracket-spacing": "warn", // 在数组括号内强制使用一致的间距 🔧
        "vue/arrow-spacing": "warn", // 在箭头函数中，在箭头前后强制使用一致的间距 🔧
        "vue/block-spacing": "warn", // 在打开块之后和关闭块之前不允许或强制块内部有空格 🔧
        "vue/brace-style": "warn", // 对块强制使用一致的大括号样式 🔧
        "vue/camelcase": "warn", // 对块强制使用一致的大括号样式
        "vue/comma-dangle": "warn", // 要求或不允许使用尾随逗号 🔧
        "vue/comma-spacing": "warn", // 执行逗号前后一致的间距 🔧
        "vue/comma-style": "warn", // 强制使用一致的逗号样式 🔧
        "vue/dot-location": "warn", // 在点前后强制使用一致的换行符 🔧
        "vue/dot-notation": "warn", // 尽可能强制使用点表示法 🔧
        "vue/eqeqeq": "off", // 强制使用 === 和 !== 🔧
        "vue/func-call-spacing": "warn", // 要求或不允许函数标识符与其调用之间的间距 🔧
        "vue/key-spacing": "warn", // 在对象文字属性中强制键和值之间保持一致的间距 🔧
        "vue/keyword-spacing": "warn", // 在关键字前后强制使用一致的间距 🔧
        "vue/max-len": "off", // 强制执行最大线长度
        "vue/no-empty-pattern": "warn", // 不允许空的解构模式
        "vue/no-extra-parens": "warn", // 不允许不必要的括号 🔧
        "vue/no-irregular-whitespace": "off", // 不允许不规则空白
        "vue/no-restricted-syntax": "off", // 不允许指定的语法
        "vue/no-sparse-arrays": "warn", // 不允许稀疏数组
        "vue/no-useless-concat": "warn", // 不允许文字或模板文字的不必要的连接
        "vue/object-curly-newline": "warn", // 在大括号内强制一致的换行符 🔧
        "vue/object-curly-spacing": "warn", // 在大括号内强制使用一致的间距 🔧
        "vue/object-property-newline": "off", // 强制将对象特性放置在单独的行上 🔧
        "vue/operator-linebreak": "warn", // 为运算符强制使用一致的换行符样式 🔧
        "vue/prefer-template": "warn", // 需要模板文本而不是字符串连接 🔧
        "vue/space-in-parens": "warn", // 在括号内强制一致间距 🔧
        "vue/space-infix-ops": "warn", // 中缀运算符周围需要间距 🔧
        "vue/space-unary-ops": "warn", // 在一元运算符之前或之后强制使用一致的间距 🔧
        "vue/template-curly-spacing": "warn" // 要求或不允许模板字符串的嵌入表达式之间有间距
    }
}
