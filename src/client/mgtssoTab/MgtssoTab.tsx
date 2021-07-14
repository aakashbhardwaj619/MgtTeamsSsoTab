import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
import { HttpMethod, TeamsSSOProvider } from '@microsoft/mgt-teams-sso-provider';
import { Providers, Person } from "@microsoft/mgt-react";

/**
 * Implementation of the MGTSSO content page
 */
export const MgtssoTab = () => {
    TeamsSSOProvider.microsoftTeamsLib = microsoftTeams;
    Providers.globalProvider = new TeamsSSOProvider({
        clientId: 'd9c71e8b-c8d8-48d2-81e6-f5e651221a47',
        authPopupUrl: 'https://a190590bcdf3.ngrok.io/MgtAuth/index.html',
        ssoUrl: 'https://teamsssoobofa.azurewebsites.net/api/TeamsSsoObo?code=xX81Oz4ad1LKpkSrRm9AJZzSq4Ftmc9GCxPZr06zdnqquhib65o6ew==',
        httpMethod: HttpMethod.POST
    }) as any;

    const [{ inTeams, theme, context }] = useTeams();
    const [entityId, setEntityId] = useState<string | undefined>();

    useEffect(() => {
        if (inTeams === true) {
            microsoftTeams.appInitialization.notifySuccess();
        } else {
            setEntityId("Not in Microsoft Teams");
        }
    }, [inTeams]);

    useEffect(() => {
        if (context) {
            setEntityId(context.entityId);
        }
    }, [context]);

    /**
     * The render() method to create the UI of the tab
     */
    return (
        <Provider theme={theme}>
            <Flex fill={true} column styles={{
                padding: ".8rem 0 .8rem .5rem"
            }}>
                <Flex.Item>
                    <Header content="This is your tab" />
                </Flex.Item>
                <Flex.Item>
                    <div>
                        <div>
                            <Text content={entityId} />
                        </div>
                        <Person personQuery="me"></Person>
                        <div>
                            <Button onClick={() => alert("It worked!")}>A sample button</Button>
                        </div>
                    </div>
                </Flex.Item>
                <Flex.Item styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Text size="smaller" content="(C) Copyright Aakash Bhardwaj" />
                </Flex.Item>
            </Flex>
        </Provider>
    );
};
