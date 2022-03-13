import React, { FC } from 'react';
import { IIconProps } from '../icons/giv-economy/type';

export const IconGnosisChain: FC<IIconProps> = ({ size = 16 }) => {
	const size16 = (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8Z'
				fill='#04795B'
			/>
			<path
				d='M5.82646 8.72463C6.14153 8.72463 6.43238 8.61965 6.66668 8.43794L4.74385 6.51581C4.56206 6.74597 4.45705 7.03671 4.45705 7.35573C4.453 8.11085 5.06702 8.72463 5.82646 8.72463Z'
				fill='#EFEFEF'
			/>
			<path
				d='M11.5465 7.35164C11.5465 7.03668 11.4415 6.74593 11.2597 6.51172L9.33691 8.43385C9.56715 8.61556 9.85801 8.72055 10.1771 8.72055C10.9325 8.7246 11.5465 8.11081 11.5465 7.35164Z'
				fill='#EFEFEF'
			/>
			<path
				d='M12.5156 5.26398L11.6633 6.116C11.946 6.4552 12.1157 6.88326 12.1157 7.35974C12.1157 8.42982 11.2472 9.298 10.1767 9.298C9.7041 9.298 9.27186 9.1284 8.93253 8.84574L7.99941 9.77854L7.06626 8.84574C6.72695 9.1284 6.29874 9.298 5.82207 9.298C4.75159 9.298 3.88311 8.42982 3.88311 7.35974C3.88311 6.88728 4.05277 6.4552 4.33554 6.116L3.89925 5.6799L3.48319 5.26398C2.99845 6.06352 2.71973 6.99632 2.71973 7.99776C2.71973 10.9132 5.08285 13.2715 7.99535 13.2715C10.9079 13.2715 13.271 10.9092 13.271 7.99776C13.2791 6.99227 13.0004 6.05947 12.5156 5.26398Z'
				fill='#EFEFEF'
			/>
			<path
				d='M11.8169 4.35539C10.8596 3.34992 9.50225 2.71997 7.99956 2.71997C6.49684 2.71997 5.14359 3.34992 4.18217 4.35539C4.05292 4.49269 3.92769 4.63805 3.81055 4.78747L7.99551 8.97091L12.1805 4.78344C12.0755 4.63805 11.9502 4.48864 11.8169 4.35539ZM7.99956 3.40645C9.23567 3.40645 10.3829 3.88293 11.2433 4.75112L7.99956 7.99369L4.7558 4.75112C5.62025 3.88293 6.76345 3.40645 7.99956 3.40645Z'
				fill='#EFEFEF'
			/>
		</svg>
	);
	const size24 = (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z'
				fill='#04795B'
			/>
			<path
				d='M8.7397 13.0869C9.2123 13.0869 9.64858 12.9294 10 12.6569L7.11578 9.77368C6.8431 10.1189 6.68558 10.555 6.68558 11.0336C6.6795 12.1662 7.60054 13.0869 8.7397 13.0869Z'
				fill='#EFEFEF'
			/>
			<path
				d='M17.3193 11.0275C17.3193 10.555 17.1618 10.1189 16.8891 9.76758L14.0049 12.6508C14.3502 12.9233 14.7865 13.0808 15.2652 13.0808C16.3983 13.0869 17.3193 12.1662 17.3193 11.0275Z'
				fill='#EFEFEF'
			/>
			<path
				d='M18.7739 7.896L17.4954 9.17404C17.9196 9.68284 18.174 10.3249 18.174 11.0396C18.174 12.6448 16.8713 13.947 15.2656 13.947C14.5566 13.947 13.9083 13.6926 13.3993 13.2686L11.9996 14.6678L10.5999 13.2686C10.0909 13.6926 9.4486 13.947 8.7336 13.947C7.12788 13.947 5.82516 12.6448 5.82516 11.0396C5.82516 10.331 6.07964 9.68284 6.5038 9.17404L5.84936 8.51988L5.22528 7.896C4.49816 9.09532 4.08008 10.4945 4.08008 11.9967C4.08008 16.3699 7.62476 19.9072 11.9935 19.9072C16.3623 19.9072 19.907 16.3638 19.907 11.9967C19.9191 10.4884 19.501 9.08924 18.7739 7.896Z'
				fill='#EFEFEF'
			/>
			<path
				d='M17.7254 6.53314C16.2893 5.02494 14.2534 4.08002 11.9993 4.08002C9.74526 4.08002 7.71538 5.02494 6.27326 6.53314C6.07938 6.7391 5.89154 6.95714 5.71582 7.18126L11.9933 13.4564L18.2707 7.17522C18.1132 6.95714 17.9253 6.73302 17.7254 6.53314ZM11.9993 5.10974C13.8535 5.10974 15.5743 5.82446 16.865 7.12674L11.9993 11.9906L7.1337 7.12674C8.43038 5.82446 10.1452 5.10974 11.9993 5.10974Z'
				fill='#EFEFEF'
			/>
		</svg>
	);

	const size32 = (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z'
				fill='#04795B'
			/>
			<path
				d='M11.6529 17.4492C12.2831 17.4492 12.8648 17.2392 13.3334 16.8758L9.4877 13.0316C9.12413 13.4919 8.9141 14.0734 8.9141 14.7114C8.906 16.2216 10.134 17.4492 11.6529 17.4492Z'
				fill='#EFEFEF'
			/>
			<path
				d='M23.0931 14.7033C23.0931 14.0734 22.8831 13.4919 22.5195 13.0234L18.6738 16.8677C19.1343 17.2311 19.716 17.4411 20.3543 17.4411C21.8651 17.4492 23.0931 16.2216 23.0931 14.7033Z'
				fill='#EFEFEF'
			/>
			<path
				d='M25.0322 10.528L23.3275 12.2321C23.8931 12.9105 24.2324 13.7666 24.2324 14.7195C24.2324 16.8597 22.4954 18.5961 20.3544 18.5961C19.4092 18.5961 18.5447 18.2569 17.866 17.6915L15.9998 19.5571L14.1335 17.6915C13.4549 18.2569 12.5985 18.5961 11.6451 18.5961C9.50416 18.5961 7.7672 16.8597 7.7672 14.7195C7.7672 13.7746 8.10651 12.9105 8.67206 12.2321L7.79947 11.3599L6.96736 10.528C5.99787 12.1271 5.44043 13.9927 5.44043 15.9956C5.44043 21.8265 10.1667 26.543 15.9917 26.543C21.8168 26.543 26.543 21.8185 26.543 15.9956C26.5592 13.9846 26.0017 12.119 25.0322 10.528Z'
				fill='#EFEFEF'
			/>
			<path
				d='M23.6338 8.71083C21.7191 6.6999 19.0045 5.44 15.9991 5.44C12.9937 5.44 10.2872 6.6999 8.36435 8.71083C8.10584 8.98545 7.85539 9.27617 7.62109 9.575L15.991 17.9419L24.361 9.56694C24.1509 9.27617 23.9005 8.97734 23.6338 8.71083ZM15.9991 6.81296C18.4713 6.81296 20.7658 7.76593 22.4866 9.5023L15.9991 15.9874L9.5116 9.5023C11.2405 7.76593 13.5269 6.81296 15.9991 6.81296Z'
				fill='#EFEFEF'
			/>
		</svg>
	);

	const size40 = (
		<svg
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20Z'
				fill='#04795B'
			/>
			<path
				d='M14.5662 21.8116C15.3538 21.8116 16.081 21.5491 16.6667 21.0948L11.8596 16.2895C11.4052 16.8649 11.1426 17.5918 11.1426 18.3893C11.1325 20.2771 12.6676 21.8116 14.5662 21.8116Z'
				fill='#EFEFEF'
			/>
			<path
				d='M28.8659 18.3792C28.8659 17.5918 28.6033 16.8649 28.1489 16.2794L23.3418 21.0847C23.9174 21.539 24.6445 21.8014 25.4423 21.8014C27.3309 21.8116 28.8659 20.2771 28.8659 18.3792Z'
				fill='#EFEFEF'
			/>
			<path
				d='M31.2895 13.16L29.1587 15.29C29.8656 16.138 30.2897 17.2082 30.2897 18.3994C30.2897 21.0746 28.1185 23.245 25.4423 23.245C24.2607 23.245 23.1801 22.821 22.3318 22.1144L19.999 24.4464L17.6661 22.1144C16.8179 22.821 15.7473 23.245 14.5557 23.245C11.8795 23.245 9.70827 21.0746 9.70827 18.3994C9.70827 17.2182 10.1324 16.138 10.8393 15.29L9.7486 14.1998L8.70847 13.16C7.49661 15.1588 6.7998 17.4908 6.7998 19.9944C6.7998 27.2831 12.7076 33.1787 19.9889 33.1787C27.2702 33.1787 33.178 27.273 33.178 19.9944C33.1982 17.4807 32.5014 15.1487 31.2895 13.16Z'
				fill='#EFEFEF'
			/>
			<path
				d='M29.5423 10.8885C27.1489 8.37486 23.7556 6.79999 19.9989 6.79999C16.2421 6.79999 12.859 8.37486 10.4554 10.8885C10.1323 11.2318 9.81923 11.5952 9.52637 11.9687L19.9888 22.4274L30.4512 11.9587C30.1886 11.5952 29.8756 11.2217 29.5423 10.8885ZM19.9989 8.51619C23.0892 8.51619 25.9572 9.70739 28.1083 11.8779L19.9989 19.9843L11.8895 11.8779C14.0506 9.70739 16.9086 8.51619 19.9989 8.51619Z'
				fill='#EFEFEF'
			/>
		</svg>
	);

	const size64 = (
		<svg
			width='64'
			height='64'
			viewBox='0 0 64 64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32Z'
				fill='#04795B'
			/>
			<path
				d='M23.3059 34.8985C24.5661 34.8985 25.7295 34.4785 26.6667 33.7517L18.9754 26.0632C18.2483 26.9838 17.8282 28.1468 17.8282 29.4229C17.812 32.4433 20.2681 34.8985 23.3059 34.8985Z'
				fill='#EFEFEF'
			/>
			<path
				d='M46.1852 29.4066C46.1852 28.1468 45.7651 26.9838 45.038 26.0469L37.3467 33.7355C38.2676 34.4623 39.4311 34.8822 40.7075 34.8822C43.7292 34.8985 46.1852 32.4433 46.1852 29.4066Z'
				fill='#EFEFEF'
			/>
			<path
				d='M50.0635 21.056L46.6541 24.4641C47.7852 25.8209 48.4638 27.5332 48.4638 29.4391C48.4638 33.7194 44.9897 37.1921 40.7078 37.1921C38.8174 37.1921 37.0884 36.5137 35.7311 35.3831L31.9986 39.1143L28.266 35.3831C26.9088 36.5137 25.1959 37.1921 23.2893 37.1921C19.0073 37.1921 15.5334 33.7194 15.5334 29.4391C15.5334 27.5493 16.212 25.8209 17.3431 24.4641L15.598 22.7197L13.9337 21.056C11.9948 24.2542 10.8799 27.9854 10.8799 31.9912C10.8799 43.653 20.3324 53.086 31.9824 53.086C43.6325 53.086 53.085 43.6369 53.085 31.9912C53.1173 27.9692 52.0024 24.238 50.0635 21.056Z'
				fill='#EFEFEF'
			/>
			<path
				d='M47.2677 17.4217C43.4382 13.3998 38.009 10.88 31.9982 10.88C25.9874 10.88 20.5743 13.3998 16.7287 17.4217C16.2117 17.9709 15.7108 18.5523 15.2422 19.15L31.982 35.8838L48.722 19.1339C48.3018 18.5523 47.8009 17.9547 47.2677 17.4217ZM31.9982 13.6259C36.9427 13.6259 41.5316 15.5318 44.9733 19.0046L31.9982 31.9749L19.0232 19.0046C22.481 15.5318 27.0538 13.6259 31.9982 13.6259Z'
				fill='#EFEFEF'
			/>
		</svg>
	);

	switch (size.toString()) {
		case '16':
			return size16;
		case '24':
			return size24;
		case '32':
			return size32;
		case '40':
			return size40;
		case '64':
			return size64;
		default:
			return size16;
	}
};
