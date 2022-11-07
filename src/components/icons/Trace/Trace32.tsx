import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconTrace32: FC<IIconProps> = ({
	size = 32,
	color = 'currentColor',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M25.8926 5.21333C25.7988 5.0916 25.6816 4.98974 25.548 4.91367C25.4144 4.83761 25.2671 4.78886 25.1145 4.77025C24.9619 4.75164 24.8071 4.76354 24.6592 4.80527C24.5112 4.84701 24.373 4.91773 24.2526 5.01333C24.1234 5.10202 24.0137 5.21627 23.9303 5.34902C23.847 5.48177 23.7917 5.6302 23.768 5.78514C23.7442 5.94009 23.7525 6.09826 23.7923 6.24988C23.8321 6.40149 23.9025 6.54335 23.9993 6.66667C25.3748 8.44491 26.1163 10.6319 26.106 12.88V19.1733C26.1025 21.8576 25.0383 24.4318 23.1452 26.3349C21.2521 28.238 18.6836 29.3157 15.9993 29.3333C15.8356 29.3158 15.6701 29.3329 15.5134 29.3836C15.3568 29.4342 15.2126 29.5173 15.0901 29.6273C14.9677 29.7373 14.8698 29.8719 14.8027 30.0222C14.7357 30.1726 14.7011 30.3354 14.7011 30.5C14.7011 30.6646 14.7357 30.8274 14.8027 30.9778C14.8698 31.1281 14.9677 31.2627 15.0901 31.3727C15.2126 31.4827 15.3568 31.5658 15.5134 31.6164C15.6701 31.6671 15.8356 31.6842 15.9993 31.6667C19.3152 31.6631 22.4943 30.3443 24.839 27.9997C27.1836 25.655 28.5024 22.4759 28.506 19.16V12.8533C28.5158 10.0857 27.5954 7.39512 25.8926 5.21333Z'
			fill={color}
		/>
		<path
			d='M11.9993 28.52C10.1646 27.7435 8.59872 26.4447 7.49636 24.7853C6.394 23.1258 5.80385 21.1789 5.7993 19.1867V16.6267C5.7993 16.3155 5.67569 16.017 5.45564 15.797C5.2356 15.577 4.93716 15.4533 4.62597 15.4533C4.31478 15.4533 4.01634 15.577 3.7963 15.797C3.57626 16.017 3.45264 16.3155 3.45264 16.6267V19.1467C3.45264 21.6105 4.18194 24.0193 5.54865 26.0693C6.91536 28.1194 8.8583 29.719 11.1326 30.6667C11.4191 30.7863 11.7414 30.7876 12.0288 30.6701C12.3162 30.5527 12.5453 30.3261 12.666 30.04C12.7239 29.8966 12.7526 29.7431 12.7503 29.5885C12.748 29.4338 12.7148 29.2812 12.6527 29.1396C12.5906 28.998 12.5008 28.8702 12.3886 28.7638C12.2764 28.6574 12.144 28.5745 11.9993 28.52Z'
			fill={color}
		/>
		<path
			d='M4.62449 13.3333C4.9223 13.334 5.20923 13.2215 5.42711 13.0184C5.64499 12.8154 5.77752 12.5371 5.79782 12.24C5.88469 10.4968 6.41977 8.80538 7.35136 7.32936C8.28295 5.85334 9.57954 4.64259 11.1158 3.81413C12.6521 2.98567 14.3761 2.56751 16.1212 2.60007C17.8663 2.63263 19.5735 3.11481 21.0778 4.00001C21.3399 4.15218 21.6504 4.19828 21.9454 4.12886C22.2404 4.05944 22.4977 3.87976 22.6645 3.62667C22.8194 3.35777 22.8615 3.03843 22.7816 2.73857C22.7016 2.4387 22.5061 2.18272 22.2378 2.02667C20.3905 0.972089 18.3045 0.406638 16.1775 0.383893C14.0505 0.361148 11.9529 0.881864 10.0835 1.8967C8.21402 2.91154 6.63465 4.3869 5.495 6.18297C4.35535 7.97905 3.69315 10.0364 3.57116 12.16C3.56656 12.4523 3.67252 12.7356 3.86782 12.9532C4.06312 13.1707 4.33337 13.3065 4.62449 13.3333Z'
			fill={color}
		/>
		<path
			d='M24.7196 19.1467V12.8533C24.7196 10.5406 23.8009 8.32267 22.1655 6.68736C20.5302 5.05204 18.3123 4.13333 15.9996 4.13333C15.0942 4.13939 14.195 4.28326 13.3329 4.55999C13.182 4.60272 13.0412 4.67526 12.9188 4.77334C12.7964 4.87142 12.6949 4.99305 12.6203 5.13102C12.5457 5.269 12.4996 5.42053 12.4846 5.57666C12.4695 5.73278 12.486 5.89033 12.5329 6.03999C12.5798 6.18561 12.6549 6.32052 12.7541 6.43696C12.8533 6.5534 12.9746 6.64908 13.1109 6.71847C13.2472 6.78787 13.3959 6.82962 13.5484 6.84133C13.7009 6.85303 13.8543 6.83445 13.9996 6.78666C14.9591 6.47027 15.98 6.38604 16.9784 6.54088C17.9768 6.69572 18.9242 7.08522 19.7428 7.67738C20.5614 8.26954 21.2279 9.04746 21.6874 9.94724C22.1469 10.847 22.3864 11.843 22.3862 12.8533V19.1467C22.3687 19.3103 22.3858 19.4759 22.4365 19.6325C22.4871 19.7892 22.5702 19.9334 22.6802 20.0558C22.7902 20.1783 22.9248 20.2762 23.0752 20.3432C23.2255 20.4103 23.3883 20.4449 23.5529 20.4449C23.7175 20.4449 23.8803 20.4103 24.0307 20.3432C24.181 20.2762 24.3156 20.1783 24.4256 20.0558C24.5357 19.9334 24.6187 19.7892 24.6693 19.6325C24.72 19.4759 24.7371 19.3103 24.7196 19.1467Z'
			fill={color}
		/>
		<path
			d='M11.1448 6.94667C10.9129 6.7404 10.6087 6.63441 10.2988 6.6519C9.98897 6.6694 9.69865 6.80894 9.49144 7.04C8.06518 8.64045 7.27739 10.7096 7.27811 12.8533V19.1467C7.27648 20.9143 7.81209 22.6407 8.81393 24.097C9.81577 25.5533 11.2365 26.6707 12.8879 27.3012C14.5393 27.9316 16.3432 28.0453 18.0607 27.6272C19.7781 27.2091 21.328 26.279 22.5048 24.96C22.7099 24.7284 22.8146 24.4248 22.7958 24.116C22.7771 23.8071 22.6364 23.5184 22.4048 23.3133C22.1732 23.1082 21.8695 23.0035 21.5607 23.0223C21.2519 23.0411 20.9632 23.1817 20.7581 23.4133C19.8953 24.3779 18.7598 25.0575 17.502 25.3623C16.2443 25.667 14.9236 25.5825 13.715 25.1198C12.5064 24.6572 11.4668 23.8383 10.734 22.7716C10.0012 21.7049 9.60972 20.4408 9.61144 19.1467V12.8533C9.60808 11.279 10.1875 9.75917 11.2381 8.58667C11.3399 8.47295 11.4182 8.34027 11.4685 8.19624C11.5189 8.05221 11.5404 7.89965 11.5317 7.7473C11.5231 7.59496 11.4844 7.44582 11.418 7.30843C11.3516 7.17105 11.2588 7.04811 11.1448 6.94667Z'
			fill={color}
		/>
		<path
			d='M13.3333 19.1467C13.3025 18.8588 13.1663 18.5924 12.9509 18.3989C12.7355 18.2053 12.4562 18.0982 12.1666 18.0982C11.877 18.0982 11.5977 18.2053 11.3823 18.3989C11.167 18.5924 11.0308 18.8588 10.9999 19.1467C10.9999 20.4586 11.5211 21.7168 12.4488 22.6445C13.3765 23.5722 14.6347 24.0933 15.9466 24.0933C17.2585 24.0933 18.5168 23.5722 19.4444 22.6445C20.3721 21.7168 20.8933 20.4586 20.8933 19.1467V12.8533C20.8933 11.5414 20.3721 10.2832 19.4444 9.35552C18.5168 8.42784 17.2585 7.90668 15.9466 7.90668C14.6347 7.90668 13.3765 8.42784 12.4488 9.35552C11.5211 10.2832 10.9999 11.5414 10.9999 12.8533V14.7467C11.0308 15.0346 11.167 15.3009 11.3823 15.4945C11.5977 15.688 11.877 15.7951 12.1666 15.7951C12.4562 15.7951 12.7355 15.688 12.9509 15.4945C13.1663 15.3009 13.3025 15.0346 13.3333 14.7467V12.8533C13.4557 12.2505 13.7827 11.7086 14.259 11.3193C14.7353 10.93 15.3315 10.7173 15.9466 10.7173C16.5617 10.7173 17.1579 10.93 17.6342 11.3193C18.1105 11.7086 18.4375 12.2505 18.5599 12.8533V19.1467C18.4375 19.7495 18.1105 20.2915 17.6342 20.6807C17.1579 21.07 16.5617 21.2827 15.9466 21.2827C15.3315 21.2827 14.7353 21.07 14.259 20.6807C13.7827 20.2915 13.4557 19.7495 13.3333 19.1467Z'
			fill={color}
		/>
		<path
			d='M17.1726 18.52V14.7467C17.1726 14.4355 17.049 14.137 16.829 13.917C16.6089 13.697 16.3105 13.5733 15.9993 13.5733C15.6881 13.5733 15.3897 13.697 15.1696 13.917C14.9496 14.137 14.826 14.4355 14.826 14.7467V18.52C14.826 18.8312 14.9496 19.1296 15.1696 19.3497C15.3897 19.5697 15.6881 19.6933 15.9993 19.6933C16.3105 19.6933 16.6089 19.5697 16.829 19.3497C17.049 19.1296 17.1726 18.8312 17.1726 18.52Z'
			fill={color}
		/>
	</svg>
);
