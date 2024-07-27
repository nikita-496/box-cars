import { FC } from "react";

import { Icon } from "@/components/base/icon";
import {
  FormButton,
  IconWrapper,
  SearchFormStyled,
  SearchFormGroup,
  SearchSelect,
} from "@/components/forms/searchForm.styles";

export const SearchForm: FC = () => {
  return (
    <SearchFormStyled>
      <SearchFormGroup>
        <SearchSelect menuItems={["Audi", "Honda"]} defaultValue="Any Makes" />
        <SearchSelect menuItems={["Audi", "Honda"]} defaultValue="Any Models" />
        <SearchSelect menuItems={["Audi", "Honda"]} defaultValue="Any Price" />
      </SearchFormGroup>

      <FormButton
        startIcon={
          <IconWrapper>
            <Icon icon="Search" fill="#fff" fontSize="inherit" />
          </IconWrapper>
        }
        color="blueDark"
      >
        Search 0 Cars
      </FormButton>
    </SearchFormStyled>
  );
};
