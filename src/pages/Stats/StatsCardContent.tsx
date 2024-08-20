import {
  Box,
  CardContent,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SystemInfo } from "../../types";

const fetchSystemDetails = async () => {
  console.log("about to fetch system details");
  const response = await fetch("https://honeypot.beemango.xyz/system-info");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

const QUERY_CONFIG = {
  queryKey: ["system"],
  queryFn: fetchSystemDetails,
};

const StatsCardContent = () => {
  const { data } = useSuspenseQuery<SystemInfo>(QUERY_CONFIG);

  return (
    <CardContent className="space-y-4">
      <Box>
        {[
          ["Hostname", data.hostname],
          ["Platform", data.platform],
          ["Architecture", data.arch],
          ["CPU Temperature", `${data.cpuTemp.toFixed(1)}°C`],
        ].map(([label, value]) => (
          <Stack key={label} direction={"row"} spacing={1}>
            <Typography>{label}:</Typography>
            <Typography>{value}</Typography>
          </Stack>
        ))}
      </Box>
      <br />
      <Box>
        <Typography variant={"h3"}>CPU Usage</Typography>
        <Stack spacing={1}>
          {data.cpuUsage.map((usage, index) => (
            <Box key={index}>
              <Stack direction={"row"} spacing={1}>
                <Typography>Core {index}:</Typography>
                <Typography>{usage}%</Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={parseFloat(usage)}
                className="h-2"
              />
            </Box>
          ))}
        </Stack>
      </Box>
      <br />
      <Box>
        <Typography variant={"h3"}>Memory Usage</Typography>
        <Stack direction={"row"} spacing={1}>
          <Typography>Used</Typography>
          <Typography>
            {data.memoryUsage.used.toFixed(2)} /{" "}
            {data.memoryUsage.total.toFixed(2)} GB
          </Typography>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={Math.floor(
            (data.memoryUsage.used / data.memoryUsage.total) * 100
          )}
          className="h-2"
        />
      </Box>
    </CardContent>
  );
};

export default StatsCardContent;
