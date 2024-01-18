import Image from "next/image";
import styles from "./style.module.scss";
import Score from "../component/score";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <h1>طرح‌های تشویقی</h1>
      <div className={styles.content}>
        <div className={styles.row}>
          <p>حضور در مناطق پردرخواست</p>
          <p className={styles.time}>
            ۵ روز : ۱۸ ساعت
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                fill="#BD0003"
              />
            </svg>
          </p>
        </div>
        <div className={styles.text}>
          <p className={styles.label}>بازه زمانی:</p>
          <p className={styles.description}>از شنبه ۱۰/۲۳ تا جمعه ۱۰/۲۹</p>
        </div>
        <div className={styles.text}>
          <p className={styles.label}> توضیحات:</p>
          <p className={styles.description}>
            با کسب هر ۱۰۰ سکّه، ۱۰۰ هزار تومان به کیف پول شما اضافه می‌شود و
            سکّه‌ها مجددا از صفر حساب می‌شوند.
          </p>
        </div>
        <div className={styles.line}></div>
        <Score />
      </div>
    </div>
  );
}
