import React from "react";
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default function (store) {
    // give it a name so it reuses the same window
    const win = window.open(null, "redux-devtools", "menubar=no,location=no,resizable=yes,scrollbars=no,status=no");
    if (!win) {
        console.error("DevTools popup blocked."); // eslint-disable-line no-console
        return;
    }
    // reload in case it's reusing the same window with the old content
    win.location.reload();

    // wait a little bit for it to reload, then render
    setTimeout(() => {
        React.render(
            <DebugPanel top right bottom left >
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        , win.document.body);
    }, 10);
}
