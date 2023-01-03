define("ace/theme/tomorrow_night.css", [
  "require",
  "exports",
  "module",
], function (require, exports, module) {
  module.exports =
    '.ace-tomorrow-night .ace_gutter {\n  background: #25282c;\n  color: #C5C8C6\n}\n\n.ace-tomorrow-night .ace_print-margin {\n  width: 1px;\n  background: #25282c\n}\n\n.ace-tomorrow-night {\n  background-color: #1D1F21;\n  color: #C5C8C6\n}\n\n.ace-tomorrow-night .ace_cursor {\n  color: #AEAFAD\n}\n\n.ace-tomorrow-night .ace_marker-layer .ace_selection {\n  background: #373B41\n}\n\n.ace-tomorrow-night.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #1D1F21;\n}\n\n.ace-tomorrow-night .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-tomorrow-night .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #4B4E55\n}\n\n.ace-tomorrow-night .ace_marker-layer .ace_active-line {\n  background: #282A2E\n}\n\n.ace-tomorrow-night .ace_gutter-active-line {\n  background-color: #282A2E\n}\n\n.ace-tomorrow-night .ace_marker-layer .ace_selected-word {\n  border: 1px solid #373B41\n}\n\n.ace-tomorrow-night .ace_invisible {\n  color: #4B4E55\n}\n\n.ace-tomorrow-night .ace_keyword,\n.ace-tomorrow-night .ace_meta,\n.ace-tomorrow-night .ace_storage,\n.ace-tomorrow-night .ace_storage.ace_type,\n.ace-tomorrow-night .ace_support.ace_type {\n  color: #B294BB\n}\n\n.ace-tomorrow-night .ace_keyword.ace_operator {\n  color: #8ABEB7\n}\n\n.ace-tomorrow-night .ace_constant.ace_character,\n.ace-tomorrow-night .ace_constant.ace_language,\n.ace-tomorrow-night .ace_constant.ace_numeric,\n.ace-tomorrow-night .ace_keyword.ace_other.ace_unit,\n.ace-tomorrow-night .ace_support.ace_constant,\n.ace-tomorrow-night .ace_variable.ace_parameter {\n  color: #DE935F\n}\n\n.ace-tomorrow-night .ace_constant.ace_other {\n  color: #CED1CF\n}\n\n.ace-tomorrow-night .ace_invalid {\n  color: #CED2CF;\n  background-color: #DF5F5F\n}\n\n.ace-tomorrow-night .ace_invalid.ace_deprecated {\n  color: #CED2CF;\n  background-color: #B798BF\n}\n\n.ace-tomorrow-night .ace_fold {\n  background-color: #81A2BE;\n  border-color: #C5C8C6\n}\n\n.ace-tomorrow-night .ace_entity.ace_name.ace_function,\n.ace-tomorrow-night .ace_support.ace_function,\n.ace-tomorrow-night .ace_variable {\n  color: #81A2BE\n}\n\n.ace-tomorrow-night .ace_support.ace_class,\n.ace-tomorrow-night .ace_support.ace_type {\n  color: #F0C674\n}\n\n.ace-tomorrow-night .ace_heading,\n.ace-tomorrow-night .ace_markup.ace_heading,\n.ace-tomorrow-night .ace_string {\n  color: #B5BD68\n}\n\n.ace-tomorrow-night .ace_entity.ace_name.ace_tag,\n.ace-tomorrow-night .ace_entity.ace_other.ace_attribute-name,\n.ace-tomorrow-night .ace_meta.ace_tag,\n.ace-tomorrow-night .ace_string.ace_regexp,\n.ace-tomorrow-night .ace_variable {\n  color: #CC6666\n}\n\n.ace-tomorrow-night .ace_comment {\n  color: #969896\n}\n\n.ace-tomorrow-night .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-tomorrow-night .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n';
});

define("ace/theme/tomorrow_night", [
  "require",
  "exports",
  "module",
  "ace/theme/tomorrow_night.css",
  "ace/lib/dom",
], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-tomorrow-night";
  exports.cssText = require("./tomorrow_night.css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/tomorrow_night"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
