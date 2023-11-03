import styled from "styled-components";

export const SMMain = styled.div`
  padding: 20px;
`;
export const SHMainRow = styled.div`
display: flex;
    justify-content: space-between;
`;
export const SHMainCol = styled.div``;
export const SMFtr = styled.div``;
export const ServHeadMain = styled.div`
  border-bottom: 2px dashed #ccc;
`;
export const HTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 25px;
`;
export const SPriceR = styled.div`
  color: #646674;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 25px;
`;

export const SerSubMain = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;
export const SerTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 25px;
`;
export const SerSubRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SerSubCol = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 0.12em solid #0175ff;
    border-radius: 50%;
    margin-left: 14px;
    background-color: transparent;
    position: relative;
  }
  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 0.12em solid #0175ff;
    border-radius: 50%;
    margin-left: 14px;
    background-color: transparent;
    position: relative;
  }

  input[type="radio"]:checked::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #0175ff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: appear 0.8s;
  }
  @keyframes appear {
    0% {
      transform: translate(-50%, -50%) scale(0);
      background-color: #fff;
    }
    45% {
      transform: translate(-50%, -50%) scale(1.6);
      background-color: #59a2f8;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.7);
      background-color: #1e84fc;
    }
    55% {
      transform: translate(-50%, -50%) scale(1.6);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      background-color: #0175ff;
    }
  }
`;
export const SerNm = styled.div`
  font-size: 18px;
  color: #33373b;
`;
export const SerPrice = styled.div`
  font-size: 18px;
  color: #33373b;
`;
export const Soptitle = styled.div`
f    font-size: 18px;
    color: #33373b;
    font-weight: 400;
`;
export const SoptPrice = styled.div`
  font-size: 18px;
  color: #33373b;
  font-weight: 400;
`;
export const SerOptMain = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;
export const SerOtpSubRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const SerOtpSubCol = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 25px;
  }
`;

export const SFMain = styled.div`
  box-shadow: #f4f4f4 0px -7px 14px;
    padding: 25px 20px 20px 20px;
`;
export const SFRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SFCol = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemSelect = styled.div`
  font-weight: 600;
  line-height: 30px;
  position: relative;
  text-align: center;
  background-color: #fff;
  border: 0.12em solid #000000;
  color: #272c3f;
  height: 40px;
  width: 90px;
  font-size: 12px;
  border-radius: 5px;
  display: flex;
`;

export const ItemSelectAdd = styled.div`
  animation: _1yY_v 0.2s ease;
  opacity: 1;
  color: #1c1c1c;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
export const ItemSelectPlus = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 33.33333%;
  height: 100%;
  display: inline-block;
  opacity: 1;
  transform: translateZ(0);
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemSelectMinus = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 33.33333%;
  display: inline-block;
  opacity: 1;
  height: 100%;
  transform: translateZ(0);
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemCount = styled.div`
  position: absolute;
  left: 33.33333%;
  top: 0;
  font-size: 20px;
  height: 100%;
  width: 33.33333%;
  display: inline-block;
  opacity: 1;
  bottom: 0;
  transform: translateZ(0);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AddButton = styled.a`
  background: #000;
  color: #fff;
  padding: 15px 40px 15px 40px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 6px;
`;
