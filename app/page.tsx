import {Button, Htag} from "@/components";

import styles from './page.module.css'


export default function Home() {
    return (
        <main className={styles.main}>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' >Button</Button>
            <Button appearance='ghost' >Button</Button>
        </main>
    )
}
