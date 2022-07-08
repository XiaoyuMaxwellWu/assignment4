import { Box,Heading } from '@chakra-ui/react';
import React from 'react';
import { NO_TOPIC_STRING } from '../../classes/ConversationArea';
import useConversationAreas from '../../hooks/useConversationAreas';

/**
 * Displays a list of "active" conversation areas, along with their occupants 
 * 
 * A conversation area is "active" if its topic is not set to the constant NO_TOPIC_STRING that is exported from the ConverationArea file
 * 
 * If there are no active conversation areas, it displays the text "No active conversation areas"
 * 
 * If there are active areas, it sorts them by label ascending, using a numeric sort with base sensitivity
 * 
 * Each conversation area is represented as a Box:
 *  With a heading (H3) `{conversationAreaLabel}: {conversationAreaTopic}`,
 *  and an unordered list of occupants.
 * 
 * Occupants are *unsorted*, appearing in the order 
 *  that they appear in the area's occupantsByID array. Each occupant is rendered by a PlayerName component,
 *  nested within a ListItem.
 * 
 * Each conversation area component must subscribe to occupant updates by registering an `onOccupantsChange` listener on 
 *  its corresponding conversation area object.
 * It must register this listener when it is mounted, and remove it when it unmounts.
 * 
 * See relevant hooks: useConversationAreas, usePlayersInTown.
 */
export default function ConversationAreasList(): JSX.Element {
  const conversationAreas = useConversationAreas();
  const hasActiveConversationArea = conversationAreas.length > 0 && conversationAreas.find(c=>(c.topic === NO_TOPIC_STRING)) === undefined;

  return <Box>
    {!hasActiveConversationArea ? <Heading fontSize='xl' as='h2'>No active conversation areas</Heading> : 'has'} 

  </Box>
    


}