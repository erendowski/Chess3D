
/*
Not used atm but when I get to modules required this
is a hack to add a module and test without the hoopla.

It simply loads the module and makes it look like a normal
js THREE load and then adds the scripts that use it.  It works
*/

import * as THREE from "three";

class LoadingModule {
    static init() {
        console.log("Loading a new THREE");
        
        window.THREE = THREE;

        function appendScript(path) {
            // 1. Create a new script element
            const script = document.createElement("script");
            // 2. Set the source of the script
            script.src = path;
            // 3. Optionally set other attributes (e.g., async, defer)
            script.async = false; // Load the script asynchronously
            script.defer = true; // Load the script asynchronously
            // 4. Append the script to the head of the document
            document.head.appendChild(script);
        }

        /*
        <script type="text/javascript" src="js/Cell.js"></script>
        <script type="text/javascript" src="js/factory.js"></script>
        <script type="text/javascript" src="js/pgnParser.js"></script>
        <script type="text/javascript" src="js/gui.js"></script>
        <script type="text/javascript" src="js/chess.js"></script>
        */

        appendScript("js/Cell.js");
        appendScript("js/factory.js");
        appendScript("js/pgnParser.js");
        appendScript("js/gui.js");
        appendScript("js/chess.js");
    }
}

export { LoadingModule };
