import*as e from"typescript";import t from"typescript";import o from"path";import r from"fs";import{performance as n}from"perf_hooks";const i=e=>{const t=[{limit:1024,suffix:"bytes",divisor:1},{limit:1048576,suffix:"KB",divisor:1024},{limit:1073741824,suffix:"MB",divisor:1048576},{limit:1/0,suffix:"GB",divisor:1073741824}].find((t=>e<t.limit));return`${(e/t.divisor).toFixed(2)} ${t.suffix}`};class s{projectDir;program;constructor(e){this.projectDir=e,this.program=t.createProgram([`${e}/src/**/*.ts`],{})}analyze(){const e=process.hrtime(),o=this.program.getSourceFiles();let r=0,n=0;o.forEach((e=>{const o=e.getLineAndCharacterOfPosition(e.getEnd()).line+1;r+=o;const i=this.program.getTypeChecker();t.forEachChild(e,(e=>{i.getTypeAtLocation(e)&&n++}))}));const[i,s]=process.hrtime(e),c=1e3*i+s/1e6;return{totalFiles:o.length,totalLines:r,totalTypes:n,typeCheckingTime:c,suggestions:this.generateSuggestions(n,c)}}generateSuggestions(e,t){const o=[];return t>1e3&&o.push("⏰ Consider splitting large files to reduce type-checking time"),e>1e4&&o.push("🧹 Try to simplify complex types or reduce the number of types."),o}async functionPerformance(t,s,c){let a=0,l="";const u=o.join(t,s);if(!r.existsSync(u))throw new Error(`File ${s} does not exist`);r.readFile(u,((e,t)=>{if(0===t.length)throw new Error(`File ${s} is empty`,e)}));try{const t=r.readFileSync(u,"utf8").split("\n");try{const o=((e,t)=>{let o="",r=!1,n=0;for(const i of e)if((i.includes(`async function ${t}`)||i.includes(`const ${t} = async`)||i.includes(`const ${t} = `))&&(r=!0),r&&(o+=i+"\n",i.includes("{")&&n++,i.includes("}")&&n--,0===n)){r=!1;break}if(!o)throw new Error(`Function ${t} not found`);return o})(t,c),r=(e=>{const t=new Function(`\n        return function() {\n            ${e}\n        };\n    `)();if("function"!=typeof t)throw new Error("The code did not produce a valid function.");return t})((p=o,e.transpileModule(p,{compilerOptions:{module:e.ModuleKind.CommonJS,target:e.ScriptTarget.ES2015,esModuleInterop:!0}}).outputText));a=await(async e=>{console.log("Function passed to getTotalTimeScore:",e);const t=n.now();let o=null;return"AsyncFunction"===e.constructor.name?e().then((()=>(o=n.now(),o-t))):(e(),o=n.now(),Promise.resolve(o-t))})(r),l=await(e=>{const t=n.now(),o=process.memoryUsage().heapUsed;e();const r=process.memoryUsage().heapUsed,s=n.now();return Promise.resolve(i(s-t+(r-o)))})(r)}catch(e){return console.log(e),Promise.reject(new Error("Error evaluating function",e))}return{totalTime:a,totalSpace:l}}catch(e){throw new Error(`Error in function performance analysis: ${e}`)}var p}}export{s as default};
