import styles from "./itemlistcontainer.module.css"

export const ItemListContainer = ({greeting}) => {
return (
    <>
    <div className={`${styles.greeting}`}> {greeting} </div>
    </>
)
}
