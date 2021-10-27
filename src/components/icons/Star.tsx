import React, { FC } from "react";
import { IIconProps } from "./type";

export const IconStar: FC<IIconProps> = ({ size = 16, color='white' }) => {
    const size16 = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.8112 15.0005C12.706 15.0009 12.6033 14.9681 12.5178 14.9067L8.49869 11.993L4.47963 14.9067C4.39376 14.969 4.29032 15.0024 4.18425 15.002C4.07817 15.0016 3.97497 14.9675 3.88956 14.9046C3.80415 14.8417 3.74096 14.7532 3.70912 14.6521C3.67728 14.5509 3.67844 14.4422 3.71244 14.3417L5.27994 9.69891L1.21744 6.91298C1.12944 6.8527 1.06303 6.76586 1.0279 6.66515C0.992767 6.56444 0.990764 6.45513 1.02218 6.3532C1.0536 6.25127 1.11679 6.16206 1.20252 6.0986C1.28825 6.03514 1.39202 6.00076 1.49869 6.00048H6.51057L8.02307 1.34579C8.05565 1.2453 8.11923 1.15771 8.20467 1.09558C8.29012 1.03346 8.39305 1 8.49869 1C8.60434 1 8.70727 1.03346 8.79271 1.09558C8.87816 1.15771 8.94174 1.2453 8.97432 1.34579L10.4868 6.00204H15.4987C15.6055 6.00199 15.7095 6.03613 15.7955 6.09947C15.8815 6.16281 15.9449 6.25201 15.9765 6.35402C16.0081 6.45603 16.0063 6.56548 15.9712 6.66634C15.9361 6.76721 15.8696 6.85419 15.7815 6.91454L11.7174 9.69891L13.284 14.3405C13.3094 14.4156 13.3165 14.4957 13.3048 14.5742C13.2931 14.6526 13.263 14.7272 13.2168 14.7917C13.1706 14.8561 13.1097 14.9087 13.0392 14.945C12.9687 14.9813 12.8905 15.0003 12.8112 15.0005Z" fill={color}/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9674 22.5005C18.8095 22.5011 18.6555 22.4519 18.5272 22.3598L12.4987 17.9892L6.47005 22.3598C6.34125 22.4533 6.18609 22.5033 6.02698 22.5027C5.86787 22.5021 5.71307 22.451 5.58496 22.3566C5.45684 22.2623 5.36205 22.1296 5.31429 21.9779C5.26653 21.8261 5.26827 21.6631 5.31927 21.5123L7.67052 14.5481L1.57676 10.3692C1.44477 10.2788 1.34515 10.1485 1.29245 9.99748C1.23976 9.84641 1.23676 9.68246 1.28388 9.52956C1.33101 9.37666 1.42579 9.24285 1.55439 9.14766C1.68298 9.05246 1.83865 9.00089 1.99864 9.00047H9.51646L11.7852 2.01844C11.8341 1.8677 11.9294 1.73631 12.0576 1.64313C12.1858 1.54995 12.3402 1.49976 12.4987 1.49976C12.6571 1.49976 12.8115 1.54995 12.9397 1.64313C13.0679 1.73631 13.1632 1.8677 13.2121 2.01844L15.4808 9.00282H22.9987C23.1589 9.00274 23.3149 9.05395 23.4438 9.14896C23.5728 9.24397 23.668 9.37777 23.7154 9.53079C23.7628 9.6838 23.76 9.84797 23.7074 9.99927C23.6547 10.1506 23.555 10.281 23.4229 10.3716L17.3268 14.5481L19.6766 21.5105C19.7147 21.6232 19.7254 21.7434 19.7079 21.861C19.6903 21.9787 19.645 22.0905 19.5758 22.1872C19.5065 22.284 19.4152 22.3628 19.3094 22.4173C19.2036 22.4717 19.0864 22.5003 18.9674 22.5005Z" fill={color}/>
    </svg>
    
    const size32 = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.2899 30.0006C25.0794 30.0014 24.874 29.9358 24.703 29.8131L16.6649 23.9856L8.62673 29.8131C8.45501 29.9376 8.24811 30.0044 8.03597 30.0036C7.82383 30.0028 7.61743 29.9346 7.44661 29.8088C7.27579 29.683 7.1494 29.5061 7.08572 29.3038C7.02204 29.1014 7.02436 28.884 7.09236 28.6831L10.2274 19.3975L2.10235 13.8256C1.92636 13.705 1.79353 13.5314 1.72327 13.3299C1.65301 13.1285 1.64901 12.9099 1.71184 12.706C1.77468 12.5022 1.90106 12.3238 2.07252 12.1968C2.24398 12.0699 2.45153 12.0011 2.66485 12.0006H12.6886L15.7136 2.69121C15.7788 2.49023 15.9059 2.31505 16.0768 2.1908C16.2477 2.06656 16.4536 1.99963 16.6649 1.99963C16.8762 1.99963 17.082 2.06656 17.2529 2.1908C17.4238 2.31505 17.551 2.49023 17.6161 2.69121L20.6411 12.0037H30.6649C30.8785 12.0036 31.0865 12.0719 31.2585 12.1986C31.4304 12.3252 31.5573 12.5037 31.6205 12.7077C31.6838 12.9117 31.68 13.1306 31.6098 13.3323C31.5397 13.534 31.4067 13.708 31.2305 13.8287L23.1024 19.3975L26.2355 28.6806C26.2863 28.8309 26.3005 28.9911 26.2772 29.148C26.2538 29.3049 26.1934 29.454 26.101 29.583C26.0086 29.7119 25.8869 29.817 25.7458 29.8897C25.6048 29.9623 25.4485 30.0003 25.2899 30.0006Z" fill={color}/>
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