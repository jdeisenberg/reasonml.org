

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

function getMdxModule (ctx,filepath){{ return ctx(filepath); }};

var beltCtx = (require.context('../pages/belt_docs', true, /^\.\/.*\.mdx$/));

function toMdxModules(ctx) {
  return Belt_Array.map(Curry._1(ctx.keys, /* () */0), (function (filepath) {
                var match = filepath.match(/\.\/(.*)\.mdx/);
                var id = match !== null && match.length === 2 ? match[1] : filepath;
                var correctedFilepath = filepath.replace(/^\.\//, "./pages/belt/");
                return {
                        id: id,
                        filepath: correctedFilepath
                      };
              }));
}

function getAllBeltModules(param) {
  return toMdxModules(beltCtx);
}

export {
  getMdxModule ,
  beltCtx ,
  toMdxModules ,
  getAllBeltModules ,
  
}
/* beltCtx Not a pure module */
