import React, { useState } from "react";
import { Input } from "reactstrap";
import { SerNm, SerPrice, SerSubCol, SerSubMain, SerSubRow, SerTitle } from "../../Style/LayoutStyle";

export default function ServiceNameSub({ data,title }) {
  return (
    <>
      <SerSubMain>
        <SerTitle>{title}</SerTitle>
        {
          data.map(d => {
            return (
              <SerSubRow>
                <SerSubCol>
                  <SerNm>{d.title}</SerNm>
                </SerSubCol>
                <SerSubCol>
                  <SerPrice>$ {d.price}</SerPrice>
                  <Input name="radio1" type="radio" checked />
                </SerSubCol>
              </SerSubRow>
            )
          })
        }

      </SerSubMain>
    </>
  );
}
