

import {Button, Htag, Paragraph, Rating, Tag} from "@/components";

import styles from './page.module.css'

export default function Home() {

    return (
        <main className={styles.main}>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' >Button</Button>
            <Button appearance='ghost' >Button</Button>
            <Paragraph size='l'>Большой</Paragraph>
            <Paragraph>Средний</Paragraph>
            <Paragraph size='s'>Маленький</Paragraph>
            <Tag size={'m'} color={'red'}>Red</Tag>
            <Rating rating={3} isEditable />
        </main>
    )
}
