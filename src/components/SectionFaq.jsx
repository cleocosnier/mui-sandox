import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Box } from "@mui/material";

export default function SectionFaq() {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontWeight: "400",
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        Your Questions, <span className="italic">Answered</span>
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What is Vivian VIP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vivian VIP is a loyalty program for job candidates designed to
            engage healthcare professionals more deeply and add value to power
            users and recruiters. The program doesn’t cost anything to join but
            requires fulfillment of specific criteria to achieve VIP status,
            unlock access to exclusive product features and later unlock VIP
            Elite benefits (financial rewards). Candidates achieving VIP Elite
            status also become more appealing for future job opportunities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            What criteria do I need to fulfill to be considered hired on Vivian?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You must have interacted with your recruiter on Vivian in the 90
            days before you signed your contract. For example, if you signed
            your contract on July 1, you must have interacted with your
            recruiter on Vivian between April 1 and June 30.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>How much are Vivian VIP Elite rewards?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can earn between $50 and $1,000 in VIP Elite rewards based on
            the number of qualifying jobs you’ve been placed in through the
            Vivian platform. Your first qualifying job earns you $50, the second
            earns $200, the third earns $300 and the fourth earns $1,000, for a
            total of $1,550 in financial rewards possible. You can only earn one
            reward every 13 weeks.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
