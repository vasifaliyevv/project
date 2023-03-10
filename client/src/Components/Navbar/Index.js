import React from 'react'
import styles from './Index.module.css'
import {Link} from 'react-router-dom'
const Index = () => {
  return (
    <>
    <nav className={styles.nav}>
    <div className={styles.navmain}>
    <div className={styles.left}>
 <Link className={styles.link} to='/'>
    
    <img src='data:image/png;base64,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' alt='sdas' width={50} height={50}/>
    </Link></div>
    <div className={styles.mid}>
    <uL>
    <li><Link className={styles.link} to='/'>Home</Link></li>
    
    <li><Link className={styles.link} to='/add'>ADD</Link></li>
    <li>Blog</li>
    <li>Pages</li>
    <li>Contact</li>
    </uL>
    </div>
    <div className={styles.right}>
    <div className={styles.right_left}>
    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAlCAYAAADfosCNAAAAAXNSR0IArs4c6QAAA7hJREFUWEftllFMU2cUx3+40lIyy3jQLWYkZq1kozNZERPwYZBFQ8SULBtzmpUtKe5hLixCF2PHg/WBYaKMB0O3bBaWyebiilFQFlhiMNFBIlo20iYzJWOBLNOipgUtLb10KUFHoNDvgu2WzPt6/+ee3/2f75zvpEWj0SgperwjETq7Q3T2TBGcWjrtM1lr2PGqkrLtGbyoU5CWKsgbv05z8rsHuIamhS3Z+ko6+97JTA2k9/cIza0P6L8eFgZ8KIyBpsTJY/ZJzl6ckg34MCDpkDH3rPUTTIUWn8ENb2o4sVfJBjUQlPj5dABLu7ToZ5IOaW+9zylnMI6LKhrb1rLRNUF1Y4SXLRqOFMxwfK+f9gXqpENWf+Jn4Jd4zaJg22trGL8U5iYKjAfX8vGmCLXvT3A91ZCle+4QmFhmyh3Ipm/HUxCW6LHf4/BPi01PupNFu8YFGmbOSb1E/XsBelLppCTBG+a73B6fiQM6v9yx109z+mI6Q7vu8WkqIWO5PjjoZ9Ad70xm8qVTjerSJFb7XOMYJA6bUuxkDNL+9X1O/RCvu2GbOQtLWfqjEdTbEsDa9S+MoGuD03xU5xc4l0tLkt44sdSNn0/ivPCfvXECeK+4cd9RcrZnHTdHMmU7atic7Ls71Istr4rzWj3PqvUEpZ2Eo3nCoEVblJgq1EleMMbOYCq2ke/0UGuAP8Yk2i8EZ0u/3BarzkijbLuK13dmoNsosE+6jmqp+Er45+MIS2jqd1C+7p9XsWvy2mCYIU+EP29J3PLNkKVJI/cFBS9tUhArceEW5aOAhI0z+r2JkjodjoFa8mWyjnXux3hEj3PYikFm7Hx5QsjQZRt55j5KzaXoZJ770avNdGga6G/ZzTwjZeMmhMTTTInxM/Lq2qjMlfN9H73Hazi5tY3huiI5gSvYJ30dVBXWkNPiwVaskpHMQ3Oxke6qbjre1cmIW9EW5KJBW4G7vpe2PTniyebGj/+Ei6YyjXhcHGXicuPjjLkQa66T4UMyjv+C8bMaSgFI6KvXYhqW2QADDWjf9tJw1cHu51aDiNgw935TTumx2+i168Wz+by4/6pc9fiJJRRyMjTm4sbIChaEjOfJL8hBTrvFc0EIEmmUDstbHOr0EcouwtrqYN/mOKlFdeL1mFUKQQa6ajBUB7Ces6BqMmK7a6P7XCULB4uoTiajPEjbj0dZ7yhk/2/LQybSJQVyttwHyqnpCkC2gdovvuXDgiXKLaKTSSlUbpnffOzyJ5CPy9InTv6vnPwbFAb7XIVazIAAAAAASUVORK5CYII=' alt='sa' width={40}/>
    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAjCAYAAAATx8MeAAAAAXNSR0IArs4c6QAAAp5JREFUWEft1UFokmEcx/Hv6OCpRofdJgWTDpYHo8NeGswazDpMGrg10BVkBc1LDmLzIm4QNhJ3KB0U0sEZzQWRu+Rh8RaDdxDshUAPoVAYbOBh5GHgQYzBhBXD9/E1Ywff8/95ns/z+z/P83bVarUax+zr6qAEO9JJSjAoOkm1L6ndPMq6TGY9zdY20N2HNCBhu3oNqe+U6LoN68TbVy2SDniZfZPFYHUwPnoF25ke2M0jf3pP6p0KA9PEwl6kntZsYqg9lchNF9FtG8FXT5i0HJHIjko04CKimJl+ncRrMeiWCaBKpO8P4vs+TjwZxNYohWqR1AM7fsVO7PMi9tP6XJqoykYQ620F71oGr1lgkT2F0HU3iaFl1ICEnrw0UGUyD61MVRdRnzkQPcbFpBNbwEhMXcQuOujQfhujqgqhc26yj2WWJ4wCMR2UFBI4hoNIKwX8l8SH1Ssbo3ZSeC77MTU7eTmDzzpFeWGTuLP5qyiGShbw9zex41IaT78PwpvER/81CpWIxYn8KEP6lklclYtiG1llbE0Wuxx/zaxx0Cso81bcX/1kViYxnRBz5Z7bGFkdY+2jF7PgmMMzaz4JFBI4h0N0L2SIOwUO+88UnkE/v+Zl3roE6o/YpzYKyC3ZGQnD3eQq/v4Gd7wkE3R5SPSGkF+OY9SR0r5RCEW1jPriDq5wgYu+GKF7EsbDr2K1TF5OEJyJsFUxUKG1X40Y6iDi0kaU2Zko8o4Bk0VCGjTBN5kPG1lKnMcxO8fcRB/Zp2O4kyd1/wObQtXbX/mRY6uYJ/8lDyaJC2YT5rM9GOrtqpZRWoDpQgndwRZg7UPty3XC2ovSCWs/qg5bilC6EcTRq938/4PSdvxR0UGJBtZJqpOUaAKidcfyTP0GGd1zpxWfS6IAAAAASUVORK5CYII=' alt='sdsasd' width={40}/>
    </div>
    <div className={styles.right_right}>
<button>Buy Now</button>
    </div>
    </div>
    
    </div>
    </nav>
    </>
  )
}

export default Index