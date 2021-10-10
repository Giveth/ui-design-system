import { brandColors } from "../src/common/colors";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'GIV - Dark',
    values: [
      {
        name: 'GIV - Dark',
        value: brandColors.giv[600],
      },
      {
        name: 'GIV - Light',
        value: brandColors.giv['000'],
      },
    ],
  },
}