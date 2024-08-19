import { Card, CardHeader, Typography, LinearProgress } from "@mui/material";
import { Suspense } from "react";
import PageWrapper from "../components/PageWrapper";
import Section from "../components/Section";
import StatsCardContent from "./Stats/StatsCardContent";

const StatsPage = () => {
  return (
    <PageWrapper>
      <Section>
        <Card>
          <CardHeader
            title={<Typography variant="h2">System Information</Typography>}
          />
          <Suspense fallback={<LinearProgress />}>
            <StatsCardContent />
          </Suspense>
        </Card>
      </Section>
    </PageWrapper>
  );
};

export default StatsPage;
