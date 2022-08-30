export const deviceSize = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptopS: 1024,
	laptopL: 1280,
	desktop: 1440,
};

export const mediaQueries = {
	mobileS: `@media (min-width: ${deviceSize.mobileS}px)`,
	mobileM: `@media (min-width: ${deviceSize.mobileM}px)`,
	mobileL: `@media (min-width: ${deviceSize.mobileL}px)`,
	tablet: `@media (min-width: ${deviceSize.tablet}px)`,
	laptopS: `@media (min-width: ${deviceSize.laptopS}px)`,
	laptopL: `@media (min-width: ${deviceSize.laptopL}px)`,
	desktop: `@media (min-width: ${deviceSize.desktop}px)`,
};
