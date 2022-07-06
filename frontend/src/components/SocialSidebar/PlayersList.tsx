import { Heading, StackDivider, Tooltip, VStack } from '@chakra-ui/react';
import { ListItem } from '@material-ui/core';
import React from 'react';
import useCoveyAppState from '../../hooks/useCoveyAppState';
import usePlayersInTown from '../../hooks/usePlayersInTown';
import PlayerName from './PlayerName';

/**
 * Lists the current players in the town, along with the current town's name and ID
 *
 * Town name is shown in an H2 heading with a ToolTip that shows the label `Town ID: ${theCurrentTownID}`
 *
 * Players are listed in an OrderedList below that heading, sorted alphabetically by userName (using a numeric sort with base precision)
 *
 * Each player is rendered in a list item, rendered as a <PlayerName> component
 *
 * See `usePlayersInTown` and `useCoveyAppState` hooks to find the relevant state.
 *
 */
export default function PlayersInTownList(): JSX.Element {
  const { currentTownFriendlyName, currentTownID } = useCoveyAppState();
  const players = usePlayersInTown();
  const copyOfArrayPassedToComponent = players.concat([]);
  copyOfArrayPassedToComponent.sort((p1, p2) =>
  p1.userName.localeCompare(p2.userName, undefined, { numeric: true, sensitivity: 'base' }),
);
  const label = `Town ID: ${currentTownID}`;
  return (
    <VStack
      align='left'
      height='100%'
      divider={<StackDivider borderColor='gray.200' />}
      borderRadius='4px'>
      <Tooltip label= {label}>
        <Heading fontSize='xl' as='h2'>
        Current town: {currentTownFriendlyName}
      </Heading>
      </Tooltip>
      <ol>
      {copyOfArrayPassedToComponent.map(p => (
        <ListItem key={p.id}>        
          <PlayerName player={p} />
        </ListItem>
      ))}
      </ol>
    </VStack>
  );
}
