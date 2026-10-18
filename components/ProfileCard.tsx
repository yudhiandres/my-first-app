
import { styles } from "@/config/styles";

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        Quality Digital Solutions Engineer
      </h2>

      <p className={styles.description}>
        Developing digital solutions, automation,
        and data analytics to support quality
        improvement in manufacturing processes.
      </p>
    </div>  
  );
}