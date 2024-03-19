

import type { ColorsValue, RadiiValue, SizesValue, SpaceValue } from './Token';

export interface ThemedTypings {
  colors: ColorsValue |  "white" | "black" | "transparent" | "gray50" | "gray100" | "gray200" | "gray300" | "gray400" | "gray500" | "gray600" | "gray700" | "gray800" | "gray900" | "violet50" | "violet100" | "violet200" | "violet300" | "violet400" | "violet500" | "violet600" | "violet700" | "violet800" | "violet900" | "green50" | "green100" | "green200" | "green300" | "green400" | "green500" | "green600" | "yellow50" | "yellow100" | "yellow200" | "yellow300" | "yellow400" | "yellow500" | "yellow600" | "red50" | "red100" | "red200" | "red300" | "red400" | "red500" | "red600" | "blue50" | "blue100" | "blue200" | "blue300" | "blue400" | "blue500" | "blue600" | "blue700" | "blue800" | "blue900" 
radii: RadiiValue | `${number}` | `${number}px` | `${any}px` |  "1" | "2" | "sm" | "md" 
sizes: SizesValue | `${number}` | `${number}px` | `${any}px` |  "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "12" | "14" | "16" | "18" | "20" | "24" | "28" | "30" | "32" | "40" | "48" | "px" | "0.5" 
space: SpaceValue | `${number}` | `${number}px` | `${any}px` |  "0" | "-0" | "1" | "-1" | "2" | "-2" | "3" | "-3" | "4" | "-4" | "5" | "-5" | "6" | "-6" | "7" | "-7" | "8" | "-8" | "9" | "-9" | "10" | "-10" | "12" | "-12" | "14" | "-14" | "16" | "-16" | "18" | "-18" | "20" | "-20" | "24" | "-24" | "28" | "-28" | "30" | "-30" | "32" | "-32" | "40" | "-40" | "48" | "-48" | "px" | "-px" | "0.5" | "-0.5" 
typography: "h1" 
}
