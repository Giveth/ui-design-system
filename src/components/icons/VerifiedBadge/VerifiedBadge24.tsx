import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconVerifiedBadge24: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<g clipPath='url(#clip0_519_51785)'>
			<path
				d='M22.72 10.35L20.88 8.86999C20.7324 8.75222 20.618 8.59814 20.5478 8.42284C20.4777 8.24754 20.4543 8.05704 20.48 7.86999L20.73 5.52999C20.7647 5.21906 20.7292 4.9043 20.626 4.60893C20.5228 4.31357 20.3547 4.04513 20.1339 3.82342C19.9132 3.60172 19.6455 3.4324 19.3506 3.32796C19.0557 3.22352 18.7411 3.18662 18.43 3.21999L16.08 3.46999C15.8929 3.49563 15.7024 3.47225 15.5271 3.40213C15.3518 3.33201 15.1977 3.21756 15.08 3.06999L13.63 1.25999C13.4272 1.0268 13.1768 0.839829 12.8956 0.711702C12.6144 0.583575 12.309 0.517273 12 0.517273C11.691 0.517273 11.3856 0.583575 11.1044 0.711702C10.8232 0.839829 10.5727 1.0268 10.37 1.25999L8.88998 3.09999C8.77221 3.24756 8.61813 3.36201 8.44283 3.43213C8.26754 3.50225 8.07703 3.52563 7.88998 3.49999L5.56998 3.24999C5.2589 3.21662 4.9443 3.25352 4.64938 3.35796C4.35447 3.4624 4.08676 3.63172 3.86602 3.85342C3.64527 4.07513 3.47711 4.34357 3.37395 4.63893C3.27079 4.9343 3.23526 5.24906 3.26998 5.55999L3.51998 7.89999C3.54562 8.08704 3.52224 8.27754 3.45212 8.45284C3.382 8.62814 3.26755 8.78222 3.11998 8.89999L1.27998 10.35C1.03595 10.5458 0.839011 10.794 0.703686 11.0761C0.568362 11.3582 0.498108 11.6671 0.498108 11.98C0.498108 12.2929 0.568362 12.6018 0.703686 12.8839C0.839011 13.166 1.03595 13.4141 1.27998 13.61L3.11998 15.09C3.26679 15.2084 3.38069 15.3626 3.45074 15.5377C3.52079 15.7128 3.54463 15.903 3.51998 16.09L3.26998 18.44C3.23532 18.7503 3.27129 19.0643 3.37519 19.3587C3.4791 19.6531 3.64825 19.9202 3.86998 20.14C4.08659 20.3661 4.35327 20.5382 4.64854 20.6424C4.94381 20.7466 5.25943 20.78 5.56998 20.74L7.91998 20.49C8.10703 20.4643 8.29754 20.4877 8.47283 20.5578C8.64813 20.628 8.80221 20.7424 8.91998 20.89L10.4 22.73C10.5958 22.974 10.8439 23.171 11.1261 23.3063C11.4082 23.4416 11.7171 23.5119 12.03 23.5119C12.3429 23.5119 12.6518 23.4416 12.9339 23.3063C13.216 23.171 13.4641 22.974 13.66 22.73L15.14 20.89C15.2577 20.7424 15.4118 20.628 15.5871 20.5578C15.7624 20.4877 15.9529 20.4643 16.14 20.49L18.49 20.74C18.8005 20.78 19.1161 20.7466 19.4114 20.6424C19.7067 20.5382 19.9734 20.3661 20.19 20.14C20.4117 19.9202 20.5809 19.6531 20.6848 19.3587C20.7887 19.0643 20.8246 18.7503 20.79 18.44L20.54 16.09C20.5153 15.903 20.5392 15.7128 20.6092 15.5377C20.6793 15.3626 20.7932 15.2084 20.94 15.09L22.78 13.61C23.024 13.4141 23.2209 13.166 23.3563 12.8839C23.4916 12.6018 23.5619 12.2929 23.5619 11.98C23.5619 11.6671 23.4916 11.3582 23.3563 11.0761C23.2209 10.794 23.024 10.5458 22.78 10.35H22.72ZM12.4 15.05C12.2459 15.2505 12.051 15.4161 11.8283 15.5359C11.6055 15.6557 11.3599 15.7269 11.1077 15.7448C10.8554 15.7628 10.6022 15.7271 10.3647 15.6401C10.1272 15.553 9.91092 15.4167 9.72998 15.24L7.28998 12.8C7.19674 12.7067 7.12278 12.5961 7.07232 12.4742C7.02186 12.3524 6.99589 12.2218 6.99589 12.09C6.99589 11.9581 7.02186 11.8276 7.07232 11.7057C7.12278 11.5839 7.19674 11.4732 7.28998 11.38C7.38322 11.2867 7.49391 11.2128 7.61573 11.1623C7.73755 11.1119 7.86812 11.0859 7.99998 11.0859C8.13184 11.0859 8.26241 11.1119 8.38423 11.1623C8.50605 11.2128 8.61674 11.2867 8.70998 11.38L11 13.63L14.91 8.41999C15.0691 8.20781 15.306 8.06754 15.5686 8.03004C15.6986 8.01147 15.8309 8.01868 15.9582 8.05127C16.0854 8.08387 16.2049 8.14119 16.31 8.21999C16.415 8.29878 16.5035 8.39749 16.5705 8.51049C16.6374 8.62349 16.6814 8.74856 16.6999 8.87857C16.7185 9.00857 16.7113 9.14095 16.6787 9.26817C16.6461 9.39538 16.5888 9.51493 16.51 9.61999L12.4 15.05Z'
				fill={color}
			/>
		</g>
		<defs>
			<clipPath id='clip0_519_51785'>
				<rect width={size} height={size} fill='white' />
			</clipPath>
		</defs>
	</svg>
);