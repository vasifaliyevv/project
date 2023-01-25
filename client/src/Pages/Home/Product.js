import React from 'react'
import styles from './Index.module.css'
const Product = ({product}) => {
  return (
    <div className={styles.pmain}>
<img width={320} src='https://i.etsystatic.com/35901997/r/il/b4bd63/4490209615/il_fullxfull.4490209615_39kr.jpg' alt='sas'/>
<div className={styles.maintext2}>
<h4>{product.name}</h4>
<h1>Quartz belt Watch</h1>
<h2>150$</h2>
</div>

</div>
  )
}

export default Product