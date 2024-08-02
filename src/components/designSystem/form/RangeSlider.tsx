import type { FC } from "react";

import { useState } from "react";

import type { SliderProps } from "@/components/base/form";

import { Slider } from "@/components/base/form";

type RangeSliderProps = SliderProps;

const minDistance = 10;

export const RangeSlider: FC<RangeSliderProps> = ({ ...rest }) => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (!newValue[0] || !newValue[1] || !value[0] || !value[1]) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    return;
  };

  return (
    <Slider
      getAriaLabel={() => "Minimum distance"}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      disableSwap
      {...rest}
    />
  );
};
