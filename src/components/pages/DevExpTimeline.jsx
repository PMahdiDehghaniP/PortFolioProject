import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography, Slide } from "@mui/material";
import { devExp } from "../../constants/details";
import { HomeRepairServiceRounded } from "@mui/icons-material";
const DevExpTimeline = ({ loading }) => {
  return (
    <>
      <Timeline position="right" sx={{ direction: "ltr" }}>
        {devExp.map((item, index) => (
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 5}99ms` : "0ms",
            }}
          >
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="warning" variant="outlined">
                  <HomeRepairServiceRounded color="warning" />
                </TimelineDot>
                {index !== devExp.length - 1 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="gray">
                  {item.time}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {item.projectTitle}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};
export default DevExpTimeline;
