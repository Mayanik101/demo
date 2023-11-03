import React from "react";
import { Image } from "react-bootstrap";
import { Input } from "reactstrap";
import {
  SerOptMain,
  SerOtpSubCol,
  SerOtpSubRow,
  SerSubCol,
  SerSubRow,
  SerTitle,
  Soptitle,
  SoptPrice,
} from "../../Style/LayoutStyle";

export default function ServiceOpt() {
  return (
    <>
      <SerOptMain>
        <SerTitle>Select Style</SerTitle>
        <SerOtpSubRow>
          <SerOtpSubCol>
            <Image
              src={
                "https://d1eev3p5e8wb8x.cloudfront.net/225x296/ms-assets/no_image_2023.png"
              }
              alt={"service"}
              width="50"
              height={"50"}
            />
            <Soptitle>Beard Trim</Soptitle>
          </SerOtpSubCol>
          <SerSubCol>
            <SoptPrice> $ 32</SoptPrice>
            <Input
              type="checkbox"
              name="checkbox-layout-checked"
              checked
            ></Input>
          </SerSubCol>
        </SerOtpSubRow>
        <SerOtpSubRow>
          <SerOtpSubCol>
            <Image
              src={
                "https://d1eev3p5e8wb8x.cloudfront.net/225x296/ms-assets/no_image_2023.png"
              }
              alt={"service"}
              width="50"
              height={"50"}
            />
            <Soptitle>Beard Trim</Soptitle>
          </SerOtpSubCol>
          <SerSubCol>
            <SoptPrice> $ 32</SoptPrice>
            <Input
              type="checkbox"
              name="checkbox-layout-checked"
            ></Input>
          </SerSubCol>
        </SerOtpSubRow>
        <SerOtpSubRow>
          <SerOtpSubCol>
            <Image
              src={
                "https://d1eev3p5e8wb8x.cloudfront.net/225x296/ms-assets/no_image_2023.png"
              }
              alt={"service"}
              width="50"
              height={"50"}
            />
            <Soptitle>Beard Trim</Soptitle>
          </SerOtpSubCol>
          <SerSubCol>
            <SoptPrice> $ 32</SoptPrice>
            <Input
              type="checkbox"
              name="checkbox-layout-checked"
            ></Input>
          </SerSubCol>
        </SerOtpSubRow>
        
      </SerOptMain>
    </>
  );
}
