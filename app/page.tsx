
import styles from './page.module.css'
import {Htag} from "@/components";

export default function Home() {
    return (
        <main className={styles.main}>
            <Htag tag='h1'>Text</Htag>
        </main>
    )
}
