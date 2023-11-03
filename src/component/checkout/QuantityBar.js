import React, { useState } from "react";
import {
  ItemCount,
  ItemSelect,
  ItemSelectAdd,
  ItemSelectMinus,
  ItemSelectPlus,
} from "../../Style/LayoutStyle";
import { Icon } from "@iconify/react";

export default function QuantityBar() {
  const [count, setCount] = useState(0);
  const [isAddItem, setIsItem] = useState(false);

  return (
    <ItemSelect>
      {/* <ItemSelectAdd>
      <Icon icon="typcn:plus" color="#dd2d2d" height={12} width={12} />
      </ItemSelectAdd> */}

        <>
          <ItemSelectPlus onClick={() => setCount(count >= 0 ? count + 1 : 0)}>
            +
          </ItemSelectPlus>
          <ItemSelectMinus onClick={() => setCount(count > 0 ? count - 1 : 0)}>
            -
          </ItemSelectMinus>
          <ItemCount>{count}</ItemCount>
        </>
    </ItemSelect>
  );
}
