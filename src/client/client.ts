// Default entry point for client scripts
// Automatically generated
// Please avoid from modifying to much...
import * as ReactDOM from "react-dom";
import * as React from "react";
/* import * as microsoftTeams from "@microsoft/teams-js";
import {TeamsSSOProvider} from '@microsoft/mgt-teams-sso-provider';

TeamsSSOProvider.microsoftTeamsLib = microsoftTeams;
TeamsSSOProvider.handleAuth(); */
export const render = (type: any, element: HTMLElement) => {
    ReactDOM.render(React.createElement(type, {}), element);
};
// Automatically added for the mgtssoTab tab
export * from "./mgtssoTab/MgtssoTab";
export * from "./mgtAuth/MgtAuth";
