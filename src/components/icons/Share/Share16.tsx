import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconShare16: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M12 10.5C11.7306 10.4999 11.464 10.5544 11.2163 10.6602C10.9686 10.766 10.7449 10.9209 10.5587 11.1156L5.93372 8.5134C6.0233 8.17697 6.0233 7.82296 5.93372 7.48653L10.5587 4.88434C10.8955 5.23351 11.348 5.4479 11.8316 5.48736C12.3151 5.52682 12.7964 5.38864 13.1853 5.09869C13.5743 4.80875 13.8442 4.38694 13.9444 3.91229C14.0447 3.43765 13.9685 2.94273 13.73 2.52025C13.4916 2.09777 13.1073 1.77673 12.6491 1.61726C12.1909 1.4578 11.6903 1.47085 11.2411 1.65398C10.7919 1.8371 10.4248 2.17774 10.2087 2.61207C9.99262 3.0464 9.94229 3.54462 10.0672 4.0134L5.44215 6.61559C5.16589 6.32754 4.80976 6.12873 4.41957 6.04474C4.02939 5.96076 3.623 5.99544 3.25269 6.14431C2.88237 6.29319 2.56507 6.54946 2.3416 6.88016C2.11813 7.21085 1.99872 7.60084 1.99872 7.99996C1.99872 8.39908 2.11813 8.78908 2.3416 9.11977C2.56507 9.45046 2.88237 9.70673 3.25269 9.85561C3.623 10.0045 4.02939 10.0392 4.41957 9.95518C4.80976 9.8712 5.16589 9.67239 5.44215 9.38434L10.0672 11.9865C9.95992 12.3902 9.98178 12.8174 10.1297 13.208C10.2776 13.5987 10.544 13.9332 10.8917 14.1647C11.2394 14.3962 11.6509 14.513 12.0683 14.4988C12.4858 14.4846 12.8883 14.34 13.2194 14.0853C13.5505 13.8306 13.7936 13.4787 13.9145 13.0789C14.0354 12.679 14.0281 12.2514 13.8936 11.8559C13.7591 11.4605 13.5041 11.1171 13.1645 10.8739C12.8249 10.6307 12.4177 10.4999 12 10.5Z'
			fill={color}
		/>
	</svg>
);
