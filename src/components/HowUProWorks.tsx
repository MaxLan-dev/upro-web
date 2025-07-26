import { ReactElement } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function HowUProWorks(): ReactElement {
  return (
    <div className="grid gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>This is the content for HowUProWorks</CardTitle>
          <CardDescription>This page is rendered on the server</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
