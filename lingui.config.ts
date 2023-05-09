import { LinguiConfig } from "@lingui/conf";
import { vueExtractor } from "@lingui/extractor-vue";
import { extractor as babelExtractor } from "@lingui/cli/api";

const config: LinguiConfig = {
  locales: ["en", "es"],
  sourceLocale: "en",
  catalogs: [{ include: ["src"], path: "src/locales/{locale}" }],
  extractors: [vueExtractor, babelExtractor],
};

export default config;
