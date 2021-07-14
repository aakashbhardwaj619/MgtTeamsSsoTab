import * as React from "react";
import * as MicrosoftTeams from "@microsoft/teams-js";
import { TeamsSSOProvider } from "@microsoft/mgt-teams-sso-provider";

export const MgtAuth = () => {
  TeamsSSOProvider.microsoftTeamsLib = MicrosoftTeams;
  TeamsSSOProvider.handleAuth();

  return (
      <div>
        Auth page
      </div>
  );
};
