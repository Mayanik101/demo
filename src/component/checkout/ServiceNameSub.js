import React from "react";
import { Input } from "reactstrap";
import { SerNm, SerPrice, SerSubCol, SerSubMain, SerSubRow, SerTitle } from "../../Style/LayoutStyle";

export default function ServiceNameSub() {
  return (
    <>
    <SerSubMain>
      <SerTitle>Men's Haircut</SerTitle>
      <SerSubRow>
        <SerSubCol>
          <SerNm>Men's Haircut</SerNm>
        </SerSubCol>
        <SerSubCol>
          <SerPrice>$ 40</SerPrice>
          <Input name="radio1" type="radio" checked />
        </SerSubCol>
      </SerSubRow>
      </SerSubMain>
    </>
  );
}
