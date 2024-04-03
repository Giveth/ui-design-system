import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconEstimated32: FC<IIconProps> = ({ color = 'currentColor' }) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M0 2.66667C0 1.19391 1.19391 0 2.66667 0H29.3333C30.8061 0 32 1.19391 32 2.66667V29.3333C32 30.8061 30.8061 32 29.3333 32H2.66667C1.19391 32 0 30.8061 0 29.3333V2.66667Z'
			fill={color}
		/>
		<path
			d='M5.31598 20.1757C4.58743 20.1757 3.98753 19.5901 4.023 18.8624C4.10535 17.1731 4.40882 15.7711 4.93342 14.6563C5.58845 13.2644 6.43884 12.2515 7.48459 11.6176C8.54184 10.9836 9.65654 10.6667 10.8287 10.6667C12.0009 10.6667 13.0696 10.9767 14.0349 11.5969C15.0117 12.2033 16.1264 13.1611 17.379 14.4703C18.2294 15.3523 18.9074 15.9724 19.4131 16.3307C19.9302 16.6891 20.4933 16.8682 21.1023 16.8682C22.0906 16.8682 22.8721 16.441 23.4467 15.5866C23.7771 15.0873 24.0087 14.4604 24.1415 13.7059C24.3216 12.6828 25.124 11.8243 26.1628 11.8243C27.1805 11.8243 28.024 12.643 27.944 13.6575C27.8288 15.1166 27.5364 16.3454 27.0666 17.3437C26.423 18.7356 25.5726 19.7485 24.5154 20.3824C23.4582 21.0164 22.3435 21.3333 21.1713 21.3333C19.9991 21.3333 18.9304 21.0301 17.9651 20.4238C16.9998 19.8036 15.8851 18.8389 14.621 17.5297C13.7821 16.6477 13.1041 16.0276 12.5869 15.6693C12.0698 15.3109 11.5067 15.1318 10.8977 15.1318C9.96682 15.1318 9.19687 15.5245 8.5878 16.3101C8.15157 16.8735 7.88068 17.7123 7.77515 18.8265C7.7051 19.5662 7.11852 20.1757 6.3755 20.1757H5.31598Z'
			fill='white'
		/>
	</svg>
);