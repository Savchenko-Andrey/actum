import Image from "next/image";
import Link from "next/link";

import LinkedPath from "@/assets/svg/black_detail_icon.png";

import styles from "./Click.module.scss";

export default function ClickIcon({ path, color }) {
  return (
    <>
      <div className={styles.box_icon}>
      <Image
        src={LinkedPath}
        alt="Linked"
        width={180}
        height={180}
        loading="lazy"
        className={styles.criminal_icon}
      />
      <Link href={path}>
        <svg
          className={styles.criminal_icon_click}
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="37"
          viewBox="0 0 33 37"
          fill="none"
        >
          <path
            d="M4.72346 9.89514C4.72346 7.31326 5.74911 4.83713 7.57478 3.01147C9.40044 1.1858 11.8766 0.160156 14.4584 0.160156C17.0403 0.160156 19.5165 1.1858 21.3421 3.01147C23.1678 4.83713 24.1934 7.31326 24.1934 9.89514C24.1934 10.0796 24.1202 10.2564 23.9898 10.3868C23.8594 10.5172 23.6825 10.5905 23.4981 10.5905C23.3137 10.5905 23.1368 10.5172 23.0064 10.3868C22.876 10.2564 22.8027 10.0796 22.8027 9.89514C22.8027 7.6821 21.9236 5.5597 20.3587 3.99485C18.7939 2.42999 16.6715 1.55087 14.4584 1.55087C12.2454 1.55087 10.123 2.42999 8.55816 3.99485C6.9933 5.5597 6.11418 7.6821 6.11418 9.89514C6.11418 10.0796 6.04092 10.2564 5.91051 10.3868C5.78011 10.5172 5.60324 10.5905 5.41882 10.5905C5.2344 10.5905 5.05753 10.5172 4.92713 10.3868C4.79673 10.2564 4.72346 10.0796 4.72346 9.89514ZM28.3656 18.2394C27.3329 18.2382 26.3369 18.6218 25.572 19.3155C25.5127 18.5394 25.2374 17.7954 24.7774 17.1675C24.3174 16.5397 23.6909 16.053 22.9688 15.7626C22.2467 15.4722 21.4577 15.3895 20.6911 15.524C19.9245 15.6585 19.2107 16.0047 18.6306 16.5236V9.89514C18.6306 8.78862 18.191 7.72742 17.4086 6.94499C16.6262 6.16257 15.565 5.723 14.4584 5.723C13.3519 5.723 12.2907 6.16257 11.5083 6.94499C10.7259 7.72742 10.2863 8.78862 10.2863 9.89514V26.236L8.32888 23.0965C7.76095 22.1661 6.85149 21.495 5.79505 21.2266C4.73861 20.9583 3.6191 21.114 2.67602 21.6605C1.73293 22.207 1.04116 23.1009 0.748699 24.1509C0.456238 25.2009 0.586311 26.3237 1.11109 27.279L6.20805 35.971C6.30738 36.1151 6.4574 36.2164 6.62817 36.2548C6.79894 36.2932 6.97789 36.2657 7.12931 36.1779C7.28073 36.0901 7.39348 35.9485 7.44505 35.7812C7.49663 35.614 7.48323 35.4334 7.40754 35.2756L2.31232 26.5837C1.94348 25.9447 1.84359 25.1853 2.03464 24.4726C2.22568 23.76 2.692 23.1524 3.33101 22.7836C3.97003 22.4147 4.72939 22.3148 5.44205 22.5059C6.15471 22.6969 6.76229 23.1632 7.13113 23.8023L7.1433 23.8231L10.3906 29.0383C10.4704 29.167 10.59 29.2661 10.7312 29.3207C10.8724 29.3752 11.0276 29.3822 11.1732 29.3405C11.3187 29.2988 11.4467 29.2107 11.5376 29.0896C11.6286 28.9686 11.6775 28.8212 11.677 28.6697V9.89514C11.677 9.15746 11.9701 8.44999 12.4917 7.92838C13.0133 7.40676 13.7208 7.11371 14.4584 7.11371C15.1961 7.11371 15.9036 7.40676 16.4252 7.92838C16.9468 8.44999 17.2399 9.15746 17.2399 9.89514V21.7162C17.2399 21.9006 17.3131 22.0775 17.4435 22.2079C17.5739 22.3383 17.7508 22.4115 17.9352 22.4115C18.1196 22.4115 18.2965 22.3383 18.4269 22.2079C18.5573 22.0775 18.6306 21.9006 18.6306 21.7162V19.6301C18.6306 18.8924 18.9236 18.185 19.4452 17.6634C19.9669 17.1417 20.6743 16.8487 21.412 16.8487C22.1497 16.8487 22.8571 17.1417 23.3788 17.6634C23.9004 18.185 24.1934 18.8924 24.1934 19.6301V23.1069C24.1934 23.2913 24.2667 23.4682 24.3971 23.5986C24.5275 23.729 24.7044 23.8023 24.8888 23.8023C25.0732 23.8023 25.2501 23.729 25.3805 23.5986C25.5109 23.4682 25.5841 23.2913 25.5841 23.1069V22.4115C25.5841 21.6739 25.8772 20.9664 26.3988 20.4448C26.9204 19.9232 27.6279 19.6301 28.3656 19.6301C29.1032 19.6301 29.8107 19.9232 30.3323 20.4448C30.8539 20.9664 31.147 21.6739 31.147 22.4115V28.6697C31.147 32.6089 29.8415 35.2861 29.8293 35.3121C29.7884 35.3938 29.7639 35.4828 29.7574 35.574C29.7509 35.6651 29.7625 35.7567 29.7914 35.8434C29.8203 35.9301 29.866 36.0102 29.9259 36.0793C29.9858 36.1483 30.0587 36.2048 30.1405 36.2456C30.2372 36.2935 30.3437 36.3185 30.4516 36.3187C30.5808 36.3188 30.7075 36.2829 30.8174 36.215C30.9273 36.1471 31.0162 36.05 31.074 35.9345C31.1331 35.8145 32.5377 32.9566 32.5377 28.6697V22.4115C32.5377 21.305 32.0981 20.2438 31.3157 19.4614C30.5333 18.679 29.4721 18.2394 28.3656 18.2394Z"
            fill="url(#paint0_linear_610_549)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_610_549"
              x1="16.5667"
              y1="0.160156"
              x2="16.5667"
              y2="36.3187"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={color} />
              <stop offset="1" stopColor="#282332" />
            </linearGradient>
          </defs>
        </svg>
        </Link>
        </div>
    </>
  );
}
