import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  slug?: StringNullableFilter;
  title?: StringFilter;
};
