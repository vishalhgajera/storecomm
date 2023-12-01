import * as React from 'react';
import {AccordionGroup,Accordion,AccordionDetails,AccordionSummary} from '@mui/joy';

export default function Filterbar() {
  return (
    <AccordionGroup disableDivider sx={{ maxWidth: 400 }}>
      <Accordion>
        <AccordionSummary>First accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Second accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Third accordion</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}