import React, { FC } from "react";
import { IIconProps } from "./type";

export const IconHelpOutline: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.141 8.07499L9.384 7.90399C9.798 7.61599 10.086 7.35499 10.248 7.12099C10.416 6.88699 10.5 6.60799 10.5 6.28399C10.5 6.04399 10.446 5.82199 10.338 5.61799C10.23 5.41399 10.08 5.23699 9.888 5.08699C9.702 4.93699 9.477 4.81999 9.213 4.73599C8.955 4.65199 8.676 4.60999 8.376 4.60999C7.86 4.60999 7.395 4.73599 6.981 4.98799C6.7405 5.13299 6.53648 5.30927 6.36895 5.51682C6.1752 5.75686 6.30877 6.095 6.59336 6.21401C6.85715 6.32432 7.15303 6.19778 7.36529 6.00622C7.42924 5.9485 7.49914 5.89709 7.575 5.85199C7.803 5.71399 8.055 5.64499 8.331 5.64499C8.607 5.64499 8.835 5.71399 9.015 5.85199C9.201 5.98399 9.294 6.15199 9.294 6.35599C9.294 6.48799 9.252 6.61399 9.168 6.73399C9.084 6.84799 8.949 6.97099 8.763 7.10299L8.304 7.43599C8.022 7.64599 7.83 7.87099 7.728 8.11099C7.67084 8.24547 7.63347 8.40728 7.61588 8.5964C7.59008 8.87369 7.82856 9.09199 8.10705 9.09199C8.4025 9.09199 8.61357 8.83694 8.72121 8.56179C8.7286 8.5429 8.73653 8.52463 8.745 8.50699C8.823 8.35099 8.955 8.20699 9.141 8.07499Z" fill={color}/>
    <path d="M8.646 9.83899C8.508 9.69499 8.337 9.62299 8.133 9.62299C7.935 9.62299 7.764 9.69499 7.62 9.83899C7.476 9.98299 7.404 10.157 7.404 10.361C7.404 10.559 7.476 10.73 7.62 10.874C7.764 11.018 7.935 11.09 8.133 11.09C8.337 11.09 8.508 11.018 8.646 10.874C8.79 10.73 8.862 10.559 8.862 10.361C8.862 10.157 8.79 9.98299 8.646 9.83899Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" fill={color}/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2836 12.0844L13.557 11.892C14.0227 11.568 14.3467 11.2744 14.529 11.0111C14.718 10.7479 14.8125 10.434 14.8125 10.0695C14.8125 9.79948 14.7517 9.54973 14.6302 9.32023C14.5087 9.09073 14.34 8.89161 14.124 8.72286C13.9147 8.55411 13.6616 8.42248 13.3646 8.32798C13.0744 8.23348 12.7605 8.18623 12.423 8.18623C11.8425 8.18623 11.3194 8.32798 10.8536 8.61148C10.5831 8.77462 10.3535 8.97293 10.1651 9.20642C9.9471 9.47646 10.0974 9.85687 10.4175 9.99076C10.7143 10.1149 11.0472 9.9725 11.286 9.75699C11.3579 9.69206 11.4365 9.63423 11.5219 9.58348C11.7784 9.42823 12.0619 9.35061 12.3724 9.35061C12.6829 9.35061 12.9394 9.42823 13.1419 9.58348C13.3511 9.73198 13.4557 9.92098 13.4557 10.1505C13.4557 10.299 13.4085 10.4407 13.314 10.5757C13.2195 10.704 13.0676 10.8424 12.8584 10.9909L12.342 11.3655C12.0247 11.6017 11.8087 11.8549 11.694 12.1249C11.6297 12.2762 11.5877 12.4582 11.5679 12.671C11.5388 12.9829 11.8071 13.2285 12.1204 13.2285C12.4528 13.2285 12.6903 12.9416 12.8114 12.632C12.8197 12.6108 12.8286 12.5902 12.8381 12.5704C12.9259 12.3949 13.0744 12.2329 13.2836 12.0844Z" fill={color}/>
    <path d="M12.7267 14.0689C12.5715 13.9069 12.3791 13.8259 12.1496 13.8259C11.9269 13.8259 11.7345 13.9069 11.5725 14.0689C11.4105 14.2309 11.3295 14.4266 11.3295 14.6561C11.3295 14.8789 11.4105 15.0712 11.5725 15.2332C11.7345 15.3952 11.9269 15.4762 12.1496 15.4762C12.3791 15.4762 12.5715 15.3952 12.7267 15.2332C12.8887 15.0712 12.9697 14.8789 12.9697 14.6561C12.9697 14.4266 12.8887 14.2309 12.7267 14.0689Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM19.5 12C19.5 16.17 16.17 19.5 12 19.5C7.82 19.5 4.5 16.17 4.5 12C4.5 7.82 7.82 4.5 12 4.5C16.17 4.5 19.5 7.82 19.5 12Z" fill={color}/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.25 16C25.25 21.1086 21.1086 25.25 16 25.25C10.8914 25.25 6.75 21.1086 6.75 16C6.75 10.8914 10.8914 6.75 16 6.75C21.1086 6.75 25.25 10.8914 25.25 16Z" stroke="#B9A7FF" strokeWidth="1.5"/>
    <path d="M17.4262 16.0937L17.73 15.88C18.2475 15.52 18.6075 15.1937 18.81 14.9012C19.02 14.6087 19.125 14.26 19.125 13.855C19.125 13.555 19.0575 13.2775 18.9225 13.0225C18.7875 12.7675 18.6 12.5462 18.36 12.3587C18.1275 12.1712 17.8462 12.025 17.5162 11.92C17.1937 11.815 16.845 11.7625 16.47 11.7625C15.825 11.7625 15.2437 11.92 14.7262 12.235C14.4256 12.4162 14.1706 12.6366 13.9612 12.896C13.719 13.1961 13.886 13.6187 14.2417 13.7675C14.5714 13.9054 14.9413 13.7472 15.2066 13.5078C15.2865 13.4356 15.3739 13.3714 15.4687 13.315C15.7537 13.1425 16.0687 13.0562 16.4137 13.0562C16.7587 13.0562 17.0437 13.1425 17.2687 13.315C17.5012 13.48 17.6175 13.69 17.6175 13.945C17.6175 14.11 17.565 14.2675 17.46 14.4175C17.355 14.56 17.1862 14.7137 16.9537 14.8787L16.38 15.295C16.0275 15.5575 15.7875 15.8387 15.66 16.1387C15.5886 16.3068 15.5418 16.5091 15.5198 16.7455C15.4876 17.0921 15.7857 17.365 16.1338 17.365C16.5031 17.365 16.767 17.0462 16.9015 16.7022C16.9107 16.6786 16.9207 16.6558 16.9312 16.6337C17.0287 16.4387 17.1937 16.2587 17.4262 16.0937Z" fill={color}/>
    <path d="M16.8075 18.2987C16.635 18.1187 16.4212 18.0287 16.1662 18.0287C15.9187 18.0287 15.705 18.1187 15.525 18.2987C15.345 18.4787 15.255 18.6962 15.255 18.9512C15.255 19.1987 15.345 19.4125 15.525 19.5925C15.705 19.7725 15.9187 19.8625 16.1662 19.8625C16.4212 19.8625 16.635 19.7725 16.8075 19.5925C16.9875 19.4125 17.0775 19.1987 17.0775 18.9512C17.0775 18.6962 16.9875 18.4787 16.8075 18.2987Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16ZM24.5 16C24.5 20.73 20.73 24.5 16 24.5C11.27 24.5 7.5 20.73 7.5 16C7.5 11.27 11.27 7.5 16 7.5C20.73 7.5 24.5 11.27 24.5 16Z" fill={color}/>
    </svg>    
    
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
}