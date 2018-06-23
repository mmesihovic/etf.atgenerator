define("plugins/etf.atgenerator/package.etf.atgenerator", [], {
    "name": "etf.atgenerator",
    "description": "",
    "version": "1.0.0",
    "author": "Mirza Mesihovic",
    "contributors": [
        {
            "name": "Mirza Mesihovic",
            "email": "mmesihovic1@etf.unsa.ba"
        }
    ],
    "repository": {
        "type": "git",
        "url": ""
    },
    "categories": [
        "miscellaneous"
    ],
    "licenses": [],
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/etf.atgenerator/atgenerator"
            }
        ]
    }
});

define("plugins/etf.atgenerator/atgenerator/scripts/openGenerator",[], function(require, exports, module) {
var $build_deps$ = {require: require, exports: exports, module: module};
exports = undefined; module = undefined;
function define(name, deps, m) {
    if (typeof name == "function") {
        m = name; deps = ["require", "exports", "module"]; name = $build_deps$.module.id
    }
    if (typeof name !== "string") {
        m = deps; deps = name; name = $build_deps$.module.id
    }
    if (!m) {
        m = deps; deps = [];
    }
    var ret = typeof m == "function" ?
        m.apply($build_deps$.module, deps.map(function(n){return $build_deps$[n] || require(n)})) : m
    if (ret != undefined) $build_deps$.module.exports = ret;
    if (name != $build_deps$.module.id && $build_deps$.module.define) {
        $build_deps$.module.define(name, [], function() { return $build_deps$.module.exports });
    }
}
define.amd = true;
define (function() {
    return {
        openGenerator: function(path, url, zamger) {
            window.localStorage.setItem("Zamger_URL_Autotest", url);
            if(zamger == true) {
                window.open(path);
            }
        }
    }
});
});

define("text!plugins/etf.atgenerator/atgenerator/html/index.html",[],"<!DOCTYPE HTML>\n<html>\n\n<head>\n    <title>Autotest Generator</title>\n    <meta charset=\"UTF-8\">\n    <link rel=\"stylesheet\" href=\"../bootstrap/css/bootstrap.min.css\">\n    <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"../css/common.css\">\n    <script src=\"../scripts/helpers.js\"></script>\n    <script src=\"../scripts/atgenerator.service.js\"></script>\n    <script src=\"../scripts/autotest.js\"></script>\n</head>\n\n<body>\n    <div id=\"content\">\n        <div id=\"atConfig\">\n            <form>\n                <div class=\"row\">\n                    <label for=\"name\" class=\"col-sm-2 col-form-label-sm\">Task name</label>\n                    <div class=\"col-sm-5\">\n                        <input type=\"text\" id=\"name\" class=\"form-control form-control-sm\" placeholder=\"Task name\"/>\n                    </div>\n                    <label for=\"id\" class=\"col-form-label-sm\">ID</label>\n                    <div class=\"col-sm-1\">\n                        <input type=\"text\" id=\"id\" class=\"form-control form-control-sm\" placeholder=\"ID\" disabled />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label for=\"language\" class=\"col-sm-2 col-form-label-sm\">Programming language</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"text\" id=\"language\" class=\"form-control form-control-sm\" placeholder=\"Programming Language\"/>                    \n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label for=\"required_compiler\" class=\"col-sm-2 col-form-label-sm\">Required compiler</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"text\" id=\"required_compiler\" class=\"form-control form-control-sm\" placeholder=\"Required compiler\"/>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label for=\"preferred_compiler\" class=\"col-sm-2 col-form-label-sm\">Preferred compiler</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"text\" id=\"preferred_compiler\" class=\"form-control form-control-sm\" placeholder=\"Preferred compiler\" />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label for=\"compiler_features\" class=\"col-sm-2 col-form-label-sm\">Compiler features (string array)</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"text\" id=\"compiler_features\" class=\"form-control form-control-sm\" placeholder=\"Compiler Features (string array)\" />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label for=\"compiler_options\" class=\"col-sm-2 col-form-label-sm\">Compiler options</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"text\" id=\"compiler_options\" class=\"form-control form-control-sm\" placeholder=\"Compiler options\" />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label for=\"compiler_options_debug\" class=\"col-sm-2 col-form-label-sm\">Compiler debug options</label>\n                    <div class=\"col-sm-10\">\n                        <input type=\"text\" id=\"compiler_options_debug\" class=\"form-control form-control-sm\" placeholder=\"Compiler debug options\" />\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <label class=\"col-sm-2 col-form-label-sm\">Other options</label>\n                    <div class=\"col-sm-10\">\n                        <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" type=\"checkbox\" id=\"compile\">\n                                <label class=\"form-check-label\" for=\"compile\">Compile</label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" type=\"checkbox\" id=\"run\">\n                                <label class=\"form-check-label\" for=\"run\">Run</label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" type=\"checkbox\" id=\"test\">\n                                <label class=\"form-check-label\" for=\"test\">Test</label>\n                            </div>\n                            <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" type=\"checkbox\" id=\"debug\">\n                                <label class=\"form-check-label\" for=\"debug\">Debug</label>\n                            </div>                \n                            <div class=\"form-check form-check-inline\">\n                                <input class=\"form-check-input\" type=\"checkbox\" id=\"profile\">\n                                <label class=\"form-check-label\" for=\"profile\">Profile</label>\n                            </div>\n                    </div>\n                </div>                \n            </form>\n        </div>\n        <div id=\"atDetails\" class=\"row\">\n            <div class=\"col-md-2\" id=\"atList\">\n                <!--List header-->\n                <div class=\"row justify-content-between\" style=\"font-size: 16px; border-bottom: 1px solid #ccc; margin-bottom: 10px;\">\n                    <label style=\"vertical-align:text-bottom\">Autotest</label>\n                    <i class=\"material-icons float-right\" onclick=\"AutotestGenerator.addTest(null, 'X (Unedited)')\">add_circle_outline</i>\n                </div>\n                <div class=\"row\" id=\"at_warning\">\n                    <label>There are no tests defined<br/>for this task.</label>\n                </div>\n                <!--Autotest list content-->\n            </div>\n            <div class=\"col-md-10 col-md-offset-2\" id=\"atPreview\">\n                <form>\n                    <div class=\"row\">\n                        <label for=\"at_id\" class=\"col-sm-2 col-form-label-sm\">ID</label>\n                        <div class=\"col-sm-1\">\n                            <input type=\"text\" id=\"at_id\" class=\"form-control form-control-sm\" placeholder=\"Autotest ID\" disabled />\n                        </div>\n                        <label for=\"at_name\" class=\"col-sm-1 col-form-label-sm\">Name</label>\n                        <div class=\"col-sm-2\">\n                            <input type=\"text\" id=\"at_name\" class=\"form-control form-control-sm\" placeholder=\"Autotest name\" disabled />\n                        </div>\n                        <div class=\"col-sm-4\"></div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"require_symbols\" class=\"col-sm-2 col-form-label-sm\">Require symbols (string array)</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" id=\"require_symbols\" class=\"form-control form-control-sm\" placeholder=\"Require symbols (string array)\" />\n                        </div>\n                    </div>                        \n                    <div class=\"row\">\n                        <label for=\"replace_symbols\" class=\"col-sm-2 col-form-label-sm\">Replace symbols (string array)</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" id=\"replace_symbols\" class=\"form-control form-control-sm\" placeholder=\"Replace symbols (string array)\" />\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"code\" class=\"col-sm-2 col-form-label-sm\">Code</label>\n                        <div class=\"col-sm-10\">\n                            <textarea id=\"code\" class=\"form-control form-control-sm\" rows=\"4\" placeholder=\"Code\"></textarea>\n                        </div>\n                    </div>  \n                    <div class=\"row\">\n                        <label for=\"global_above_main\" class=\"col-sm-2 col-form-label-sm\">Global scope (above main)</label>\n                        <div class=\"col-sm-10\">\n                            <textarea id=\"global_above_main\" class=\"form-control form-control-sm\" rows=\"4\" placeholder=\"Global scope (above main)\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label for=\"global_top\" class=\"col-sm-2 col-form-label-sm\">Global header</label>\n                        <div class=\"col-sm-10\">\n                            <textarea id=\"global_top\" class=\"form-control form-control-sm\" rows=\"4\" placeholder=\"Global header\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <label class=\"col-sm-12\">Running Parameters</label>\n                        <label for=\"timeout\" class=\"col-sm-2 col-form-label-sm\">Timeout</label>\n                        <div class=\"col-sm-2\">\n                            <input type=\"text\" id=\"timeout\" class=\"form-control form-control-sm\" placeholder=\"Timeout\" />\n                        </div>\n                        <label for=\"vmem\" class=\"col-sm-2 col-sm-offset-2 col-form-label-sm\">Virtual Memory</label>\n                        <div class=\"col-sm-2\">\n                            <input type=\"text\" id=\"vmem\" class=\"form-control form-control-sm\" placeholder=\"Virtual Memory\" />\n                        </div>                        \n                        <div class=\"col-sm-4\"></div>\n                        <label for=\"stdin\" class=\"col-sm-2 col-form-label-sm\">Input</label>\n                        <div class=\"col-sm-10\">\n                            <textarea id=\"stdin\" class=\"form-control form-control-sm\" rows=\"4\" placeholder=\"Input\"></textarea>\n                        </div>\n                    </div> \n                    <div id=\"expected_output_variants\" class=\"row\">\n                        <div class=\"col-sm-2\">\n                            <label>Expected Output</label>\n                            <i class=\"material-icons float-right\" onclick=\"AutotestGenerator.addOutputVariant()\">add_circle_outline</i>\n                        </div>\n                        <div class=\"col-sm-10\"> </div>\n                        <div id=\"label_div_v_1\" class=\"col-sm-2\"> \n                            <label for=\"variant_1\" class=\"col-form-label-sm\">Variant 1</label>\n                        </div>\n                        <div id=\"text_div_v_1\" class=\"col-sm-10\">\n                            <textarea id=\"variant_1\" class=\"form-control form-control-sm\" rows=\"4\" placeholder=\"Expected Output (Variant 1)\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <label class=\"col-sm-2 col-form-label-sm\">Additional options</label>\n                            <div class=\"col-sm-10\">\n                                <div class=\"form-check form-check-inline\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"expected_exception\">\n                                        <label class=\"form-check-label\" for=\"expected_exception\">Expected exception</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"expected_crash\">\n                                        <label class=\"form-check-label\" for=\"expected_crash\">Expected crash</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"ignore_whitespace\">\n                                        <label class=\"form-check-label\" for=\"ignore_whitespace\">Ignore whitespace</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"regex\">\n                                        <label class=\"form-check-label\" for=\"regex\">Regex</label>\n                                    </div>                \n                                    <div class=\"form-check form-check-inline\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"substring\">\n                                        <label class=\"form-check-label\" for=\"substring\">Substring</label>\n                                    </div>\n                            </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-12\">            \n                <button onclick=\"AutotestGenerator.exportConfigValues()\" type=\"button\" class=\"btn btn-success btn-sm mr-2 waves-effect float-right\">Save & Export</button>\n            </div>\n        </div>\n    </div>\n</body>\n\n</html>");

define("plugins/etf.atgenerator/atgenerator",[], function(require, exports, module) {
    main.consumes = ["Plugin", "commands", "tabManager", "fs"];
    main.provides = ["atgenerator"];
    
    return main;

    function main(options, imports, register) {
        var Plugin = imports.Plugin;
        var commands = imports.commands;
        var tabs = imports.tabManager;
        var fs = imports.fs;
        
        var plugin = new Plugin("Autotest Generator Plugin", main.consumes);
    
        var runner = require("./atgenerator/scripts/openGenerator");
        var _html = require("text!./atgenerator/html/index.html");
        
        commands.addCommand({
                name: "Open Tab",
                bindKey: { 
                    win: "Ctrl-Shift-O" 
                },
                exec: function() { 
                    openNewTab();
                }
            }, plugin);   
        
        function load() {
             
        }
        
        function findTab() {
            var path = tabs.focussedTab && tabs.focussedTab.path;
            if (path) return path.replace(/^\//, "");
            
            var foundActive;
            if (tabs.getPanes().every(function(pane) {
                var tab = pane.activeTab;
                if (tab && tab.path) {
                    if (foundActive) return false;
                    foundActive = tab;
                }
                return true;
            }) && foundActive) {
                return foundActive.path.replace(/^\//, "");
            }
            return false;
        }
        function openNewTab() {
            var homework_url = "https://zamger.etf.unsa.ba/api_v5/homework/";
            var path = findTab() || "";
            if (!path || path.trim() == "") {
                alert("Nije izabran projekat.");
                return;
            }
            var project_path = path.substring(0, path.lastIndexOf("/"));
            var homework_path = project_path + "/.zadaca";
            fs.exists(homework_path, function(file_exists) {
               if(file_exists) {
                   fs.readFile(homework_path, function(err, content) {
                       content = JSON.parse(content);
                       var homeworkID = content['id'];
                       var taskID = content['zadatak'];
                       homework_url = homework_url + homeworkID + "/" + taskID;
                       runner.openGenerator(null,homework_url, false);
                        var tab = tabs.open({
                           active: true,
                           editorType: "preview",
                           path: "/atgenerator/html/index.html",
                           title: "Autotest Generator"
                        });
                   });
               } else {
                   alert("Trenutno izabrani projekat nije zadaća");
               }
            });
            
        }
        plugin.on("load", function() {
            load();
        });
        plugin.on("unload", function() {
        
        });
        plugin.freezePublicAPI({
            
        });
        
        register(null, {
            "atgenerator": plugin
        });
    }
});
