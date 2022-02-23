import React, { FC } from 'react';
import { IIconProps } from './type';

export const IconOverview: FC<IIconProps> = ({
	size = 24,
	color = 'currentColor',
}) => {
	const size16 = (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1.24782 10.2362L1.10063 9.98218C1.05135 9.89689 1.01936 9.80272 1.00648 9.70506C0.993597 9.6074 1.00008 9.50816 1.02556 9.413C1.05104 9.31785 1.09501 9.22865 1.15497 9.15049C1.21493 9.07233 1.2897 9.00675 1.375 8.9575L4.08969 7.39281C4.14661 7.35982 4.20947 7.33838 4.27469 7.32973C4.3399 7.32108 4.40618 7.32539 4.46973 7.3424C4.53327 7.35941 4.59284 7.3888 4.64501 7.42887C4.69718 7.46895 4.74093 7.51892 4.77375 7.57593L5.17094 8.26343C5.23717 8.37827 5.25509 8.51471 5.22075 8.64275C5.18641 8.7708 5.10262 8.87996 4.98782 8.94625L2.27375 10.5109C2.10123 10.6103 1.89632 10.6372 1.70399 10.5857C1.51166 10.5342 1.3476 10.4085 1.24782 10.2362V10.2362Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.49375 8.00062L11.5172 14M5.33375 8.55375L4.5975 7.28125C4.49813 7.10894 4.47128 6.90421 4.52285 6.71211C4.57442 6.52 4.7002 6.35625 4.8725 6.25687L8.76188 4.01468C8.81879 3.98169 8.88166 3.96026 8.94687 3.95161C9.01209 3.94296 9.07837 3.94726 9.14191 3.96428C9.20546 3.98129 9.26503 4.01067 9.3172 4.05075C9.36937 4.09082 9.41312 4.1408 9.44594 4.19781L10.4325 5.90375C10.4987 6.01848 10.5166 6.15479 10.4824 6.28275C10.4482 6.4107 10.3646 6.51986 10.25 6.58625L6.35969 8.82812C6.27434 8.87759 6.18007 8.90974 6.08228 8.92273C5.98449 8.93571 5.8851 8.92928 5.7898 8.90379C5.69449 8.8783 5.60516 8.83427 5.5269 8.7742C5.44865 8.71413 5.38301 8.63922 5.33375 8.55375ZM10.6828 6.31906L9.22938 3.80562C9.13001 3.63331 9.10316 3.42859 9.15473 3.23648C9.2063 3.04437 9.33207 2.88062 9.50438 2.78125L12.4197 1.10062C12.5922 1.00119 12.7972 0.974243 12.9895 1.02568C13.1819 1.07711 13.346 1.20273 13.4459 1.375L14.8994 3.88843C14.9486 3.97377 14.9806 4.06797 14.9934 4.16565C15.0063 4.26334 14.9997 4.3626 14.9742 4.45775C14.9486 4.55291 14.9046 4.64211 14.8446 4.72024C14.7846 4.79837 14.7097 4.86392 14.6244 4.91312L11.7091 6.59375C11.5365 6.69323 11.3315 6.72018 11.1391 6.66868C10.9467 6.61718 10.7826 6.49144 10.6828 6.31906V6.31906ZM3.98719 15L6.99157 8.50031L3.98719 15Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
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
				d='M1.87172 15.3544L1.65094 14.9733C1.57702 14.8453 1.52903 14.7041 1.50971 14.5576C1.49039 14.4111 1.50012 14.2622 1.53834 14.1195C1.57656 13.9768 1.64252 13.843 1.73245 13.7257C1.82239 13.6085 1.93454 13.5101 2.0625 13.4363L6.13453 11.0892C6.2199 11.0397 6.3142 11.0076 6.41202 10.9946C6.50985 10.9816 6.60927 10.9881 6.70459 11.0136C6.79991 11.0391 6.88926 11.0832 6.96751 11.1433C7.04577 11.2034 7.11139 11.2784 7.16063 11.3639L7.75641 12.3952C7.85575 12.5674 7.88263 12.7721 7.83112 12.9641C7.77961 13.1562 7.65393 13.3199 7.48172 13.4194L3.41063 15.7664C3.15183 15.9155 2.84448 15.9558 2.55598 15.8786C2.26748 15.8013 2.0214 15.6128 1.87172 15.3544V15.3544Z'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.7406 12.0009L17.2758 21M8.00062 12.8306L6.89625 10.9219C6.74719 10.6634 6.70692 10.3563 6.78427 10.0682C6.86163 9.78 7.05029 9.53437 7.30875 9.38531L13.1428 6.02203C13.2282 5.97254 13.3225 5.94039 13.4203 5.92742C13.5181 5.91444 13.6175 5.9209 13.7129 5.94641C13.8082 5.97193 13.8975 6.01601 13.9758 6.07612C14.054 6.13623 14.1197 6.21119 14.1689 6.29671L15.6487 8.85562C15.748 9.02772 15.775 9.23218 15.7236 9.42412C15.6723 9.61606 15.5469 9.77979 15.375 9.87937L9.53953 13.2422C9.41151 13.3164 9.27011 13.3646 9.12342 13.3841C8.97673 13.4036 8.82764 13.3939 8.68469 13.3557C8.54174 13.3175 8.40773 13.2514 8.29035 13.1613C8.17297 13.0712 8.07451 12.9588 8.00062 12.8306ZM16.0242 9.47859L13.8441 5.70843C13.695 5.44997 13.6547 5.14288 13.7321 4.85472C13.8094 4.56656 13.9981 4.32093 14.2566 4.17187L18.6295 1.65093C18.8883 1.50179 19.1957 1.46137 19.4843 1.53852C19.7729 1.61567 20.0191 1.8041 20.1689 2.06249L22.3491 5.83265C22.4229 5.96065 22.4709 6.10195 22.4901 6.24848C22.5094 6.39501 22.4996 6.54389 22.4613 6.68663C22.423 6.82937 22.3569 6.96316 22.2669 7.08036C22.1768 7.19756 22.0646 7.29587 21.9366 7.36968L17.5636 9.89062C17.3048 10.0398 16.9973 10.0803 16.7087 10.003C16.4201 9.92577 16.1739 9.73716 16.0242 9.47859V9.47859ZM5.98078 22.5L10.4873 12.7505L5.98078 22.5Z'
				stroke={color}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
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
				d='M2.49562 20.4725L2.20125 19.9644C2.10269 19.7938 2.03871 19.6055 2.01295 19.4101C1.98719 19.2148 2.00016 19.0163 2.05111 18.826C2.10207 18.6357 2.19002 18.4573 2.30994 18.301C2.42985 18.1447 2.57939 18.0135 2.75 17.915L8.17937 14.7856C8.2932 14.7197 8.41894 14.6768 8.54936 14.6595C8.67979 14.6422 8.81235 14.6508 8.93945 14.6848C9.06654 14.7188 9.18567 14.7776 9.29001 14.8578C9.39435 14.9379 9.48185 15.0379 9.5475 15.1519L10.3419 16.5269C10.4743 16.7566 10.5102 17.0294 10.4415 17.2855C10.3728 17.5416 10.2052 17.7599 9.97562 17.8925L4.5475 21.0219C4.20244 21.2207 3.79263 21.2744 3.40797 21.1715C3.0233 21.0685 2.6952 20.8171 2.49562 20.4725V20.4725Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16.9875 16.0012L23.0344 28M10.6675 17.1075L9.195 14.5625C8.99626 14.2179 8.94255 13.8084 9.0457 13.4242C9.14884 13.04 9.40039 12.7125 9.745 12.5137L17.5237 8.02937C17.6376 7.96339 17.7633 7.92052 17.8937 7.90322C18.0242 7.88592 18.1567 7.89453 18.2838 7.92855C18.4109 7.96258 18.53 8.02135 18.6344 8.10149C18.7387 8.18164 18.8262 8.28159 18.8919 8.39562L20.865 11.8075C20.9974 12.037 21.0333 12.3096 20.9648 12.5655C20.8964 12.8214 20.7292 13.0397 20.5 13.1725L12.7194 17.6562C12.5487 17.7552 12.3601 17.8195 12.1646 17.8455C11.969 17.8714 11.7702 17.8586 11.5796 17.8076C11.389 17.7566 11.2103 17.6685 11.0538 17.5484C10.8973 17.4283 10.766 17.2784 10.6675 17.1075ZM21.3656 12.6381L18.4587 7.61124C18.26 7.26663 18.2063 6.85717 18.3094 6.47296C18.4126 6.08875 18.6641 5.76124 19.0087 5.56249L24.8394 2.20124C25.1844 2.00239 25.5943 1.94849 25.9791 2.05135C26.3638 2.15422 26.6921 2.40546 26.8919 2.74999L29.7987 7.77687C29.8973 7.94753 29.9612 8.13593 29.9868 8.3313C30.0125 8.52668 29.9994 8.72519 29.9484 8.91551C29.8973 9.10582 29.8092 9.28421 29.6892 9.44048C29.5691 9.59675 29.4195 9.72783 29.2487 9.82624L23.4181 13.1875C23.073 13.3865 22.663 13.4404 22.2782 13.3374C21.8934 13.2344 21.5652 12.9829 21.3656 12.6381V12.6381ZM7.97437 30L13.9831 17.0006L7.97437 30Z'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
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