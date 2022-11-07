import React, { FC } from 'react';
import { IIconProps } from '../type';

export const IconRocket16: FC<IIconProps> = ({
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
			d='M14.2666 12.1883L14.7662 12.2084L14.7662 12.2084L14.2666 12.1883ZM13.6726 12.4326L13.9548 12.0198L13.6726 12.4326ZM2.2703 12.1883L1.7707 12.2084L1.7707 12.2084L2.2703 12.1883ZM2.86434 12.4326L2.58213 12.0198L2.58213 12.0198L2.86434 12.4326ZM11.5442 4.67803L11.049 4.7469L11.5442 4.67803ZM10.6071 13.4615L11.0809 13.6214L10.6071 13.4615ZM10.1646 13.7693L10.1646 14.2693L10.1646 13.7693ZM4.96798 4.67802L5.46321 4.7469L4.96798 4.67802ZM5.90511 13.4615L5.43137 13.6214L5.43137 13.6214L5.90511 13.4615ZM6.34765 13.7693L6.34765 13.2693L6.34765 13.7693ZM6.6312 14.8039L6.18728 14.5738L6.18728 14.5738L6.6312 14.8039ZM6.92744 15.3041L6.92744 14.8041L6.92744 14.8041L6.92744 15.3041ZM9.50104 15.3041L9.50104 15.8041L9.50104 15.8041L9.50104 15.3041ZM9.79728 14.8039L10.2412 14.5738L9.79728 14.8039ZM5.78568 11.777C5.50954 11.777 5.28568 12.0009 5.28568 12.277C5.28568 12.5532 5.50954 12.777 5.78568 12.777V11.777ZM10.7684 12.777C11.0446 12.777 11.2684 12.5532 11.2684 12.277C11.2684 12.0009 11.0446 11.777 10.7684 11.777L10.7684 12.777ZM11.1497 8.47386C11.5051 8.78705 12.1749 9.30758 12.7698 9.99241C13.3717 10.6853 13.7963 11.4381 13.767 12.1683L14.7662 12.2084C14.8114 11.0834 14.1707 10.0803 13.5247 9.33662C12.8717 8.58489 12.1111 7.98819 11.8108 7.72358L11.1497 8.47386ZM13.9548 12.0198C13.6283 11.7966 13.1671 11.5071 12.6621 11.2717C12.1662 11.0405 11.5813 10.839 11.0196 10.839L11.0196 11.839C11.3651 11.839 11.7927 11.9697 12.2396 12.178C12.6774 12.3821 13.0891 12.6393 13.3904 12.8453L13.9548 12.0198ZM13.767 12.1683C13.768 12.1446 13.7773 12.1087 13.803 12.0745C13.8272 12.0423 13.8558 12.0248 13.8772 12.0166C13.9161 12.0018 13.9425 12.0114 13.9548 12.0198L13.3904 12.8453C13.6446 13.0191 13.9621 13.0549 14.2345 12.9506C14.5217 12.8407 14.7516 12.5732 14.7662 12.2084L13.767 12.1683ZM4.72613 7.72358C4.42584 7.98819 3.6652 8.58489 3.01221 9.33662C2.36624 10.0803 1.72555 11.0834 1.7707 12.2084L2.7699 12.1682C2.74059 11.4381 3.16524 10.6853 3.76715 9.99241C4.36204 9.30758 5.03183 8.78705 5.38725 8.47385L4.72613 7.72358ZM3.14654 12.8453C3.44781 12.6393 3.85955 12.3821 4.29731 12.178C4.74421 11.9697 5.17184 11.839 5.51728 11.839V10.839C4.95566 10.839 4.37069 11.0405 3.87482 11.2717C3.36981 11.5071 2.90861 11.7966 2.58213 12.0198L3.14654 12.8453ZM1.7707 12.2084C1.78535 12.5732 2.01522 12.8407 2.30239 12.9506C2.57487 13.0549 2.89236 13.0191 3.14654 12.8453L2.58213 12.0198C2.5944 12.0114 2.62082 12.0018 2.65973 12.0166C2.68117 12.0248 2.70971 12.0423 2.73389 12.0745C2.75962 12.1087 2.76895 12.1446 2.7699 12.1682L1.7707 12.2084ZM7.67069 0.981816C8.19718 1.27626 8.97947 1.72047 9.66839 2.35406C10.3563 2.98668 10.9137 3.77423 11.049 4.7469L12.0395 4.60915C11.8608 3.32406 11.1303 2.33994 10.3453 1.61801C9.5614 0.897052 8.68594 0.403839 8.1588 0.109034L7.67069 0.981816ZM11.049 4.7469C11.2353 6.08609 11.1382 7.8428 10.9225 9.47808C10.7069 11.1118 10.3803 12.57 10.1334 13.3016L11.0809 13.6214C11.3563 12.8054 11.6937 11.2773 11.9139 9.6089C12.1338 7.94209 12.2442 6.08086 12.0395 4.60915L11.049 4.7469ZM10.1646 13.2693L8.1305 13.2693L8.1305 14.2693L10.1646 14.2693L10.1646 13.2693ZM10.1334 13.3016C10.135 13.2968 10.1378 13.2912 10.142 13.2857C10.1461 13.2804 10.1504 13.2765 10.1542 13.274C10.1616 13.2689 10.1658 13.2693 10.1646 13.2693L10.1646 14.2693C10.5575 14.2693 10.9416 14.0339 11.0809 13.6214L10.1334 13.3016ZM8.15173 0.123325C7.11205 0.70477 4.82426 2.08159 4.47274 4.60915L5.46321 4.7469C5.73968 2.75895 7.57226 1.59316 8.63983 0.996108L8.15173 0.123325ZM4.47274 4.60915C4.26807 6.08086 4.37842 7.94208 4.59835 9.6089C4.8185 11.2773 5.15594 12.8054 5.43137 13.6214L6.37885 13.3016C6.13191 12.57 5.80532 11.1118 5.58976 9.47808C5.37399 7.84279 5.27697 6.08609 5.46321 4.7469L4.47274 4.60915ZM6.34765 14.2693L8.38173 14.2693L8.38173 13.2693H6.34765L6.34765 14.2693ZM5.43137 13.6214C5.5706 14.0339 5.95474 14.2693 6.34765 14.2693L6.34765 13.2693C6.34644 13.2693 6.3506 13.2689 6.35799 13.274C6.36178 13.2765 6.36614 13.2804 6.37021 13.2857C6.3744 13.2912 6.37725 13.2968 6.37885 13.3016L5.43137 13.6214ZM9.13788 4.64523C9.13788 5.22534 8.67837 5.68011 8.1305 5.68011L8.1305 6.68011C9.24763 6.68011 10.1379 5.7605 10.1379 4.64523L9.13788 4.64523ZM8.1305 5.68011C7.58262 5.68011 7.12312 5.22534 7.12312 4.64523L6.12312 4.64523C6.12312 5.7605 7.01337 6.68011 8.1305 6.68011L8.1305 5.68011ZM7.12312 4.64523C7.12312 4.06512 7.58262 3.61035 8.1305 3.61035L8.1305 2.61034C7.01337 2.61034 6.12312 3.52995 6.12312 4.64523L7.12312 4.64523ZM8.1305 3.61035C8.67837 3.61035 9.13788 4.06512 9.13788 4.64523L10.1379 4.64523C10.1379 3.52995 9.24763 2.61035 8.1305 2.61034L8.1305 3.61035ZM8.38419 8.05608C8.38419 8.21235 8.26212 8.32352 8.1305 8.32352V9.32352C8.83138 9.32352 9.38419 8.74751 9.38419 8.05608H8.38419ZM8.1305 8.32352C7.99887 8.32352 7.87681 8.21235 7.87681 8.05608H6.87681C6.87681 8.74751 7.42962 9.32352 8.1305 9.32352V8.32352ZM7.87681 8.05608C7.87681 7.89982 7.99887 7.78864 8.1305 7.78864V6.78864C7.42962 6.78864 6.87681 7.36465 6.87681 8.05608H7.87681ZM8.1305 7.78864C8.26212 7.78864 8.38419 7.89982 8.38419 8.05608H9.38419C9.38419 7.36465 8.83138 6.78864 8.1305 6.78864V7.78864ZM6.72354 13.5392L6.18728 14.5738L7.07511 15.0339L7.61136 13.9994L6.72354 13.5392ZM6.92744 15.8041L9.50104 15.8041L9.50104 14.8041L6.92744 14.8041L6.92744 15.8041ZM10.2412 14.5738L9.70495 13.5392L8.81712 13.9993L9.35337 15.0339L10.2412 14.5738ZM9.50104 15.8041C10.1431 15.8041 10.5245 15.1204 10.2412 14.5738L9.35337 15.0339C9.30552 14.9416 9.36347 14.8041 9.50104 14.8041L9.50104 15.8041ZM6.18728 14.5738C5.90396 15.1204 6.2854 15.8041 6.92744 15.8041L6.92744 14.8041C7.06501 14.8041 7.12297 14.9416 7.07511 15.0339L6.18728 14.5738ZM5.78568 12.777L10.7684 12.777L10.7684 11.777L5.78568 11.777V12.777Z'
			fill={color}
		/>
	</svg>
);