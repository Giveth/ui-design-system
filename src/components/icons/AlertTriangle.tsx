import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconAlertTriangle: FC<IIconProps> = ({
	size = 16,
	color = 'currentColor',
}) => {
	const size16 = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M14.8591 12.3919L9.09312 2.58857C8.98862 2.41104 8.83155 2.26234 8.63892 2.15859C8.44629 2.05484 8.22544 2 8.00031 2C7.77517 2 7.55433 2.05484 7.3617 2.15859C7.16907 2.26234 7.012 2.41104 6.9075 2.58857L1.14085 12.3919C1.04235 12.5593 0.994037 12.7466 1.00059 12.9355C1.00714 13.1244 1.06833 13.3086 1.17825 13.4703C1.28816 13.632 1.44308 13.7657 1.62803 13.8585C1.81297 13.9513 2.02168 14 2.23397 14H13.766C13.9783 14 14.187 13.9513 14.372 13.8585C14.5569 13.7657 14.7118 13.632 14.8218 13.4703C14.9317 13.3086 14.9929 13.1244 14.9994 12.9355C15.006 12.7466 14.9577 12.5593 14.8591 12.3919ZM7.38311 6.03375C7.38311 5.88809 7.44811 5.7484 7.5638 5.6454C7.67948 5.5424 7.83639 5.48454 8 5.48454C8.16361 5.48454 8.32052 5.5424 8.4362 5.6454C8.55189 5.7484 8.61689 5.88809 8.61689 6.03375V9.32899C8.61689 9.47465 8.55189 9.61434 8.4362 9.71734C8.32052 9.82034 8.16361 9.8782 8 9.8782C7.83639 9.8782 7.67948 9.82034 7.5638 9.71734C7.44811 9.61434 7.38311 9.47465 7.38311 9.32899V6.03375ZM8.03084 12.3551H8.01357C7.7703 12.3544 7.53674 12.27 7.36176 12.1196C7.18677 11.9691 7.08391 11.7642 7.07467 11.5478C7.07023 11.4401 7.08992 11.3328 7.1326 11.232C7.17529 11.1312 7.2401 11.039 7.32327 10.9608C7.40643 10.8826 7.50627 10.8199 7.61696 10.7764C7.72764 10.7329 7.84696 10.7095 7.96792 10.7075H7.98519C8.22842 10.7078 8.46211 10.7918 8.63734 10.9419C8.81258 11.0921 8.91577 11.2968 8.92533 11.5132C8.93011 11.6211 8.91062 11.7287 8.86801 11.8298C8.82539 11.9309 8.76051 12.0234 8.67718 12.1018C8.59384 12.1802 8.49373 12.2431 8.38274 12.2866C8.27175 12.3301 8.1521 12.3534 8.03084 12.3551Z'
				fill={color}
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
				d='M21.7988 18.5879L13.5616 3.88286C13.4123 3.61655 13.1879 3.39351 12.9127 3.23789C12.6376 3.08227 12.3221 3 12.0004 3C11.6788 3 11.3633 3.08227 11.0881 3.23789C10.813 3.39351 10.5886 3.61655 10.4393 3.88286L2.20122 18.5879C2.0605 18.839 1.99148 19.1199 2.00084 19.4032C2.0102 19.6866 2.09761 19.9629 2.25464 20.2054C2.41166 20.448 2.63298 20.6486 2.89718 20.7878C3.16139 20.9269 3.45955 21 3.76282 21H20.2372C20.5405 21 20.8386 20.9269 21.1028 20.7878C21.367 20.6486 21.5883 20.448 21.7454 20.2054C21.9024 19.9629 21.9898 19.6866 21.9992 19.4032C22.0085 19.1199 21.9395 18.839 21.7988 18.5879ZM11.1187 9.05062C11.1187 8.83214 11.2116 8.6226 11.3769 8.4681C11.5421 8.31361 11.7663 8.22681 12 8.22681C12.2337 8.22681 12.4579 8.31361 12.6231 8.4681C12.7884 8.6226 12.8813 8.83214 12.8813 9.05062V13.9935C12.8813 14.212 12.7884 14.4215 12.6231 14.576C12.4579 14.7305 12.2337 14.8173 12 14.8173C11.7663 14.8173 11.5421 14.7305 11.3769 14.576C11.2116 14.4215 11.1187 14.212 11.1187 13.9935V9.05062ZM12.0441 18.5327H12.0194C11.6719 18.5316 11.3382 18.405 11.0882 18.1793C10.8382 17.9536 10.6913 17.6463 10.6781 17.3217C10.6718 17.1602 10.6999 16.9992 10.7609 16.848C10.8218 16.6968 10.9144 16.5585 11.0332 16.4412C11.152 16.3238 11.2947 16.2298 11.4528 16.1646C11.6109 16.0993 11.7814 16.0642 11.9542 16.0613H11.9788C12.3263 16.0616 12.6602 16.1877 12.9105 16.4129C13.1608 16.6382 13.3082 16.9452 13.3219 17.2698C13.3287 17.4316 13.3009 17.5931 13.24 17.7447C13.1791 17.8963 13.0864 18.0351 12.9674 18.1527C12.8483 18.2704 12.7053 18.3646 12.5468 18.4299C12.3882 18.4951 12.2173 18.5301 12.0441 18.5327Z'
				fill={color}
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
				d='M29.7183 24.6498L18.1862 4.22619C17.9772 3.85632 17.6631 3.54654 17.2778 3.3304C16.8926 3.11426 16.4509 3 16.0006 3C15.5503 3 15.1087 3.11426 14.7234 3.3304C14.3381 3.54654 14.024 3.85632 13.815 4.22619L2.28171 24.6498C2.0847 24.9986 1.98807 25.3887 2.00118 25.7822C2.01428 26.1758 2.13666 26.5596 2.35649 26.8965C2.57632 27.2333 2.88617 27.5119 3.25605 27.7052C3.62594 27.8985 4.04336 28.0001 4.46795 28H27.5321C27.9566 28.0001 28.3741 27.8985 28.7439 27.7052C29.1138 27.5119 29.4237 27.2333 29.6435 26.8965C29.8633 26.5596 29.9857 26.1758 29.9988 25.7822C30.0119 25.3887 29.9153 24.9986 29.7183 24.6498ZM14.7662 11.4036C14.7662 11.1002 14.8962 10.8092 15.1276 10.5946C15.359 10.38 15.6728 10.2595 16 10.2595C16.3272 10.2595 16.641 10.38 16.8724 10.5946C17.1038 10.8092 17.2338 11.1002 17.2338 11.4036V18.2687C17.2338 18.5722 17.1038 18.8632 16.8724 19.0778C16.641 19.2924 16.3272 19.4129 16 19.4129C15.6728 19.4129 15.359 19.2924 15.1276 19.0778C14.8962 18.8632 14.7662 18.5722 14.7662 18.2687V11.4036ZM16.0617 24.5732H16.0271C15.5406 24.5717 15.0735 24.3959 14.7235 24.0824C14.3735 23.7689 14.1678 23.3421 14.1493 22.8912C14.1405 22.667 14.1798 22.4433 14.2652 22.2334C14.3506 22.0234 14.4802 21.8313 14.6465 21.6683C14.8129 21.5053 15.0125 21.3747 15.2339 21.2841C15.4553 21.1935 15.6939 21.1447 15.9358 21.1406H15.9704C16.4568 21.1412 16.9242 21.3162 17.2747 21.629C17.6252 21.9419 17.8315 22.3684 17.8507 22.8191C17.8602 23.0439 17.8212 23.2682 17.736 23.4788C17.6508 23.6894 17.521 23.882 17.3544 24.0454C17.1877 24.2089 16.9875 24.3397 16.7655 24.4304C16.5435 24.521 16.3042 24.5695 16.0617 24.5732Z'
				fill={color}
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
		default:
			return size16;
	}
};
