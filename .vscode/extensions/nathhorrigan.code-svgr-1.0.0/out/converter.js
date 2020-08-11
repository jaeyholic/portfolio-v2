"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@svgr/core");
// Test
require.resolve("@svgr/core");
require.resolve("@svgr/plugin-svgo");
require.resolve("@svgr/plugin-jsx");
require.resolve("@svgr/plugin-prettier");
exports.dryRun = (svg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jsx = yield exports.convertSelection(svg, {
            componentName: "TestDryRun",
            reactEnviroment: "web",
            template: "jsx",
        });
        return !!jsx;
    }
    catch (_a) {
        return false;
    }
});
exports.convertSelection = (svg, options) => __awaiter(void 0, void 0, void 0, function* () {
    let svgrConfig = {
        icon: options.isIcon,
        memo: options.useMemo,
        native: false,
        typescript: options.isTypescript,
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
    };
    // Check if React Native
    if (options.reactEnviroment === "native") {
        svgrConfig.native = { expo: options.isExpo };
    }
    // Check if we should override the template
    if (options.template === "jsx") {
        svgrConfig.template = JsxOnlyTemplate;
    }
    if (options.template === "snippet") {
        svgrConfig.template = SnippetTemplate;
    }
    const jsCode = yield core_1.default(svg, svgrConfig, {
        componentName: options.componentName,
    });
    return jsCode;
});
// This is used when just returning inline SVG code
function JsxOnlyTemplate({ template }, opts, { jsx }) {
    const plugins = ["jsx"];
    if (opts.typescript) {
        plugins.push("typescript");
    }
    const typeScriptTpl = template === null || template === void 0 ? void 0 : template.smart({ plugins });
    return typeScriptTpl.ast `${jsx}`;
}
// Used when creating snuppet components
function SnippetTemplate({ template }, opts, { imports, interfaces, componentName, props, jsx, exports }) {
    const plugins = ["jsx"];
    if (opts.typescript) {
        plugins.push("typescript");
    }
    const typeScriptTpl = template === null || template === void 0 ? void 0 : template.smart({ plugins });
    return typeScriptTpl.ast `${imports}
  ${interfaces}
  function $1 (${props}) {
    return ${jsx};
  }
  ${exports}
    `;
}
//# sourceMappingURL=converter.js.map